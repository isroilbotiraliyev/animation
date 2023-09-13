var headerInfoTitle = document.querySelector('.header__info-title');

let txt = headerInfoTitle.innerHTML
headerInfoTitle.innerHTML = ""

console.log(txt);
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

var arrow1 = document.querySelector('.arrow');
var arrowSpan1 = document.querySelector('.arrow-span');
var arrow2 = document.querySelector('.arrow2');
var arrowSpan2 = document.querySelector('.arrow-span2');
var arrow3 = document.querySelector('.arrow3');
var arrowSpan3 = document.querySelector('.arrow-span3');
var arrow4 = document.querySelector('.arrow4');
var arrowSpan4 = document.querySelector('.arrow-span4');

var x = 0.2

function btnAn() {
    if (x <= 0.9) {
        x = x + 0.1
        arrow1.style.transform = `scale(${x})`
        arrowSpan1.style.transform = `scale(${x})`
        arrow2.style.transform = `scale(${x})`
        arrowSpan2.style.transform = `scale(${x})`
        arrow3.style.transform = `scale(${x})`
        arrowSpan3.style.transform = `scale(${x})`
        arrow4.style.transform = `scale(${x})`
        arrowSpan4.style.transform = `scale(${x})`

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
btnAn()

var headerImg = document.querySelector('.header__img');
var subscribeImg = document.querySelector('.subscribe__img');

window.addEventListener("mousemove", function (e) {
    let X = (window.innerWidth - e.pageX) / 25
    let Y = (window.innerHeight - e.pageY) / 25
    headerImg.style.transform = `translate(${X}px, ${Y}px)`
    subscribeImg.style.transform = `translate(${X}px, ${Y / 4}px)`
})

var headerMenu = document.querySelector('.nav__menu');
var headerNavMenu = document.querySelector('.header__nav-menu');
var navMenuSpan = document.querySelector('.nav__menu-span');
var navMenuSpan2 = document.querySelector('.nav__menu-span2');
var btn = document.querySelectorAll('.btn');
headerMenu.addEventListener("click", function () {
    headerNavMenu.classList.toggle("active")
    navMenuSpan.classList.toggle("active")
    navMenuSpan2.classList.toggle("active")
})


var cards = document.querySelectorAll('.services__items-card');
var thingsContent = document.querySelector('.things__content');
var thingsImg = document.querySelector('.things__img');
var thingsInfo = document.querySelectorAll('.things__info');
var teamWorkImg = document.querySelector('.teamwork__img');
var teamWorkInfo = document.querySelectorAll('.teamwork__info');
var teamworkContent = document.querySelector('.teamwork__content');
var aboutContent = document.querySelector('.about__content');
var aboutImg = document.querySelector('.about__img');
var aboutInfo = document.querySelectorAll('.about__info');


window.addEventListener("scroll", function () {
    scrollcards()
    scrollthings()
    scrollteamwork()
    scrollabout() 
})

function scrollcards() {
    for (let i = 0; i < cards.length; i++) {
        if (this.scrollY >= cards[i].offsetTop + cards[i].offsetHeight * 2) {
            const speed = +cards[i].getAttribute("data-speed")
            cards[i].style.transition = speed + `ms`
            cards[i].classList.add("active")
        } else {
            cards[i].classList.remove("active")

        }
    }
}

function scrollthings() {
    if (this.scrollY >= thingsContent.offsetTop + thingsContent.offsetHeight * 2.7) {

        thingsImg.classList.add("active")
        thingsInfo.forEach(e => {
            e.classList.add("active")
        });
    } else {
        thingsImg.classList.remove("active")
        thingsInfo.forEach(e => {
            e.classList.remove("active")
        });

    }
}

function scrollteamwork() {
    if (this.scrollY >= teamworkContent.offsetTop + teamworkContent.offsetHeight * 3.1) {
        teamWorkImg.classList.add("active")
        teamWorkInfo.forEach(e => {
            e.classList.add("active")

        })
    } else {
        teamWorkImg.classList.remove("active")
        teamWorkInfo.forEach(e => {
            e.classList.remove("active")

        })

    }
}

function scrollabout() {
    if (this.scrollY >= aboutContent.offsetTop + aboutContent.offsetHeight * 5) {
        aboutImg.classList.add("active")
        aboutInfo.forEach(e => {
            e.classList.add("active")

        })
    } else {
        aboutImg.classList.remove("active")
        aboutInfo.forEach(e => {
            e.classList.remove("active")

        })

    }
}




btn.forEach(btns => {

    btns.addEventListener("mousemove", function (e) {
        const X = e.pageX - this.offsetLeft
        const Y = e.pageY - this.offsetTop

        this.style.setProperty("--x", `${X}px`)
        this.style.setProperty("--y", `${Y}px`)
    })

})
