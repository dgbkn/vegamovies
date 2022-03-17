function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve({
                    status: this.status,
                    statusText: xhr.statusText,
                    responseText:xhr.responseText
                });
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}


var baseUrl = "https://thawing-scrubland-27252.herokuapp.com/api?uri=";

function getCategoryUri(catid){
    return(baseUrl + encodeURIComponent("https://vegamovies.nl/wp-json/wp/v2/posts?_embed&categories="+catid));
}

var latestPosts = baseUrl + encodeURIComponent("https://vegamovies.nl/wp-json/wp/v2/posts?_embed");

// async function getLatestPosts(){
//     return makeRequest("GET", latestPosts);
// }


// String baseUrl = "https://thawing-scrubland-27252.herokuapp.com/api?uri=https://vegamovies.nl/wp-json/wp/v2/posts?_embed";
//       "https://thawing-scrubland-27252.herokuapp.com/api?uri=https://vegamovies.nl/wp-json/wp/v2/posts?_embed&categories=2";
