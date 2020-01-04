
var index = 0,
    Img = document.getElementsByClassName('CarouselImg');

function startAutoPlay() {
    timer = setInterval(function () {
        index++;
        if (index > 2) {
            index = 0;
        }
        changeImg();
    }, 3000);
}
function changeImg() {
    for (var i = 0; i < Img.length; i++) {
        Img[i].style.display = "none";
    }
    Img[index].style.display = "block";
}
startAutoPlay()
