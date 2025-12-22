// get element by id
const variable = document.getElementById("#page-banner");
console.log(variable);

//get element by class name & tag name
var titles = document.getElementsByClassName("title");

console.log(Array.isArray(titles)); // this means titles in not an array
// we ll convert it into an array
console.log(Array.isArray(Array.from(titles)));
// it is now converted to array

Array.from(titles).forEach((item) => {
  console.log(item);
});

//query selector
const QS = document.querySelector("#book-list li:nth-child(4) .name");
// console.log(QS)
// if wwe want to select all the span tags

books = document.querySelectorAll("#book-list li .name");
console.log(books);

console.log(Array.isArray(books));
console.log(Array.isArray(Array.from(books)));

// for( i = 0 ; i<books.length ; i++){
//     console.log(books[i])

// }
books.forEach((item) => {
  console.log(item.textContent);
}); // <--- ways to retrive text content

// if we wan to change the content on the web page

books.forEach(item => {
    item.textContent += ' (aalu wala samosa)'
})

const booklist = document.querySelector('#book-list')
