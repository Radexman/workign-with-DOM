// Methods of working with DOM
// let itemOne = document.getElementById('one');

// itemOne.className = 'cool';

// DOM querry that returns more than one element is called NodeList
// NodeList is also called collection and elements in it are indexed like arrays

// let h1 = document.getElementsByTagName('h1');
// console.log(h1[0]);

// let items = document.getElementsByName('li');

// let hotItems = document.getElementsByClassName('hot');

// let elements = document.getElementsByClassName('hot');
// if (elements.length >= 0) {
//     let firstItem = elements.item(0);
// }

// let elements = document.getElementsByClassName('hot');
// if (elements.length >= 0) {
//     let firstEl = elements[0];
//     console.log(firstEl);
// }

// let elements = document.getElementsByClassName('hot');

// if (elements.length > 2) {
//     let el = elements[2];
//     el.className = 'cool';
// }

let item = document.getElementById('one').firstChild.nextSibling.nodeValue;