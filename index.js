// imports
const express = require('express');
const router = express();
const util = require('util');
const log = require.main.require('./helper/log');
const fs = require('fs');
const interject = require.main.require('./interject/interject')

// not imports
const port = process.env.PORT || 9666;

router.get('/', function (req, res) {
    res.send(interject.getRandom());
});

router.listen(port);

log.info(`Server running at http://localhost:${port}/`);

// console.log(interject.getRandom());


