var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var res = JSON.parse(xhttp.responseText);
        console.log(res)
        var newsData = res.sources.map(function (article) {
            return article
        });

    }
};
xhttp.open("GET", "https://newsapi.org/v2/top-headlines/sources?general&apiKey=6f01ba015f76461b93d165d92ec71ab5", true);
xhttp.send();