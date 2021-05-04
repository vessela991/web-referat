window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function showHtmlDiv(id) {
    
    var allSections = document.getElementsByTagName('section');

    for (section of allSections) {
        var btnId = section.id + "-btn";
        var btn = document.getElementById(btnId);
        if (section.id === id) {
            section.classList.remove("display-none");
            section.classList.add("display-flex");
            window.scrollTo(0,0);
            btn.classList.add("button-active")
        } else {
            section.classList.remove("display-flex");
            section.classList.add("display-none");
            btn.classList.remove("button-active")
        }
    }
}
