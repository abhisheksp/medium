#Medium API to search for medium.com articles

Live API Link : https://medium-abhisheksp.rhcloud.com/

Request Format : GET /medium/posts/{search_query}

Response Format : JSON
```json
 {
   "success": [
     {
       "metadata": {
         "authorName": "Author's name",
         "authorProfileLink": "Author's medium.com profile link",
         "authorProfileImage": "Author's medium.com profile picture",
         "publishedDate": "published date",
         "readingTime": "reading time"
       },
       "title": "Article title",
       "subTitle": "Article subtitle",
       "link": "Article link"
     }
   ],
   "error": "true/false indicates the status of the response"
 }
```

Example Query: "https://medium-abhisheksp.rhcloud.com/medium/posts/rails%20okta"

GitHub Link: https://github.com/abhisheksp/medium