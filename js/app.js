import {pics} from './data.js';
import {section1} from "./section1.js";
import {section2} from "./section2.js";
import {section3} from "./section3.js";
import {prices} from "./data.js";

let persons_number_id = '45';
let office_style_id = 'classic';
let current_price = prices[0];
let current_pic;

for (let picsKey in pics) {
    if (pics[picsKey]===null){
        pics[picsKey]  = `https://placekitten.com/${Math.floor(Math.random() * 1000 + 400)}/${Math.floor(Math.random() * 1000 + 400)}`
    }
}
console.log(pics);

const root = document.querySelector('#root.container');
root.appendChild(section1);

const person_number_form = section1.querySelector('form#person_number');
const field_1 = section1.querySelector('#field_1')

section1.querySelector('form#office_style').addEventListener('change', e => {
    office_style_id = e.target.id;
    checkIds(persons_number_id,office_style_id );
})




function checkIds(number,style) {
    if (number === '45') {
        current_price = prices[0];
        if (style === 'classic') field_1.style.backgroundImage = `url(${pics.a1})`;
        if (style === 'loft') field_1.style.backgroundImage = `url(${pics.a2})`;
        if (style === 'wood') field_1.style.backgroundImage = `url(${pics.a3})`;
        if (style === 'shell') field_1.style.backgroundImage = `url(${pics.a4})`;
        return;
    }style

    if (number === '78') {
        current_price = prices[1];
        if (style === 'classic') field_1.style.backgroundImage = `url(${pics.b1})`;
        if (style === 'loft') field_1.style.backgroundImage = `url(${pics.b2})`;
        if (style === 'wood') field_1.style.backgroundImage = `url(${pics.b3})`;
        if (style === 'shell') field_1.style.backgroundImage = `url(${pics.b4})`;
        return;
    }

    if (number === '1012') {
        current_price = prices[2];
        if (style === 'classic') field_1.style.backgroundImage = `url(${pics.c1})`;
        if (style === 'loft') field_1.style.backgroundImage = `url(${pics.c2})`;
        if (style === 'wood') field_1.style.backgroundImage = `url(${pics.c3})`;
        if (style === 'shell') field_1.style.backgroundImage = `url(${pics.c4})`;
        return;
    }
    if (number === '1520') {
        current_price = prices[3];
        if (style === 'classic') field_1.style.backgroundImage = `url(${pics.d1})`;
        if (style === 'loft') field_1.style.backgroundImage = `url(${pics.d2})`;
        if (style === 'wood') field_1.style.backgroundImage = `url(${pics.d3})`;
        if (style === 'shell') field_1.style.backgroundImage = `url(${pics.d4})`;
        return;
    }
    if (number === 'more') {
        current_price = prices[4];
        if (style === 'classic') field_1.style.backgroundImage = `url(${pics.e1})`;
        if (style === 'loft') field_1.style.backgroundImage = `url(${pics.e2})`;
        if (style === 'wood') field_1.style.backgroundImage = `url(${pics.e3})`;
        if (style === 'shell') field_1.style.backgroundImage = `url(${pics.e4})`;
    }
}

person_number_form.addEventListener('change', (e) => {
    persons_number_id = e.target.id;
    checkIds(persons_number_id,office_style_id );
})

const nextBtn = root.querySelector('button#next');
nextBtn.addEventListener('click', () => {
    section1.style.display = 'none';
    root.appendChild(section2);

    const resultBtn = root.querySelector('button#result');
    resultBtn.addEventListener('click', () => {
        section2.style.display = 'none';
        root.appendChild(section3);
    })
});
