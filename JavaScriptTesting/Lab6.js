function showContacts() {
    document.getElementById("popUp").style.visibility="visible";
}

function closeContacts(){
    document.getElementById("popUp").style.visibility="hidden";
}

let imageIndex = 1;
showSlides(imageIndex);

function plusSlides(n) {
    showSlides(imageIndex += n);
}

function currentSlide(n) {
    showSlides(imageIndex = n);
}

function showSlides(n) {
    let i;
    const images = document.getElementsByClassName("selfImage");
    const dots = document.getElementsByClassName("dot");
    if (n > images.length) imageIndex = 1
    if (n < 1) imageIndex = images.length
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    images[imageIndex-1].style.display = "block";
    dots[imageIndex-1].className += " active";
}
