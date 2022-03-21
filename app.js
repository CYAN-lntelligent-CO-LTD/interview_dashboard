const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// allow cros
app.use(cors())

// Configuration
const port = 3000;
const ip = "192.168.0.210";
const its_server = "http://192.168.0.210:1123/jsonrpc";
var cookie;

// Proxy endpoints
app.use('/', createProxyMiddleware({
    target: its_server,
    changeOrigin: true,
    onProxyReq: relayRequestHeaders,
    onProxyRes: relayResponseHeaders
}));


// Start Proxy
app.listen(port, ip, () => {
    console.log(`Starting Proxy at ${ip}:${port}`);
});


function relayRequestHeaders(proxyReq, req) {
    if (cookie) {
        proxyReq.setHeader('cookie', cookie);
        console.log(proxyReq.getHeader('Cookie'));
    }
};

function relayResponseHeaders(proxyRes, req, res) {
    var proxyCookie = proxyRes.headers["set-cookie"];
    if (proxyCookie) {
        cookie = proxyCookie;
    }
};