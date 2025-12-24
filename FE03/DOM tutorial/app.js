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

books.forEach((item) => {
  item.textContent += " (aalu wala samosa)";
});

// const booklist = document.querySelector('#book-list')

const banner = document.querySelector("#page-banner");
console.log("#page-banner node name is :", banner.nodeName);
console.log("#page-banner node type is :", banner.nodeType);

console.log("#page banner has child :", banner.hasChildNodes());

// how to clone a node
const clonebanner = banner.cloneNode(true);
console.log(clonebanner);

//traversing
// parent and child
const booklist = document.querySelector("#book-list");

console.log(booklist.parentElement);
console.log(booklist.parentNode);

console.log(booklist.childNodes);
console.log(booklist.children);

//sibling to sibling

// .nextSibling
// .nextElementSibling
console.log("next sibling is :", booklist.nextSibling);
console.log("next sibling is :", booklist.nextElementSibling);

//.previousSibling and .previousElementSibling
console.log("previous sibling is: ", booklist.previousSibling);
console.log("previous sibling is: ", booklist.previousElementSibling);

//event listener
var h2 = document.querySelector("#book-list h2");
console.log(h2);
h2.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e);
});

// code for deleting

/*
var btn = document.querySelectorAll('#book-list .delete')

Array.from(btn).forEach(function(btn){
  btn.addEventListener('click', function(e){
    const li = e.target.parentElement ;
    li.parentNode.removeChild(li) ;
  })
})
*/

// code for deleting using event bubbling
const list = document.querySelector("#book-list ul");
list.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

const addform = document.forms["add-book"];
addform.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addform.querySelector('input[type="text"]').value;
  // console.log(value) ; for checking purpose

  //creating a new element
  const li = document.createElement("li");
  const bookname = document.createElement("span");
  const deletebtn = document.createElement("span");

  // adding text content
  bookname.textContent = value;
  deletebtn.textContent = "delete";

  //appending to the document
  li.appendChild(bookname);
  li.appendChild(deletebtn);
  list.appendChild(li);

  //ways to add classes to newly created elements
  // bookname.className = 'name' ;
  // deletebtn.className = 'delete' ;

  // another  approach
  bookname.classList.add("name");
  deletebtn.classList.add("delete");
});

const hidebox = document.querySelector("#add-book #hide");
hidebox.addEventListener("change", function (e) {
  if (hidebox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});



//custom search filter

const searchbar = document.forms['search-books'].querySelector('input')

searchbar.addEventListener('keyup' ,function(e){
  const term = e.target.value.toLowerCase() ;
  const books = list.getElementsByTagName('li') ;

  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent ;

    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block' ;
    }
    else{
      book.style.display = 'none' ;
    }
  })
}) ;
