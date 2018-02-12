$(function () {
  
    var carouselList = $("#carousel ul");
    setInterval(changeSlide, 3000);

    function changeSlide() {
        carouselList.animate({
            'marginLeft': -600
        }, 1000, moveFirstSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({
            marginLeft: 0
        });
    }

    function moveLastSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({
            marginRight: '0px'
        });
    };

    $(".right-button").on('click', moveFirstSlide);
    $(".left-button").on('click', moveLastSlide);

});
