"use strict"
$(document).ready(function () {

    window.onscroll = () => stickyHeader();
    tabToggle();
    scrollToLink();
    modalWindow();

    // Functions Declaration
    function stickyHeader() {
        const headerTop = document.querySelector(".header");
        window.pageYOffset >= 150 ? headerTop.classList.add("header-sticky") : headerTop.classList.remove("header-sticky");
    }

    //Function Tabs Toggle for Brand Section
    function tabToggle() {
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

    //Function Smooth Scroll to Links
    function scrollToLink() {
        const anchors = document.querySelectorAll('a[href*="#"]')

        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()

                const blockID = anchor.getAttribute('href').substr(1)

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }

    //Function for Modal window logic
    function modalWindow() {
        const btnOpenModal = document.querySelector('.delivery-button');
        const btnCloseModal = document.querySelector('.close-modal');
        const modalWindow = document.querySelector('.modal');
        const modalOverlay = document.querySelector('.overlay');
        const header = document.querySelector('.header');

        const openModal = function () {
            modalWindow.classList.remove('hidden');
            modalOverlay.classList.remove('hidden');
            header.classList.add('hidden');
        }

        const closeModal = function () {
            modalWindow.classList.add('hidden');
            modalOverlay.classList.add('hidden');
            header.classList.remove('hidden');
        }

        btnOpenModal.addEventListener('click', openModal);
        btnCloseModal.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                if (!modalWindow.classList.contains('hidden')) closeModal();
            }
        });

    }
})
