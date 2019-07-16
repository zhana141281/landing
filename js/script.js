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
    }

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
            content_amazing.forEach(function (elem) {
                    elem.hidden = false;
                }
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

//---------------------slider in block What People Say About Us---------------------//


const big_circle = document.querySelector('.big_circle');
const img_big_circle = big_circle.querySelector('img');

const block_photo_people = document.querySelector('.block_photo_people');
const small_circle = block_photo_people.querySelectorAll('.small_circle');

const slider_box = document.querySelector('.slider_PeopleSay');

const img_small_circle = slider_box.querySelectorAll('.photo_PeopleSay');
console.log(img_small_circle);

const article = document.querySelectorAll('.text_aboutUs');
const under_text_one = document.querySelectorAll('.under_text_one');
const under_text_two = document.querySelectorAll('.under_text_two');


let Index = '0';
let src_img_small_circle;

function hide(article, under_text_one, under_text_two) {
    article.forEach(function (elem) {
        elem.hidden = true;

    });
    under_text_one.forEach(function (elem) {
        elem.hidden = true;
    });
    under_text_two.forEach(function (elem) {
        elem.hidden = true;
    });
  }

function change_img(target) {
    small_circle[Index].className = 'small_circle';
    Index = target.dataset.id;
    small_circle[Index].classList.add("animate");
    src_img_small_circle = target.getAttribute('src');
    img_big_circle.setAttribute('src', src_img_small_circle);
    article[Index].hidden = false;
    under_text_one[Index].hidden = false;
    under_text_two[Index].hidden = false;

}

hide(article, under_text_one, under_text_two, small_circle);


article[Index].hidden = false;
under_text_one[Index].hidden = false;
under_text_two[Index].hidden = false;


slider_box.addEventListener('click', function (event) {

    let target = event.target;

//---------------------click on photo------------------
    if (target.className === 'photo_PeopleSay') {
        // small_circle[Index].classList.remove('animate');
        hide(article, under_text_one, under_text_two, small_circle);
        change_img(target);


    } else {
        small_circle[Index].className = 'small_circle';

//--------------------click on right - left brackets-------------------
        if (target.classList.contains('right_bracket') || target.classList.contains('fa-chevron-right')) {
            hide(article, under_text_one, under_text_two, small_circle);
            if (Index < (small_circle.length - 1)) {
                Index = 1 + +Index ;
            } else {
                Index = "0";
            }
        } else {
            if (target.classList.contains('left_bracket') || target.classList.contains('fa-chevron-left')) {
            hide(article, under_text_one, under_text_two, small_circle);
                if (Index < small_circle.length && Index !== "0") {
                    Index = `${+Index -1}`;

                } else {
                    Index = "3";
                }
            }
        }
        article[Index].hidden = false;
        under_text_one[Index].hidden = false;
        under_text_two[Index].hidden = false;
        src_img_small_circle = img_small_circle[Index].getAttribute('src');
        img_big_circle.setAttribute('src', src_img_small_circle);
        small_circle[Index].classList.add('animate');
         }

})


