var headerInfoTitle = document.querySelector('.header__info-title');

let txt = headerInfoTitle.innerHTML
headerInfoTitle.innerHTML = ""

function str(x = 0) {
    headerInfoTitle.innerHTML += txt[x]
    x++

    if (txt.length > x) {
        setTimeout(() => {
            str(x)
        }, 90);
    }

}
str()

var arrow = document.querySelectorAll('.arrow');
var arrowSpan = document.querySelectorAll('.arrow-span');

for (let i = 0; i < arrow.length; i++) {
    var x = 0.2
    
    function btnAn() {
        
        if( x <= 0.9 ) {
            x = x + 0.1
            arrow[i].style.transform = `scale(${x})`
            arrowSpan[i].style.transform = `scale(${x})`
            
            setTimeout(() => {
                btnAn()
            }, 100);
        } else if (x >= 0.9) {
            x = 0
            setTimeout(() => {
                        btnAn()
                    }, 100); 
        }
    }
}                
btnAn()

var headerImg = document.querySelector('.header__img');

window.addEventListener("mousemove", function (e) {
    let X = (window.innerWidth - e.pageX) / 25
    let Y = (window.innerHeight - e.pageY) / 25
    headerImg.style.transform = `translate(${X}px, ${Y}px)`
})

var headerMenu = document.querySelector('.nav__menu');
var headerNavMenu = document.querySelector('.header__nav-menu');
var navMenuSpan = document.querySelector('.nav__menu-span');
var navMenuSpan2 = document.querySelector('.nav__menu-span2');
var btn = document.querySelector('.btn');
console.log(navMenuSpan);
headerMenu.addEventListener("click", function () {
    headerNavMenu.classList.toggle("active")
    navMenuSpan.classList.toggle("active")
    navMenuSpan2.classList.toggle("active")
})

