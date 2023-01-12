/**
 * @author : Abel Ngbandaman
 * @description :
 */

// adding a “light blue” background color to div
let divAtt = document.querySelector('div'); // retrieving div's attribute
divAtt.classList.add('users');
if(divAtt.style.backgroundColor === "blue"){
    // to do
}
// mask <li> that contains 'John'
let liToMask = document.getElementsByTagName('li')[0];
console.log(liToMask);
liToMask.classList.add('first-li'); 

// adding border <li> that contains 'Pete'
let liToBorder = document.getElementsByTagName('li')[1];
console.log(liToBorder);
liToBorder.classList.add('second-li');





