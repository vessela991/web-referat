window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function showHtmlDiv(id) {
    
    var allArticles = document.getElementsByTagName('article');

    for (article of allArticles) {
        var btnId = article.id + "-btn";
        var btn = document.getElementById(btnId);
        if (article.id === id) {
            article.classList.remove("display-none");
            article.classList.add("display-flex");
            window.scrollTo(0,0);
            btn.classList.add("button-active")
        } else {
            article.classList.remove("display-flex");
            article.classList.add("display-none");
            btn.classList.remove("button-active")
        }
    }
}
