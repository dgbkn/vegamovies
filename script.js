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

function getWordStr(str) {
    return str.split(/\s+/).slice(0,10).join(" ");
}


var baseUrl = "https://thawning.tanishagoyal.repl.co/api?uri=";

function getCategoryUri(catid){
    return(baseUrl + encodeURIComponent("https://vegamovies.nl/wp-json/wp/v2/posts?_embed&categories="+catid));
}


function getSearchurl(query){
    // return `${baseUrl + encodeURIComponent(`https://vegamovies.nl/wp-json/wp/v2/search?_embed&search=${query}&per_page=10`) }`;
    return `${baseUrl + encodeURIComponent(`https://vegamovies.nl/wp-json/wp/v2/posts?_embed&search=${query}&per_page=70`) }`;
}

var latestPosts = baseUrl + encodeURIComponent("https://vegamovies.nl/wp-json/wp/v2/posts?_embed=1&per_page=50");

// async function getLatestPosts(){
//     return makeRequest("GET", latestPosts);
// }


// https://vegamovies.wiki/wp-json/wp/v2/posts?per_page=50







