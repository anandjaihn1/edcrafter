$(document).ready(function () {
    $(".down-arrow-wrap").click(function () {
        let target = $(this).data("target");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});

$(document).ready(function () {
    let currentIndex = 0;
    let slides = $(".slide");
    let links = $(".slide-link");
    let totalSlides = slides.length;
    let interval;

    function changeSlide(index) {
        slides.stop(true, true).fadeOut(500).removeClass("active");
        links.removeClass("active");
        slides.eq(index).stop(true, true).fadeIn(500).addClass("active");
        links.eq(index).addClass("active");
        currentIndex = index;
    }

    function autoSlide() {
        interval = setInterval(function () {
            let nextIndex = (currentIndex + 1) % totalSlides;
            changeSlide(nextIndex);
        }, 5000);
    }

    links.click(function () {
        clearInterval(interval);
        let index = $(this).data("slide");
        changeSlide(index);
        autoSlide();
    });

    autoSlide();
});