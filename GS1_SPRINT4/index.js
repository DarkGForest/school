var banner = document.getElementById("banner");
var autoScroll = document.getElementById("autoScroll");

var body = document.getElementById("body");

var scroll = 0;
var scrolled = 0;

autoScroll.onclick = (event) => scrolling();

function scrolling() {
    if (scrolled) {
        scrolled = 0;
    } else {
        scrolled = 1;
    }
}

function uh() {
    if (scrolled) {
        body.style.marginTop = scroll + "px";
        autoScroll.style.marginTop = "calc(100vh - 75px + " + (scroll * -1) + "px)";
        scroll -= 0.5;
    } else {
        body.style.marginTop = scroll + "px";
        autoScroll.style.marginTop = "calc(100vh - 75px + " + (scroll * -1) + "px)";
        scroll += (0 - scroll) * 0.1;
    }
    banner.style.backgroundPositionY = ((window.scrollY * 0.33) - 100) + "px";
}
setInterval(uh, 10);