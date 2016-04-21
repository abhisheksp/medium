var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

router.get('/', function (req, res) {
    res.json('Medium API Docs Placeholder')
});
module.exports = router;