// My Script
// hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-container');
const header = document.querySelector('.myNav');
const nav_menu_items = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
// Nav menu close on mobile view
nav_menu_items.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
// header background change
document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#EFF1FF"
    } else {
        header.style.backgroundColor = "transparent"
    }
});

// header nav marker line on bottom
if (window.innerWidth > 768) {
    const marker = document.querySelector('#marker');
    const item = document.querySelectorAll('.nav-links li a');

    function indicator(e) {
        marker.style.left = e.offsetLeft + "px";
        marker.style.width = e.offsetWidth + "px";
    }
    item.forEach(link => {
        link.addEventListener('click', (e) => {
            indicator(e.target)
        });
    });
}



// jquery structure
$(document).ready(function() {
    // AOS install
    AOS.init({
        duration: 1000
    });

    // Owl Carousel install
    $(document).ready(function() {
        $('.my-carousel').owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            responsiveClass: true,
            smartSpeed: 1000,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },

                992: {
                    items: 2
                },
                2000: {
                    items: 3
                }
            }
        });
    });

    // circle progress bar animation jquery plugin....
    $('svg.radial-progress').each(function(index, value) {
        $(this).find($('circle.complete')).removeAttr('style');
    });
    $(window).scroll(function() {
        $('svg.radial-progress').each(function(index, value) {
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
            }
        });
    }).trigger('scroll');

    // line progress bar.......
    function DemoProgressbars() {
        $('#html5').LineProgressbar({
            percentage: 90,
            fillBackgroundColor: '#ff7171',
            height: '2rem',
            duration: 2000
        });
        $('#css3').LineProgressbar({
            percentage: 85,
            fillBackgroundColor: '#3498db',
            height: '2rem',
            duration: 2200

        });
        $('#jquery').LineProgressbar({
            percentage: 75,
            fillBackgroundColor: '#ffc93c',
            height: '2rem',
            duration: 2300
        });
        $('#bootstrap').LineProgressbar({
            percentage: 85,
            fillBackgroundColor: '#ffaa71',
            height: '2rem',
            duration: 2600
        });
        $('#react').LineProgressbar({
            percentage: 75,
            fillBackgroundColor: '#005086',
            height: '2rem',
            duration: 2700
        });
        $('#photoshop').LineProgressbar({
            percentage: 80,
            fillBackgroundColor: '#89c9b8',
            height: '2rem',
            duration: 2800
        });

    }
    $('.skilled-log').waypoint(function() {
        DemoProgressbars();
    }, {
        offset: '100%',
        triggerOnce: true
    });

    // Social button hide/show on the page right side
    $('.js-about-me').waypoint(function(direction) {
        if (direction == 'down') {
            $(".social-button").css("transform", "translate(0%, -50%)")
        } else {
            $(".social-button").css("transform", "translate(100%, -50%)")
        }
    });

});

//  mixitup js
var mixer = mixitup(".mixtpag");