/* kalder animation når siden loades */

window.addEventListener("load", typeWriter);

function typeWriter() {
    console.log("typewriter");
    document.querySelector("#forside").classList.add("typewriter");
    document.querySelector("#enter").classList.add("fadein");

    document.querySelector("#typewriter").addEventListener("animationend", fadeIn);
}

function fadeIn() {
    console.log("fadein");
    document.querySelector("#enter").textContent = "Enter";
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
