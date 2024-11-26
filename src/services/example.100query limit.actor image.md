Google Custom Search JSON API

https://www.googleapis.com/customsearch/v1?key=AIzaSyCA2egInVptcES-MB2MgC7LGeglFbm7M0A&cx=8757e8c3566874ad9&q=q=Keanu+Reeves+site:www.imdb.com

API_KEY: AIzaSyCA2egInVptcES-MB2MgC7LGeglFbm7M0A
Search engine ID: 8757e8c3566874ad9

![](_md_img/example.100query%20limit.actor%20search_images/example.100query%20limit.actor%20search%202024-11-26-11-25-36.png)

result:

```json
"title": "Keanu Reeves - IMDb",
            "htmlTitle": "<b>Keanu Reeves</b> - IMDb",
            "link": "https://www.imdb.com/name/nm0000206/",
```
![](_md_img/example.100query%20limit.actor%20search_images/example.100query%20limit.actor%20search%202024-11-26-11-29-46.png)

```json
"og:image": "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
![](_md_img/example.100query%20limit.actor%20search_images/example.100query%20limit.actor%20search%202024-11-26-11-27-41.png)
```

```json
{
    "kind": "customsearch#search",
    "url": {
        "type": "application/json",
        "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
    },
    "queries": {
        "request": [
            {
                "title": "Google Custom Search - q=Keanu Reeves site:www.imdb.com",
                "totalResults": "12700",
                "searchTerms": "q=Keanu Reeves site:www.imdb.com",
                "count": 10,
                "startIndex": 1,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "8757e8c3566874ad9"
            }
        ],
        "nextPage": [
            {
                "title": "Google Custom Search - q=Keanu Reeves site:www.imdb.com",
                "totalResults": "12700",
                "searchTerms": "q=Keanu Reeves site:www.imdb.com",
                "count": 10,
                "startIndex": 11,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "8757e8c3566874ad9"
            }
        ]
    },
    "context": {
        "title": "actor image"
    },
    "searchInformation": {
        "searchTime": 0.354435,
        "formattedSearchTime": "0.35",
        "totalResults": "12700",
        "formattedTotalResults": "12,700"
    },
    "items": [
        {
            "kind": "customsearch#result",
            "title": "Keanu Reeves - IMDb",
            "htmlTitle": "<b>Keanu Reeves</b> - IMDb",
            "link": "https://www.imdb.com/name/nm0000206/",
            "displayLink": "www.imdb.com",
            "snippet": "Keanu Reeves. Actor: The Matrix. Keanu Charles Reeves, whose first name means \"cool breeze over the mountains\" in Hawaiian, was born September 2, ...",
            "htmlSnippet": "<b>Keanu Reeves</b>. Actor: The Matrix. <b>Keanu</b> Charles <b>Reeves</b>, whose first name means &quot;cool breeze over the mountains&quot; in Hawaiian, was born September 2,&nbsp;...",
            "formattedUrl": "https://www.imdb.com/name/nm0000206/",
            "htmlFormattedUrl": "https://www.imdb.com/name/nm0000206/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT562LCCJLMQ_6kKu84pQn-_iSU0kxVwzj9wOig3mpig2qNJ7T95WDzaj8m&s",
                        "width": "183",
                        "height": "275"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "og:type": "profile",
                        "og:image:width": "1000",
                        "twitter:title": "Keanu Reeves | Actor, Producer, Additional Crew",
                        "twitter:card": "summary_large_image",
                        "imdb:subpagetype": "main",
                        "og:site_name": "IMDb",
                        "og:title": "Keanu Reeves | Actor, Producer, Additional Crew",
                        "imdb:pageconst": "nm0000206",
                        "og:image:height": "1500",
                        "og:description": "Known for: The Matrix, Speed, Point Break",
                        "twitter:image": "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "next-head-count": "49",
                        "twitter:image:alt": "Keanu Reeves. Actor: The Matrix. Keanu Charles Reeves, whose first name means \"cool breeze over the mountains\" in Hawaiian, was born September 2, 1964 in Beirut, Lebanon. He is the son of Patric Reeves, a showgirl and costume designer, and Samuel Nowlin Reeves, a geologist. Keanu's father was born in Hawaii, of Native Hawaiian and Chinese ancestry while Keanu's mother is originally from Essex England. After his parents' marriage dissolved,...",
                        "twitter:site": "@IMDb",
                        "og:locale:alternate": "es_ES",
                        "viewport": "width=device-width",
                        "twitter:description": "Known for: The Matrix, Speed, Point Break",
                        "og:locale": "en_US",
                        "og:url": "https://www.imdb.com/name/nm0000206/",
                        "imdb:pagetype": "name"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "The Day the Earth Stood Still (2008) - IMDb",
            "htmlTitle": "The Day the Earth Stood Still (2008) - IMDb",
            "link": "https://www.imdb.com/title/tt0970416/",
            "displayLink": "www.imdb.com",
            "snippet": "The Day the Earth Stood Still: Directed by Scott Derrickson. With Keanu Reeves, Jennifer Connelly, Kathy Bates, Jaden Smith. A remake of the 1951 classic ...",
            "htmlSnippet": "The Day the Earth Stood Still: Directed by Scott Derrickson. With <b>Keanu Reeves</b>, Jennifer Connelly, Kathy Bates, Jaden Smith. A remake of the 1951 classic&nbsp;...",
            "formattedUrl": "https://www.imdb.com/title/tt0970416/",
            "htmlFormattedUrl": "https://www.imdb.com/title/tt0970416/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExjuBGapARPrmmIEK5CF3O44yrYwliAU1YboorkAiOVe2UcMElYuk7X-g&s",
                        "width": "184",
                        "height": "275"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://m.media-amazon.com/images/M/MV5BMTI5NTg1MzU5Nl5BMl5BanBnXkFtZTcwMDU1ODMwMg@@._V1_FMjpg_UX1000_.jpg",
                        "og:type": "video.movie",
                        "og:image:width": "1000",
                        "twitter:title": "The Day the Earth Stood Still (2008) ⭐ 5.5 | Adventure, Drama, Sci-Fi",
                        "twitter:card": "summary_large_image",
                        "imdb:subpagetype": "main",
                        "og:site_name": "IMDb",
                        "og:title": "The Day the Earth Stood Still (2008) ⭐ 5.5 | Adventure, Drama, Sci-Fi",
                        "imdb:pageconst": "tt0970416",
                        "og:image:height": "1494.7683109118086",
                        "og:description": "1h 44m | PG-13",
                        "twitter:image": "https://m.media-amazon.com/images/M/MV5BMTI5NTg1MzU5Nl5BMl5BanBnXkFtZTcwMDU1ODMwMg@@._V1_FMjpg_UX1000_.jpg",
                        "next-head-count": "49",
                        "twitter:image:alt": "The Day the Earth Stood Still: Directed by Scott Derrickson. With Keanu Reeves, Jennifer Connelly, Kathy Bates, Jaden Smith. A remake of the 1951 classic science fiction film about an alien visitor and his giant robot counterpart who visit Earth.",
                        "twitter:site": "@IMDb",
                        "og:locale:alternate": "es_ES",
                        "viewport": "width=device-width",
                        "twitter:description": "1h 44m | PG-13",
                        "og:locale": "en_US",
                        "og:url": "https://www.imdb.com/title/tt0970416/",
                        "imdb:pagetype": "title"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://m.media-amazon.com/images/M/MV5BMTI5NTg1MzU5Nl5BMl5BanBnXkFtZTcwMDU1ODMwMg@@._V1_FMjpg_UX1000_.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "John Wick (2014) - IMDb",
            "htmlTitle": "John Wick (2014) - IMDb",
            "link": "https://www.imdb.com/title/tt2911666/",
            "displayLink": "www.imdb.com",
            "snippet": "John Wick: Directed by Chad Stahelski. With Keanu Reeves, Michael Nyqvist, Alfie Allen, Willem Dafoe. John Wick is a former hitman grieving the loss of his ...",
            "htmlSnippet": "John Wick: Directed by Chad Stahelski. With <b>Keanu Reeves</b>, Michael Nyqvist, Alfie Allen, Willem Dafoe. John Wick is a former hitman grieving the loss of his&nbsp;...",
            "formattedUrl": "https://www.imdb.com/title/tt2911666/",
            "htmlFormattedUrl": "https://www.imdb.com/title/tt2911666/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV38T6wbz_K_ck2rAVfKYN7rMeaCFR8CPoEuXkjQp7pB-OrVnwmiXQlng&s",
                        "width": "183",
                        "height": "275"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
                        "og:type": "video.movie",
                        "og:image:width": "1000",
                        "twitter:title": "John Wick (2014) ⭐ 7.4 | Action, Crime, Thriller",
                        "twitter:card": "summary_large_image",
                        "imdb:subpagetype": "main",
                        "og:site_name": "IMDb",
                        "og:title": "John Wick (2014) ⭐ 7.4 | Action, Crime, Thriller",
                        "imdb:pageconst": "tt2911666",
                        "og:image:height": "1500.3663003663003",
                        "og:description": "1h 41m | R",
                        "twitter:image": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
                        "next-head-count": "49",
                        "twitter:image:alt": "John Wick: Directed by Chad Stahelski. With Keanu Reeves, Michael Nyqvist, Alfie Allen, Willem Dafoe. John Wick is a former hitman grieving the loss of his true love. When his home is broken into, robbed, and his dog killed, he is forced to return to action to exact revenge.",
                        "twitter:site": "@IMDb",
                        "og:locale:alternate": "es_ES",
                        "viewport": "width=device-width",
                        "twitter:description": "1h 41m | R",
                        "og:locale": "en_US",
                        "og:url": "https://www.imdb.com/title/tt2911666/",
                        "imdb:pagetype": "title"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Something's Gotta Give (2003) - IMDb",
            "htmlTitle": "Something&#39;s Gotta Give (2003) - IMDb",
            "link": "https://www.imdb.com/title/tt0337741/",
            "displayLink": "www.imdb.com",
            "snippet": "Something's Gotta Give: Directed by Nancy Meyers. With Jack Nicholson, Diane Keaton, Keanu Reeves, Frances McDormand. A swinger on the cusp of being a ...",
            "htmlSnippet": "Something&#39;s Gotta Give: Directed by Nancy Meyers. With Jack Nicholson, Diane Keaton, <b>Keanu Reeves</b>, Frances McDormand. A swinger on the cusp of being a&nbsp;...",
            "formattedUrl": "https://www.imdb.com/title/tt0337741/",
            "htmlFormattedUrl": "https://www.imdb.com/title/tt0337741/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74Dd5JfSV0lDA_L28OV1heyzifjZ1igoqGLpeL1JTA2fOOEPsPv2xKiI&s",
                        "width": "184",
                        "height": "275"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://m.media-amazon.com/images/M/MV5BZWVkNmY0ODktOWE0MS00MGJkLTk4YTktMGM0NDFhODNiN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "og:type": "video.movie",
                        "og:image:width": "1000",
                        "twitter:title": "Something's Gotta Give (2003) ⭐ 6.7 | Comedy, Drama, Romance",
                        "twitter:card": "summary_large_image",
                        "imdb:subpagetype": "main",
                        "og:site_name": "IMDb",
                        "og:title": "Something's Gotta Give (2003) ⭐ 6.7 | Comedy, Drama, Romance",
                        "imdb:pageconst": "tt0337741",
                        "og:image:height": "1494",
                        "og:description": "2h 8m | PG-13",
                        "twitter:image": "https://m.media-amazon.com/images/M/MV5BZWVkNmY0ODktOWE0MS00MGJkLTk4YTktMGM0NDFhODNiN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "next-head-count": "49",
                        "twitter:image:alt": "Something's Gotta Give: Directed by Nancy Meyers. With Jack Nicholson, Diane Keaton, Keanu Reeves, Frances McDormand. A swinger on the cusp of being a senior citizen with a taste for young women falls in love with an accomplished woman closer to his age.",
                        "twitter:site": "@IMDb",
                        "og:locale:alternate": "es_ES",
                        "viewport": "width=device-width",
                        "twitter:description": "2h 8m | PG-13",
                        "og:locale": "en_US",
                        "og:url": "https://www.imdb.com/title/tt0337741/",
                        "imdb:pagetype": "title"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://m.media-amazon.com/images/M/MV5BZWVkNmY0ODktOWE0MS00MGJkLTk4YTktMGM0NDFhODNiN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Keanu Reeves - News - IMDb",
            "htmlTitle": "<b>Keanu Reeves</b> - News - IMDb",
            "link": "https://www.imdb.com/name/nm0000206/news/",
            "displayLink": "www.imdb.com",
            "snippet": "Keanu Reeves - News - IMDb - Movies, TV, Celebs, and more...",
            "htmlSnippet": "<b>Keanu Reeves</b> - News - IMDb - Movies, TV, Celebs, and more...",
            "formattedUrl": "https://www.imdb.com/name/nm0000206/news/",
            "htmlFormattedUrl": "https://www.imdb.com/name/nm0000206/news/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT562LCCJLMQ_6kKu84pQn-_iSU0kxVwzj9wOig3mpig2qNJ7T95WDzaj8m&s",
                        "width": "183",
                        "height": "275"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "og:type": "profile",
                        "og:image:width": "1000",
                        "twitter:title": "Keanu Reeves - News - IMDb",
                        "twitter:card": "summary_large_image",
                        "imdb:subpagetype": "news",
                        "og:site_name": "IMDb",
                        "og:title": "Keanu Reeves - News - IMDb",
                        "imdb:pageconst": "nm0000206",
                        "og:image:height": "1500",
                        "og:description": "Keanu Reeves - News - IMDb - Movies, TV, Celebs, and more...",
                        "twitter:image": "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "next-head-count": "39",
                        "twitter:image:alt": "Keanu Reeves - News - IMDb - Movies, TV, Celebs, and more...",
                        "twitter:site": "@IMDb",
                        "og:locale:alternate": "es_ES",
                        "viewport": "width=device-width",
                        "twitter:description": "Keanu Reeves - News - IMDb - Movies, TV, Celebs, and more...",
                        "og:locale": "en_US",
                        "og:url": "https://www.imdb.com/name/nm0000206/news/",
                        "imdb:pagetype": "name"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Constantine (2005) - IMDb",
            "htmlTitle": "Constantine (2005) - IMDb",
            "link": "https://www.imdb.com/title/tt0360486/",
            "displayLink": "www.imdb.com",
            "snippet": "Constantine: Directed by Francis Lawrence. With Keanu Reeves, Rachel Weisz, Shia LaBeouf, Djimon Hounsou. Detective Angela approaches Constantine, ...",
            "htmlSnippet": "Constantine: Directed by Francis Lawrence. With <b>Keanu Reeves</b>, Rachel Weisz, Shia LaBeouf, Djimon Hounsou. Detective Angela approaches Constantine,&nbsp;...",
            "formattedUrl": "https://www.imdb.com/title/tt0360486/",
            "htmlFormattedUrl": "https://www.imdb.com/title/tt0360486/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylJhgQPa2VJi8eF8rAXBLxjeVXFr4FuXcdmXLLy43pHK7NPBR_T60aww&s",
                        "width": "184",
                        "height": "274"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://m.media-amazon.com/images/M/MV5BMjNhNTlmYmYtYjcxZi00ZDU1LTkxMWYtYzFlMWMzY2RiODM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "og:type": "video.movie",
                        "og:image:width": "1000",
                        "twitter:title": "Constantine (2005) ⭐ 7.0 | Action, Fantasy, Horror",
                        "twitter:card": "summary_large_image",
                        "imdb:subpagetype": "main",
                        "og:site_name": "IMDb",
                        "og:title": "Constantine (2005) ⭐ 7.0 | Action, Fantasy, Horror",
                        "imdb:pageconst": "tt0360486",
                        "og:image:height": "1483.1804281345567",
                        "og:description": "2h 1m | R",
                        "twitter:image": "https://m.media-amazon.com/images/M/MV5BMjNhNTlmYmYtYjcxZi00ZDU1LTkxMWYtYzFlMWMzY2RiODM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "next-head-count": "49",
                        "twitter:image:alt": "Constantine: Directed by Francis Lawrence. With Keanu Reeves, Rachel Weisz, Shia LaBeouf, Djimon Hounsou. Detective Angela approaches Constantine, a demon hunter, to help her investigate her twin sister's mysterious death. As he digs deeper, he realizes that demons are trying to enter the human world.",
                        "twitter:site": "@IMDb",
                        "og:locale:alternate": "es_ES",
                        "viewport": "width=device-width",
                        "twitter:description": "2h 1m | R",
                        "og:locale": "en_US",
                        "og:url": "https://www.imdb.com/title/tt0360486/",
                        "imdb:pagetype": "title"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://m.media-amazon.com/images/M/MV5BMjNhNTlmYmYtYjcxZi00ZDU1LTkxMWYtYzFlMWMzY2RiODM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "The Devil's Advocate (1997) - IMDb",
            "htmlTitle": "The Devil&#39;s Advocate (1997) - IMDb",
            "link": "https://www.imdb.com/title/tt0118971/",
            "displayLink": "www.imdb.com",
            "snippet": "The Devil's Advocate: Directed by Taylor Hackford. With Keanu Reeves, Al Pacino, Charlize Theron, Jeffrey Jones. An exceptionally adept Florida lawyer is ...",
            "htmlSnippet": "The Devil&#39;s Advocate: Directed by Taylor Hackford. With <b>Keanu Reeves</b>, Al Pacino, Charlize Theron, Jeffrey Jones. An exceptionally adept Florida lawyer is&nbsp;...",
            "formattedUrl": "https://www.imdb.com/title/tt0118971/",
            "htmlFormattedUrl": "https://www.imdb.com/title/tt0118971/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFnBtc9l7ZmuiTAwVKjHF-KssO7tuXcbMthRpcbKHyS7CgGuEO4f7MY0&s",
                        "width": "188",
                        "height": "268"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://m.media-amazon.com/images/M/MV5BNGIxZmU2ZjEtYjc3OC00Y2FiLWE2ZTQtZGI3NzE0YmRhOTMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "og:type": "video.movie",
                        "og:image:width": "1000",
                        "twitter:title": "The Devil's Advocate (1997) ⭐ 7.5 | Drama, Fantasy, Mystery",
                        "twitter:card": "summary_large_image",
                        "imdb:subpagetype": "main",
                        "og:site_name": "IMDb",
                        "og:title": "The Devil's Advocate (1997) ⭐ 7.5 | Drama, Fantasy, Mystery",
                        "imdb:pageconst": "tt0118971",
                        "og:image:height": "1421.25",
                        "og:description": "2h 24m | R",
                        "twitter:image": "https://m.media-amazon.com/images/M/MV5BNGIxZmU2ZjEtYjc3OC00Y2FiLWE2ZTQtZGI3NzE0YmRhOTMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "next-head-count": "49",
                        "twitter:image:alt": "The Devil's Advocate: Directed by Taylor Hackford. With Keanu Reeves, Al Pacino, Charlize Theron, Jeffrey Jones. An exceptionally adept Florida lawyer is offered a job at a high-end New York City law firm with a high-end boss - the biggest opportunity of his career to date.",
                        "twitter:site": "@IMDb",
                        "og:locale:alternate": "es_ES",
                        "viewport": "width=device-width",
                        "twitter:description": "2h 24m | R",
                        "og:locale": "en_US",
                        "og:url": "https://www.imdb.com/title/tt0118971/",
                        "imdb:pagetype": "title"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://m.media-amazon.com/images/M/MV5BNGIxZmU2ZjEtYjc3OC00Y2FiLWE2ZTQtZGI3NzE0YmRhOTMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "The Replacements (2000) - Keanu Reeves as Shane Falco - IMDb",
            "htmlTitle": "The Replacements (2000) - <b>Keanu Reeves</b> as Shane Falco - IMDb",
            "link": "https://www.imdb.com/title/tt0191397/characters/nm0000206",
            "displayLink": "www.imdb.com",
            "snippet": "Chicks dig scars. Glory lasts forever. Shane Falco : [Shane parks his truck at the stadium and sees several of the former Sentinels approaching his truck] You ...",
            "htmlSnippet": "Chicks dig scars. Glory lasts forever. Shane Falco : [Shane parks his truck at the stadium and sees several of the former Sentinels approaching his truck] You&nbsp;...",
            "formattedUrl": "https://www.imdb.com/title/tt0191397/characters/nm0000206",
            "htmlFormattedUrl": "https://www.imdb.com/title/tt0191397/characters/nm0000206",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3MxvVdVrFZtiaLJXP2Xgnc0cz2K_S14_dHyxP5GSPxnaCql_ju1BKgpg&s",
                        "width": "163",
                        "height": "310"
                    }
                ],
                "metatags": [
                    {
                        "pagetype": "title",
                        "subpagetype": "characters",
                        "og:image": "https://m.media-amazon.com/images/M/MV5BMmE2ZWY5ZTUtMDAzOC00OWE3LWFlYmQtYmY2OGNiMTQyNjY1XkEyXkFqcGc@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
                        "theme-color": "#000000",
                        "og:type": "video.movie",
                        "og:site_name": "IMDb",
                        "og:title": "The Replacements (2000) - IMDb",
                        "pageid": "tt0191397",
                        "title": "The Replacements (2000) - IMDb",
                        "og:description": "The Replacements (2000) Keanu Reeves as Shane Falco",
                        "fb:app_id": "115109575169727",
                        "og:url": "http://www.imdb.com/title/tt0191397/characters/nm0000206",
                        "request_id": "95AKNP5DZ0N3CFGF4VF7"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://m.media-amazon.com/images/M/MV5BMmE2ZWY5ZTUtMDAzOC00OWE3LWFlYmQtYmY2OGNiMTQyNjY1XkEyXkFqcGc@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "The Matrix (1999) - IMDb",
            "htmlTitle": "The Matrix (1999) - IMDb",
            "link": "https://www.imdb.com/title/tt0133093/",
            "displayLink": "www.imdb.com",
            "snippet": "The Matrix: Directed by Lana Wachowski, Lilly Wachowski. With Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving. When a beautiful stranger ...",
            "htmlSnippet": "The Matrix: Directed by Lana Wachowski, Lilly Wachowski. With <b>Keanu Reeves</b>, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving. When a beautiful stranger&nbsp;...",
            "formattedUrl": "https://www.imdb.com/title/tt0133093/",
            "htmlFormattedUrl": "https://www.imdb.com/title/tt0133093/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuY_CZpT7VzUcDt8-0qyAYVfG5_awxNY3bmgdmhZ8ZsRamjzHp8LAJiJE&s",
                        "width": "183",
                        "height": "275"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "og:type": "video.movie",
                        "og:image:width": "1000",
                        "twitter:title": "The Matrix (1999) ⭐ 8.7 | Action, Sci-Fi",
                        "twitter:card": "summary_large_image",
                        "imdb:subpagetype": "main",
                        "og:site_name": "IMDb",
                        "og:title": "The Matrix (1999) ⭐ 8.7 | Action, Sci-Fi",
                        "imdb:pageconst": "tt0133093",
                        "og:image:height": "1502.857142857143",
                        "og:description": "2h 16m | R",
                        "twitter:image": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "next-head-count": "49",
                        "twitter:image:alt": "The Matrix: Directed by Lana Wachowski, Lilly Wachowski. With Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving. When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
                        "twitter:site": "@IMDb",
                        "og:locale:alternate": "es_ES",
                        "viewport": "width=device-width",
                        "twitter:description": "2h 16m | R",
                        "og:locale": "en_US",
                        "og:url": "https://www.imdb.com/title/tt0133093/",
                        "imdb:pagetype": "title"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Knock Knock (2015) - IMDb",
            "htmlTitle": "Knock Knock (2015) - IMDb",
            "link": "https://www.imdb.com/title/tt3605418/",
            "displayLink": "www.imdb.com",
            "snippet": "Knock Knock: Directed by Eli Roth. With Keanu Reeves, Lorenza Izzo, Ana de Armas, Aaron Burns. A devoted husband and father helps two stranded young women ...",
            "htmlSnippet": "Knock Knock: Directed by Eli Roth. With <b>Keanu Reeves</b>, Lorenza Izzo, Ana de Armas, Aaron Burns. A devoted husband and father helps two stranded young women&nbsp;...",
            "formattedUrl": "https://www.imdb.com/title/tt3605418/",
            "htmlFormattedUrl": "https://www.imdb.com/title/tt3605418/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkqjO27rZuMOMVxDO8Jvmdy7M_bwUywC06UVTcfH5uXyaJ3e-AVH3bNU&s",
                        "width": "190",
                        "height": "265"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://m.media-amazon.com/images/M/MV5BMzc4YmQ5ODktZmY3Zi00NzE4LWEzMzUtOWI4NzNiODAyYjk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "og:type": "video.movie",
                        "og:image:width": "1000",
                        "twitter:title": "Knock Knock (2015) ⭐ 4.9 | Crime, Thriller",
                        "twitter:card": "summary_large_image",
                        "imdb:subpagetype": "main",
                        "og:site_name": "IMDb",
                        "og:title": "Knock Knock (2015) ⭐ 4.9 | Crime, Thriller",
                        "imdb:pageconst": "tt3605418",
                        "og:image:height": "1394.0520446096655",
                        "og:description": "1h 39m | R",
                        "twitter:image": "https://m.media-amazon.com/images/M/MV5BMzc4YmQ5ODktZmY3Zi00NzE4LWEzMzUtOWI4NzNiODAyYjk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                        "next-head-count": "49",
                        "twitter:image:alt": "Knock Knock: Directed by Eli Roth. With Keanu Reeves, Lorenza Izzo, Ana de Armas, Aaron Burns. A devoted husband and father helps two stranded young women who knock on his door, but his kind gesture turns into a dangerous seduction and a deadly game of cat and mouse.",
                        "twitter:site": "@IMDb",
                        "og:locale:alternate": "es_ES",
                        "viewport": "width=device-width",
                        "twitter:description": "1h 39m | R",
                        "og:locale": "en_US",
                        "og:url": "https://www.imdb.com/title/tt3605418/",
                        "imdb:pagetype": "title"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://m.media-amazon.com/images/M/MV5BMzc4YmQ5ODktZmY3Zi00NzE4LWEzMzUtOWI4NzNiODAyYjk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                    }
                ]
            }
        }
    ]
}
```