var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var res = JSON.parse(xhttp.responseText);
        // console.log(res)

        var newsData = res.sources.map(function (article) {
            return article
        })

        var container = document.querySelector('#article-divs')
        newsData.forEach(function (article) {
            // console.log(article)
            var articleDiv = document.createElement('div')
            articleDiv.classList.add('articleDiv')
            articleDiv.innerHTML = `
                <h2>${article.name}</h2>
                <h6><a href="${article.url}">${article.url}</a></h6>
                `
            container.appendChild(articleDiv)
        })

    }
};
xhttp.open("GET", "https://newsapi.org/v2/top-headlines/sources?general&apiKey=6f01ba015f76461b93d165d92ec71ab5", true);
xhttp.send();