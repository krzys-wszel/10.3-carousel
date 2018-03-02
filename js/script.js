$(function () {
  
    var carouselList = $("#carousel ul");
    setInterval(changeSlide, 5000);

    function changeSlide() {
        carouselList.animate({
            'marginLeft': -800
        }, 1000, moveFirstSlide);
    }
     function changeSlideRight() {
        carouselList.animate({
            'marginLeft': 0
        }, 1000, moveLastSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({
            marginLeft: -400
        });
    }

    function moveLastSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({
            marginLeft: -400
        });
    };

    $(".right-button").on('click', changeSlide);
    $(".left-button").on('click', changeSlideRight);

});