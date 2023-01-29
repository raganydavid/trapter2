/*
* File: app.js
* Author: Ragány Dávid Gergő
* Copyright: 2023, Ragány Dávid Gergő
* Group: Szoft I-2-E
* Date: 2023-01-29
* Github: https://github.com/raganydavid/
* Licenc: GNU GPL
*/

const asideElem = document.querySelector("#aside"); 
const bsideElem = document.querySelector("#bside"); 
const csideElem = document.querySelector("#cside"); 
const dsideElem = document.querySelector("#dside"); 
const calcButtonElem = document.querySelector("#calcButton"); 
const areaElem = document.querySelector("#area"); 

calcButtonElem.addEventListener('click', () => {
    // 13, 4, 7, 4
    let aside = Number(asideElem.value);
    let bside = Number(bsideElem.value);
    let cside = Number(csideElem.value);
    let dside = Number(dsideElem.value);
    let area = calcArea(aside, bside, cside, dside);
    areaElem.value = area;
    
});

function calcArea(a, b, c, d) {
    let terulet = ( (a + c)/(4*(a - c)) ) 
    * Math.sqrt(
        (a + b - c + d) *
        (a - b - c + d) *
        (a + b - c - d) *
        (-a + b + c + d)
    )
    return terulet;
}