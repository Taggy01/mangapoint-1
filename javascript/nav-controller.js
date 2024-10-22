window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".Icon").style.fontSize = "28px";
        document.querySelector(".Icon").style.marginBottom = "20px";
        document.querySelector(".iconButton").style.bottom = "70px";
        document.getElementById("navigationBar").style.top = "0";
    } else {
        document.querySelector(".Icon").style.fontSize = "50px";
        document.querySelector(".Icon").style.marginBottom = "60px";
        document.querySelector(".iconButton").style.bottom = "120px";
        document.getElementById("navigationBar").style.top = "30px";
    }
}