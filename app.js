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
    // console.log(`進了relayRequestHeaders`);
    if (cookie) {
        // console.log(`有cookie`);
        proxyReq.setHeader('cookie', cookie);
        console.log(proxyReq.getHeader('Cookie'));
    }
};

function relayResponseHeaders(proxyRes, req, res) {
    // console.log(`進了relayResponseHeaders`);
    var proxyCookie = proxyRes.headers["set-cookie"];
    if (proxyCookie) {
        // console.log(`有proxyCookie`);
        cookie = proxyCookie;
        console.log(cookie);
    }
};