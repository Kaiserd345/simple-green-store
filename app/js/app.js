$(document).ready(function() {
    window.onscroll = function () {stickyHeader()};
    let headerTop = document.querySelector(".header");
    let sticky = headerTop.offsetTop;

    function stickyHeader() {
        if (window.pageYOffset >= 150) {
            headerTop.classList.add("header-sticky");
        } else {
            headerTop.classList.remove("header-sticky")
        }
    }
})