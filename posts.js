var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

var mediumQueryLink = 'https://medium.com/search?q=';
router.get('/:query', function (req, res) {
    var query = mediumQueryLink + req.params.query;
    request(query, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            var posts = [];
            $('div.postArticle').each(function () {
                var title = $(this).find(':header').text();
                var link = $(this).find('div.postArticle-content').find('a').first().attr('href');
                var readingTime = $(this).find('span.readingTime').attr('title');
                var publishDateTime = $(this).find('time').attr('datetime');
                var authorName = $(this).find('div.postMetaInline-authorLockup').find('a').first().text();
                var authorLink = $(this).find('div.postMetaInline-authorLockup').find('a').first().attr('href');
                var authorAvatar = $(this).find('img.avatar-image').attr('src');
                var post = {
                    title: title,
                    link: link,
                    readingTime: readingTime,
                    publishedDateTime: publishDateTime,
                    authorName: authorName,
                    authorLink: authorLink,
                    authorAvatar: authorAvatar
                };
                posts.push(post);
            });
            res.json(posts);
        }
        else {
          res.status(500).send({error: 'something went wrong with the medium endpoint'});
        }
    });
});
module.exports = router;