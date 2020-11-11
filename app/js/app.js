$(document).ready(function() {
    //Sticky Header
    window.onscroll = () => stickyHeader();
    const headerTop = document.querySelector(".header");

    function stickyHeader() {
        if (window.pageYOffset >= 150) {
            headerTop.classList.add("header-sticky");
        } else {
            headerTop.classList.remove("header-sticky")
        }
    }

    //Tabs Toggle for Brand Section
    const tabToggle = function () {
        const tabNav = document.querySelectorAll('.products-content-categories-button');
        const tabContent = document.querySelectorAll('.cat-tab');
        let tabName;

        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav)
        });

        function selectTabNav() {
            tabNav.forEach(item => {
                item.classList.remove('is-active');
            });
            this.classList.add('is-active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }

        function selectTabContent(tabName) {
            tabContent.forEach(item => {
                item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
            })
        }
    }

    tabToggle();
})