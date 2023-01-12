// Question 2 : changing the value of navBar's id
document.querySelector('div').setAttribute("id","socialNetworkNavigation");

// Question 3 : adding a new li
let newIl = document.createElement('li')  

let newTextNode = document.createTextNode('Logout');

newIl.appendChild(newTextNode);

document.querySelector('ul').appendChild(newIl);

// Bonus

// retrieving first and last li
let firstIl = document.querySelector('ul').firstElementChild;
let lastIl = document.querySelector('ul').lastElementChild;

// displaying content first and last li
console.log(`${firstIl.children[0].textContent}`);
console.log(`${lastIl.textContent}`);



