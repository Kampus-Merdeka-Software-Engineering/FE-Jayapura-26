const header = document.getElementById("mainHeader");
var navres = document.getElementById("navres-button");
var linkres = document.getElementById("navigation-bar-responsive");
let lastScrollTop = 0;
let isNavigating = false;
let linkreson = false;

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (!isNavigating) {
        if (scrollTop > lastScrollTop) {
            header.classList.add("scroll-up");
            if (linkres!=null) {  
                linkres.classList.add("navres-onscrl");
            }
        } else {
            header.classList.remove("scroll-up");
            if (linkres!=null) {
                linkres.classList.remove("navres-onscrl");
            }
        }
        lastScrollTop = scrollTop;
    }
});

if (navres!=null) {
    navres.addEventListener("click",function (){
        if (linkreson) {
            linkres.style.display ="none";
            linkreson = false;
        } else {
            linkres.style.display ="flex";
            linkreson = true;
        }
    })
}
