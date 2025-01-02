var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
        document.querySelector(".sb__left").classList.remove('sidebar_up')
        document.querySelector(".sb__right").classList.remove('sidebar_up')
    } else {
        document.querySelector("header").style.top = "-88px";
        document.querySelector(".sb__left").classList.add('sidebar_up')
        document.querySelector(".sb__right").classList.add('sidebar_up')
    }
    prevScrollpos = currentScrollPos;
}