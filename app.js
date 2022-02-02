const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config.json');

// Create Express Server
const app = express();

// allow cros
app.use(cors())

var cookie;

app.use('/static',express.static('./client/dist'));

// Proxy endpoints
app.use('/', createProxyMiddleware({
    target: `http://${config.ITS_server.ip}:${config.ITS_server.port}/jsonrpc`,
    changeOrigin: true,
    onProxyReq: relayRequestHeaders,
    onProxyRes: relayResponseHeaders,
    
}));

// Start Proxy
app.listen(config.ITS_proxy.port, config.ITS_proxy.ip, () => {
    console.log(`Starting Proxy at http://${config.ITS_proxy.ip}:${config.ITS_proxy.port}/static/index.html`);
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

module.exports = config;
