$(document).ready(function(){
    function closeMenu() {
        $('.js-nav-dropdown').slideUp(400);
        $('.js-nav-toggle').removeClass('c-nav__close').addClass('c-nav__toggle');
    }
    function toggleMenu() {
        $('.js-nav-toggle').on('click', function(e) {
            $(this).hasClass('c-nav__toggle') ?
            ($('.js-nav-search-input').slideUp(400),
            $('.js-nav-dropdown').slideDown(400),
            $(this).removeClass('c-nav__toggle').addClass('c-nav__close')) :
            closeMenu()
        })
    }
    function openSearch() {
        $('body').on('click', function(e) {
            let searchInput = $('.js-nav-search-input');
            !$(e.target).is('.js-nav-search') && !$(e.target).is('.js-nav-search-input') ?
            searchInput.removeClass('is-open').slideUp(400) :
            (closeMenu(),
            searchInput.slideDown(400),
            searchInput.addClass('is-open'))
        })
    }
    function hideHeader() {
        let didScroll,
            lastScrollTop = 0,
            delta = 5,
            navbarHeight = $('.js-header').outerHeight();
        $(window).scroll(function(e){
            didScroll = true;
        });
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
        function hasScrolled() {
            let scroll = $(this).scrollTop();
            if (Math.abs(lastScrollTop - scroll) <= delta)
                return;
            if (scroll > lastScrollTop && scroll > navbarHeight) {
                $('.js-header').addClass('c-header-hide');
            } 
            else {
                if (scroll + $(window).height() < $(document).height()) {
                    $('.js-header').removeClass('c-header-hide');
                }
            }
            lastScrollTop = scroll;
        }
    }
    function init() {
        toggleMenu();
        openSearch();
        hideHeader();
    }
    init();
});