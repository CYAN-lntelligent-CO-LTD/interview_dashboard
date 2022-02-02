const express = require('express');
const ITS_Tag = require('./obj.js');

const app = express();
const port = 11231;

let tags = [
    new ITS_Tag('TEP', 0, 60),
    new ITS_Tag('HUM', 40, 100),
    new ITS_Tag('PM25', 20, 110),
    new ITS_Tag('HCHO', 0, 3),
    new ITS_Tag('CO2', 0, 4000),
    new ITS_Tag('O3', 0.1, 0.7),
    new ITS_Tag('_other', 0, 100),
]

app.post('/jsonrpc/public', (req, res) => {
    res.send({result: true});
});

app.post('/jsonrpc/var', (req, res) => {
    let data = Object.fromEntries(tags.map(
        t => [t.name, t.random()]
    ));
    res.send({result: {data: data}});
});

app.listen(port, () => {
    console.log(`Starting ITS-Mock at http://0.0.0.0:${port}`);
});
