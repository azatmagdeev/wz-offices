import {pics} from './data.js';
import {section1} from "./section1.js";
import {section2} from "./section2.js";
import {section3} from "./section3.js";
import {prices} from "./data.js";

const root = document.querySelector('#root.container');
root.appendChild(section1);

let persons_number_id = '45';
let office_style_id = 'classic';
let current_price = prices[0];

let wall_a_id = 'graffiti';
let space_id = 'projector';
let wall_b_id = 'mirror';

const field_1 = section1.querySelector('#field_1');
const field_2 = section2.querySelector('#field_2');
const field_3 = section2.querySelector('#field_3');
const field_4 = section2.querySelector('#field_4');
const field_5 = section3.querySelector('#field_5');
const field_6 = section3.querySelector('#field_6');
const field_7 = section3.querySelector('#field_7');
const field_8 = section3.querySelector('#field_8');
const field_10 = section3.querySelector('#field_10');
const field_11 = section3.querySelector('#field_11');
const field_12 = section3.querySelector('#field_12');
const field_13 = section3.querySelector('#field_13');
const field_14 = section3.querySelector('#field_14');
const field_15 = section3.querySelector('#field_15');
// const field_16 = section3.querySelector('#field_16');
const priceEl = section3.querySelector('#price');

let current_pic_url;
let field_2_url;
let field_3_url;
let field_4_url;

for (let picsKey in pics) {
    if (pics[picsKey] === null) {
        pics[picsKey] = `https://placekitten.com/${Math.floor(Math.random() * 1000 + 400)}/${Math.floor(Math.random() * 1000 + 400)}`
    }
}

section1.querySelector('form#person_number').addEventListener('change', (e) => {
    persons_number_id = e.target.id;
    checkIds(persons_number_id, office_style_id);
})

section1.querySelector('form#office_style').addEventListener('change', e => {
    office_style_id = e.target.id;
    checkIds(persons_number_id, office_style_id);
})

function checkIds(number, style) {
    if (number === '45') {
        field_11.style.backgroundImage = `url(${pics.k1})`;
        current_price = prices[0];
        if (style === 'classic') current_pic_url = `url(${pics.a1})`;
        if (style === 'loft') current_pic_url = `url(${pics.a2})`;
        if (style === 'wood') current_pic_url = `url(${pics.a3})`;
        if (style === 'shell') current_pic_url = `url(${pics.a4})`;
    }

    if (number === '78') {
        field_11.style.backgroundImage = `url(${pics.k2})`;
        current_price = prices[1];
        if (style === 'classic') current_pic_url = `url(${pics.b1})`;
        if (style === 'loft') current_pic_url = `url(${pics.b2})`;
        if (style === 'wood') current_pic_url = `url(${pics.b3})`;
        if (style === 'shell') current_pic_url = `url(${pics.b4})`;
    }

    if (number === '1012') {
        field_11.style.backgroundImage = `url(${pics.k3})`;
        current_price = prices[2];
        if (style === 'classic') current_pic_url = `url(${pics.c1})`;
        if (style === 'loft') current_pic_url = `url(${pics.c2})`;
        if (style === 'wood') current_pic_url = `url(${pics.c3})`;
        if (style === 'shell') current_pic_url = `url(${pics.c4})`;

    }
    if (number === '1520') {
        field_11.style.backgroundImage = `url(${pics.k4})`;
        current_price = prices[3];
        if (style === 'classic') current_pic_url = `url(${pics.d1})`;
        if (style === 'loft') current_pic_url = `url(${pics.d2})`;
        if (style === 'wood') current_pic_url = `url(${pics.d3})`;
        if (style === 'shell') current_pic_url = `url(${pics.d4})`;

    }
    if (number === 'more') {
        field_11.style.backgroundImage = `url(${pics.k5})`;
        current_price = prices[4];
        if (style === 'classic') current_pic_url = `url(${pics.e1})`;
        if (style === 'loft') current_pic_url = `url(${pics.e2})`;
        if (style === 'wood') current_pic_url = `url(${pics.e3})`;
        if (style === 'shell') current_pic_url = `url(${pics.e4})`;
    }
    opacitySlider(field_1, current_pic_url);
    field_5.style.backgroundImage = current_pic_url;


}

section2.querySelector('form#wall_a').addEventListener('change',e=>{
    wall_a_id = e.target.id;
    check_wall_a_id(wall_a_id,office_style_id)
});

function check_wall_a_id(id, style) {
    if(style === 'classic'){
        field_10.style.backgroundImage = `url(${pics.s1})`;
        if(id === 'graffiti') field_2_url = `url(${pics.aa1})`;
        if(id === 'picture') field_2_url = `url(${pics.aa2})`;
        if(id === 'lamp') field_2_url = `url(${pics.aa3})`;
    }

    if(style === 'loft'){
        field_10.style.backgroundImage = `url(${pics.s2})`;
        if(id === 'graffiti') field_2_url = `url(${pics.bb1})`;
        if(id === 'picture') field_2_url = `url(${pics.bb2})`;
        if(id === 'lamp') field_2_url = `url(${pics.bb3})`;
    }

    if(style === 'wood'){
        field_10.style.backgroundImage = `url(${pics.s3})`;
        if(id === 'graffiti') field_2_url = `url(${pics.cc1})`;
        if(id === 'picture') field_2_url = `url(${pics.cc2})`;
        if(id === 'lamp') field_2_url = `url(${pics.cc3})`;
    }

    if(style === 'shell'){
        field_10.style.backgroundImage = `url(${pics.s4})`;
        if(id === 'graffiti') field_2_url = `url(${pics.dd1})`;
        if(id === 'picture') field_2_url = `url(${pics.dd2})`;
        if(id === 'lamp') field_2_url = `url(${pics.dd3})`;
    }
    opacitySlider(field_2,field_2_url);
    field_6.style.backgroundImage = field_2_url;
}

section2.querySelector('form#space').addEventListener('change',e=>{
    space_id = e.target.id;
    check_space_id(space_id,office_style_id);

});

function check_space_id(id, style) {
    if(style === 'classic'){
        if(id === 'projector') field_3_url = `url(${pics.aa4})`;
        if(id === 'board') field_3_url = `url(${pics.aa5})`;
        if(id === 'plant') field_3_url = `url(${pics.aa6})`;
    }

    if(style === 'loft'){
        if(id === 'projector') field_3_url = `url(${pics.bb4})`;
        if(id === 'board') field_3_url = `url(${pics.bb5})`;
        if(id === 'plant') field_3_url = `url(${pics.bb6})`;
    }
    if(style === 'wood'){
        if(id === 'projector') field_3_url = `url(${pics.cc4})`;
        if(id === 'board') field_3_url = `url(${pics.cc5})`;
        if(id === 'plant') field_3_url = `url(${pics.cc6})`;
    }
    if(style === 'shell') {
        if (id === 'projector') field_3_url = `url(${pics.dd4})`;
        if (id === 'board') field_3_url = `url(${pics.dd5})`;
        if (id === 'plant') field_3_url = `url(${pics.dd6})`;
    }




    opacitySlider(field_3,field_3_url)
    field_7.style.backgroundImage = field_3_url;
}

section2.querySelector('form#wall_b').addEventListener('change',e=>{
    wall_b_id = e.target.id;
    check_wall_b_id(wall_b_id,office_style_id)
});

function check_wall_b_id(id, style) {
    if(style === 'classic'){
        if(id === 'mirror') field_4_url = `url(${pics.aa7})`;
        if(id === 'glass') field_4_url = `url(${pics.aa8})`;
        if(id === 'magnet') field_4_url = `url(${pics.aa9})`;
    }

    if(style === 'loft'){
        if(id === 'mirror') field_4_url = `url(${pics.bb7})`;
        if(id === 'glass') field_4_url = `url(${pics.bb8})`;
        if(id === 'magnet') field_4_url = `url(${pics.bb9})`;
    }

    if(style === 'wood'){
        if(id === 'mirror') field_4_url = `url(${pics.cc7})`;
        if(id === 'glass') field_4_url = `url(${pics.cc8})`;
        if(id === 'magnet') field_4_url = `url(${pics.cc9})`;
    }

    if(style === 'shell'){
        if(id === 'mirror') field_4_url = `url(${pics.dd7})`;
        if(id === 'glass') field_4_url = `url(${pics.dd8})`;
        if(id === 'magnet') field_4_url = `url(${pics.dd9})`;
    }
    opacitySlider(field_4,field_4_url)
    field_8.style.backgroundImage = field_4_url;
}


const nextBtn = section1.querySelector('button#next');
nextBtn.addEventListener('click', () => {

    check_wall_a_id(wall_a_id,office_style_id);
    check_space_id(space_id,office_style_id);
    check_wall_b_id(wall_b_id,office_style_id);

    nextSection(section1,section2);

    const resultBtn = section2.querySelector('button#result');
    resultBtn.addEventListener('click', () => {

        field_12.style.backgroundImage = `url(${pics.s5})`;

        if (wall_a_id === 'graffiti') field_13.style.backgroundImage = `url(${pics.p1})`;
        if (wall_a_id === 'picture') field_13.style.backgroundImage = `url(${pics.p2})`;
        if (wall_a_id === 'lamp') field_13.style.backgroundImage = `url(${pics.p3})`;

        if (space_id === 'projector') field_14.style.backgroundImage = `url(${pics.p4})`;
        if (space_id === 'board') field_14.style.backgroundImage = `url(${pics.p5})`;
        if (space_id === 'plant') field_14.style.backgroundImage = `url(${pics.p6})`;

        if (wall_b_id === 'mirror') field_15.style.backgroundImage = `url(${pics.p7})`;
        if (wall_b_id === 'glass') field_15.style.backgroundImage = `url(${pics.p8})`;
        if (wall_b_id === 'magnet') field_15.style.backgroundImage = `url(${pics.p9})`;

        priceEl.textContent = current_price;

        nextSection(section2,section3)
    })
});


function opacitySlider(element,element_pic_url) {
    let j = 100;
    requestAnimationFrame(opacity);

    function opacity() {
        element.style.filter = `opacity(${j}%)`
        j -= 20;
        if (j <= 0) {

            element.style.backgroundImage = element_pic_url;
            element.onload = requestAnimationFrame(opacityBack);
        } else {
            requestAnimationFrame(opacity);
        }
    }

    function opacityBack() {
        j += 20;
        if (j > 100) {
            j = 100;
            element.style.filter = `opacity(${j}%)`
        } else {
            element.style.filter = `opacity(${j}%)`
            requestAnimationFrame(opacityBack);
        }
    }
}


function nextSection(section,next_section){
    let j = 100;
    requestAnimationFrame(opacity);

    function opacity() {
        j -= 20;
        if (j <= 0) {
            j = 0;
            section.style.filter = `opacity(${j}%)`
            section.style.display = 'none';
            next_section.style.filter = `opacity(${j}%)`
            root.appendChild(next_section);
            next_section.onload = requestAnimationFrame(opacityBack);
        } else {
            section.style.filter = `opacity(${j}%)`;
            requestAnimationFrame(opacity);
        }
    }

    function opacityBack() {
        j += 20;
        if (j > 100) {
            j = 100;
            next_section.style.filter = `opacity(${j}%)`
        } else {
            next_section.style.filter = `opacity(${j}%)`
            requestAnimationFrame(opacityBack);
        }
    }
}

// function check_previews(style){
//     if(office_style_id ===);
// }