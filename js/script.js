
// // -----------switching  menu-tabs in block "Our Services"-----------------


const tabs_ourServ = document.querySelectorAll('.link_ourServ_menu');
const ul_ourServ = document.querySelector('.menu_OurServ_item');
const content_ourServ = document.querySelectorAll('.container_ourServ');

content_ourServ.forEach(function (elem) {
    elem.hidden = true;
});

let activeIndex = 0;

content_ourServ[activeIndex].hidden = false;
tabs_ourServ[activeIndex].classList.add('active');

ul_ourServ.addEventListener('click', function (event) {
    event.preventDefault();
    event.target.classList.add('active');
    let atr = event.target.getAttribute('data-content');

    for (let i = 0; i <tabs_ourServ.length; i++) {
        if (tabs_ourServ[i].dataset.content !== atr) {
            tabs_ourServ[i].classList.remove('active');
            content_ourServ[i].hidden = true;
        } else {
            content_ourServ[i].hidden = false;
            activeIndex = i;
                   }
    }
});

// // -----------switching  menu-tabs in block "Our Amazing Work"-----

const tabs_amazing = document.querySelectorAll('.link_Amazing_menu');

const ul_amazing = document.querySelector('.menu_Amazing_item');

const content_amazing = document.querySelectorAll('.amazing_img');

const button_amazing = document.querySelector('.button_Amazing');




content_amazing .forEach(function (elem) {
    elem.hidden = true;
});

let activeIndex_2 = 1;

content_amazing[activeIndex_2].hidden = false;
tabs_amazing[activeIndex_2].classList.add('active');

ul_amazing .addEventListener('click', function (event) {
    event.preventDefault();
    event.target.classList.add('active');
    let atr = event.target.getAttribute('data-type');


    for (let i = 0; i <tabs_amazing .length; i++) {

        if ( atr === 'all') {
            content_amazing .forEach(function (elem)
            {elem.hidden = false});
            tabs_amazing[activeIndex_2].classList.remove('active');
            button_amazing.hidden = true;
            break;
        }
    else {
            if (tabs_amazing[i].dataset.type !== atr)
            {
                tabs_amazing[i].classList.remove('active');
                content_amazing[i].hidden = true;
            }

            else {
                content_amazing[i].hidden = false;
                activeIndex_2 = i;
            }
            button_amazing.hidden = false;
        }
        }

});