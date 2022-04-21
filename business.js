var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var res = JSON.parse(xhttp.responseText);
        // console.log(res.articles)
        var newsData = res.articles.map(function (article) {
            return article
        });

        var container = document.querySelector('#article-divs')
        newsData.forEach(function (article) {
            console.log(article)
            var articleDiv = document.createElement('div')
            articleDiv.classList.add('articleDiv')
            articleDiv.innerHTML = `
                <img src=${article.urlToImage}></img>
                <h2>${article.title}</h2>
                <h4>${article.author}</h4>
                `
            container.appendChild(articleDiv)
        })
    }
};
xhttp.open("GET", "https://newsapi.org/v2/everything?q=nba_playoffs&sortBy=popularity&apiKey=6f01ba015f76461b93d165d92ec71ab5", true);
xhttp.send();