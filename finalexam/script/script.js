const svg = document.getElementById('logo');
const burger = document.getElementById('logo');
let navList = document.getElementById('navList');
let scrollToElem = document.getElementById('navList');
// const glide = document.querySelector('.glide');

let conatactMobile = document.getElementById('contactInfo');
console.log(conatactMobile);

conatactMobile.addEventListener('click', (event) => {
    let elem = event.target;
    while (!elem.classList.contains("contactLink")) {
        elem = elem.parentElement;
        console.log(elem)
    }
    elem.classList.toggle('contactLinkMobile');

    console.log(elem);

});



navList.addEventListener('click', (event) => {
    let elem = event.target;
    elem = elem.parentElement;
    elem = elem.dataset.scroll;
    let scrollToElem = document.getElementById(elem);

    if (scrollToElem === 'home') {
        indow.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        return;
    }

    let coord = scrollToElem.getBoundingClientRect();

    if (window.screen.width < 767) {
        window.scrollBy({
            top: coord.y - 73, // could be negative value
            left: 0,
            behavior: 'smooth'
        });
    } else {
        window.scrollBy({
            top: coord.y - 102, // could be negative value
            left: 0,
            behavior: 'smooth'
        });
    }


    // console.log(coord.y);
    // elmnt.scrollIntoView({ block: "start", behavior: "smooth" });

    // window.scrollBy(0, 130);
});




if (window.screen.width < 767) {
    svg.setAttribute('width', "35,698");
    svg.setAttribute('height', "48");

}


window.onscroll = function() {
    let header = document.getElementById('header');
    let pageOffsetX = window.pageYOffset;
    if (pageOffsetX !== 0) {
        header.classList.add('header_scrolled')
    } else {
        header.classList.remove('header_scrolled')
    }
};

burger.addEventListener('click', () => {
    let navList = document.getElementById('navList');
    if (window.screen.width < 767) {
        navList.classList.toggle('burgerMenu');
    }
});



window.addEventListener('resize', function() {

    if (window.screen.width < 767) {
        svg.setAttribute('width', "35,698")
        svg.setAttribute('height', "48")

    } else {
        svg.setAttribute('width', "53.547")
        svg.setAttribute('height', "72")

    }


});






// window.onresize = () => {
//     let timer;
//     let anyTime = 300;

//     if (timer !== undefined) {
//         clearTimeout(timer);
//     }
//     else {
//         timer = setTimeout(() => {
//             console.log(2)
//         }, anyTime);
//     }


// }