var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-container");
    if (n > slides.length) { slidePosition = 1 }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slidePosition - 1].style.display = "block";
}

setInterval(function () {
    var n = 0;
    n = n + 1;
    if (n > 4) {
        n = 1;
    }
    plusSlides(n);
}, 3000)