const graphic_design_img = [
    'img/graphic design/graphic-design (13).jpg',
    'img/graphic design/graphic-design (14).jpg',
    'img/graphic design/graphic-design (15).jpg',
    'img/graphic design/graphic-design (16).jpg',
    'img/graphic design/graphic-design (17).jpg',
    'img/graphic design/graphic-design (18).jpg',
    'img/graphic design/graphic-design (19).jpg',
    'img/graphic design/graphic-design (20).jpg',
    'img/graphic design/graphic-design (21).jpg',
    'img/graphic design/graphic-design (22).jpg',
    'img/graphic design/graphic-design (23).jpg',
    'img/graphic design/graphic-design (24).jpg'
];

const web_design_img = [
    'img/web design/web-design (13).jpg',
    'img/web design/web-design (14).jpg',
    'img/web design/web-design (15).jpg',
    'img/web design/web-design (16).jpg',
    'img/web design/web-design (17).jpg',
    'img/web design/web-design (18).jpg',
    'img/web design/web-design (19).jpg',
    'img/web design/web-design (20).jpg',
    'img/web design/web-design (21).jpg',
    'img/web design/web-design (22).jpg',
    'img/web design/web-design (23).jpg',
    'img/web design/web-design (24).jpg',

];

const landing_page_img = [
    'img/landing page/landing-page (13).jpg',
    'img/landing page/landing-page (14).jpg',
    'img/landing page/landing-page (15).jpg',
    'img/landing page/landing-page (16).jpg',
    'img/landing page/landing-page (17).jpg',
    'img/landing page/landing-page (18).jpg',
    'img/landing page/landing-page (19).jpg',
    'img/landing page/landing-page (20).jpg',
    'img/landing page/landing-page (21).jpg',
    'img/landing page/landing-page (22).jpg',
    'img/landing page/landing-page (23).jpg',
    'img/landing page/landing-page (24).jpg'
];

const wordpress_img = [
    'img/wordpress/wordpress (13).jpg',
    'img/wordpress/wordpress (14).jpg',
    'img/wordpress/wordpress (15).jpg',
    'img/wordpress/wordpress (16).jpg',
    'img/wordpress/wordpress (17).jpg',
    'img/wordpress/wordpress (18).jpg',
    'img/wordpress/wordpress (19).jpg',
    'img/wordpress/wordpress (20).jpg',
    'img/wordpress/wordpress (21).jpg',
    'img/wordpress/wordpress (22).jpg',
    'img/wordpress/wordpress (23).jpg',
    'img/wordpress/wordpress (24).jpg'
];



const tabs_ourServ = document.querySelectorAll('.link_ourServ_menu');
const ul_ourServ = document.querySelector('.menu_OurServ_item');
const content_ourServ = document.querySelectorAll('.container_ourServ');
const tabs_amazing = document.querySelectorAll('.link_Amazing_menu');

const ul_amazing = document.querySelector('.menu_Amazing_item');

const content_amazing = document.querySelectorAll('.amazing_img');

const button_amazing = document.querySelector('.button_Amazing');

const div_img = document.querySelector('div.gallery_box');


// // -----------switching  menu-tabs in block "Our Services"-----------------


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

    for (let i = 0; i < tabs_ourServ.length; i++) {
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


content_amazing.forEach(function (elem) {
    elem.hidden = true;
});

let activeIndex_2 = 1;

content_amazing[activeIndex_2].hidden = false;
tabs_amazing[activeIndex_2].classList.add('active');
let atr = 'graphic design';

ul_amazing.addEventListener('click', function (event) {
    event.preventDefault();
    event.target.classList.add('active');
    atr = event.target.getAttribute('data-type');

    let gallery_div = document.getElementById(atr);
    let gallery_box = gallery_div.querySelectorAll('.gallery_box');
    tabs_amazing[activeIndex_2].classList.remove('active');

    //----------shows button, if amount of images are less than 13----------////

    if (gallery_box.length > 13) {
        button_amazing.style.display = 'none';
    } else {
        button_amazing.style.display = 'block';
    };

    for (let i = 0; i < tabs_amazing.length; i++) {
            if (tabs_amazing[i].dataset.type !== atr) {
                tabs_amazing[i].classList.remove('active');
                content_amazing[i].hidden = true;
            } else {
                content_amazing[i].hidden = false;
                activeIndex_2 = i;
            }
                 }
   });



//-----------------add new images-block  in gallery function--------------------------------//

function add_new_img(array, atr) {
    for (let i = 0; i < 12; i++) {
        let gallery_div = document.getElementById(atr);
        let mainDiv = gallery_div.querySelector('section');
        let newDiv = div_img.cloneNode(true);
        let img = newDiv.querySelector('img');
        img.setAttribute('src', array[i]);
        mainDiv.appendChild(newDiv);
    }
}
//----------------------Load more - button---------------------------------

button_amazing.addEventListener('click', function (event) {
    event.preventDefault();
    button_amazing.style.display = 'none';
    switch (atr) {
        case "all":
           content_amazing.forEach( function (elem) {
                    elem.hidden = false;  }
                );
            break;
        case "graphic design":
            add_new_img(graphic_design_img, atr);
            break;
        case "web design":
            add_new_img(web_design_img, atr);
            break;
        case "landing page":
            add_new_img(landing_page_img, atr);
            break;
        case "wordpress":
            add_new_img(wordpress_img, atr);
            break;
    }
});




