# Medium API to search for medium.com articles

Live API Link : https://medium-abhisheksp.rhcloud.com/

Request Format : GET /medium/posts/{search_query}

Response Format : JSON

Success Response
```json
[{
	"title": "same title",
	"link": "https://examplelink.com",
	"readingTime": "8 min read",
	"publishedDateTime": "2015-06-20T01:24:16.341Z",
	"authorName": "sample authorname",
	"authorLink": "https://examplelink.com",
	"authorAvatar": "https://examplelink.com/example.png"
}]
```

Failure Response
```json
 {
   "error": "error message"
 }
```

Example Query: "https://medium-abhisheksp.rhcloud.com/medium/posts/rails%20okta"

GitHub Link: https://github.com/abhisheksp/medium