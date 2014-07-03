var express = require('express');
var router = express.Router();
var config = require("../settings").config;

router.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"a": config.ip}));
});

module.exports = router;