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

// let item = document.getElementById('one').firstChild.nextSibling.nodeValue;

// let elContent = document.getElementById('one').innerHTML;
// console.log(elContent);

// let newEl = document.createElement('li');
// let newText = document.createTextNode('komosa ryżowa');
// newEl.appendChild(newText);
// let position = document.getElementsByTagName('ul')[0];
// position.appendChild(newEl);

// let removeEl = document.getElementsByName('li')[3];
// let containerEl = removeEl.parentNode;
// containerEl.removeChild(removeEl);

// let firstItem = document.getElementById('one');
// firstItem.classList.add('complete');

// let fourthItem = document.getElementsByTagName('li')[3];
// fourthItem.setAttribute('class', 'cool');

// if (firstItem.hasAttribute('class')) {
//     firstItem.removeAttribute('class');
// }

let list = document.getElementsByTagName('ul')[0];
let newItemLast = document.createElement('li');
let newTextLast = document.createTextNode('krem');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

let newItemFirst = document.createElement('li');
let newTextFirst = document.createTextNode('kapusta');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

let listItems = document.querySelectorAll('li');
let i = 0;
for (i; i < listItems.length; i++) {
    listItems[i].classList.add('cool');
}

let heading = document.querySelector('h2');
let totalItems = listItems.length;
heading.textContent+= ` ${totalItems}`;