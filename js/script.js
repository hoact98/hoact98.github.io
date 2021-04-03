window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById("header-scroll").classList.add("fixed");
    } else {
        document.getElementById("header-scroll").classList.remove("fixed");
    }
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-collapse") {
        x.className += " show";
    } else {
        x.className = "navbar-collapse";
    }
}
