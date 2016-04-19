var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var port = process.env.PORT || 8080;
var router = express.Router();

var mediumQueryLink = 'https://medium.com/search?q=';
router.get('/:query', function (req, res) {
    var query = mediumQueryLink + req.params.query;
    request(query, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            var posts = [];
            $('div.postItem').each(function (i, element) {
                var postElement = $(element);
                var feedSummary = postElement.find('div.postMetaInline-feedSummary');
                var post = {
                    metadata: {
                        authorName: feedSummary.find('a').first().text(),
                        authorProfileLink: feedSummary.find('a').first().attr('href'),
                        authorProfileImage: postElement.find('div.postMetaInline-avatar').find('img').attr('src'),
                        publishedDate: feedSummary.find('a').last().text(),
                        readingTime: feedSummary.find('span.readingTime').text()
                    },
                    title: postElement.find('div.section-inner').children().not('figure').first().text(),
                    subTitle: postElement.find('div.section-inner').children().not('figure').last().text()
                };
                posts.push(post);
            });
            res.json(
                {
                    success: posts,
                    error: false
                }
            );
        }
        else {
            res.json(
                {
                    success: null,
                    error: true
                }
            );
        }
    });
});

app.use('/medium/posts', router);
app.listen(port);
console.log('Listening on :' + port);
