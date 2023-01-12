/**
 * @author : Abel Ngbandaman
 * @description :
 */
// Question 2 
let divAtt = document.getElementById('container'); // retrieving div
console.log(divAtt); // displaying div

let secondLiFirstUl = document.getElementsByTagName('ul')[0].getElementsByTagName('li')[1]; // retrieving li's Pete
secondLiFirstUl.textContent = 'Richard'; // Changement of content from 'Pete' to 'Richard'

let firstLiFirstUl = document.getElementsByTagName('ul')[0].getElementsByTagName('li')[0]; // retrieving first <ul>
firstLiFirstUl.textContent = 'Ngbandaman'; //Changement of content to my name

let firstLiSecondUl = document.getElementsByTagName('ul')[1].getElementsByTagName('li')[0]; // retrieving second <ul>
firstLiSecondUl.textContent = 'Ngbandaman';//Changement of content to my name

let secondLiSecondUl = document.getElementsByTagName('ul')[1].getElementsByTagName('li')[1];  // retrieving <li> containing 'Sarah'
secondLiSecondUl.remove(); // removing 'Sarah'

// Bonus
let bothUl = document.querySelectorAll('ul'); // selection of both Uls
bothUl[0].classList.add("student_list");
bothUl[1].classList.add("student_list");

let firstUl = document.getElementsByTagName('ul')[0]; // selection of firt ul
firstUl.classList.add("university","attendance");
console.log(firstUl);
console.log(bothUl);

