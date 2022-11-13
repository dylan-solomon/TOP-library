const tBody = document.getElementById('tbody');
const modal = document.getElementById('modal-container');
const btn = document.getElementById('btn-add');
const push = document.getElementsByClassName('btn-push')[0]
const close = document.getElementsByClassName('close')[0];
const form = document.getElementsByClassName('modal-content')[0]
let myLibrary = [];

btn.addEventListener('click', modalPopup);
close.addEventListener('click', modalPopup);
window.addEventListener('click', modalClose);
push.addEventListener('click', pushToLibrary);

function modalPopup(){
    if(modal.classList.contains('none')){
        modal.classList.toggle('none');
        modal.style.display = 'block';
    } else {
        hideModal()
    }
}

function modalClose(e) {
    if(e.target == modal) {
        hideModal()
    }
}

function Book(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
}

function addToLibrary() {
    let row = document.createElement('tr')
    let title = document.createElement('td')
    let author = document.createElement('td')
    let read = document.createElement('td')
    title.innerText = `${myLibrary[myLibrary.length-1].title}`
    author.innerText = `${myLibrary[myLibrary.length-1].author}`
    read.innerText = `${myLibrary[myLibrary.length-1].read}`
    row.appendChild(title)
    row.appendChild(author)
    row.appendChild(read)
    tBody.appendChild(row)
}

function pushToLibrary(e) {
    if(form.checkValidity()){
        e.preventDefault()
        myLibrary[myLibrary.length] = new Book(form.title.value, form.author.value, form.read.value);
        addToLibrary()
        hideModal()
        form.reset()
    }
}

function hideModal() {
    modal.style.display = 'none';
    modal.classList.toggle('none')
}


// function initialLibrary() {
//     for(let i = 0; i <myLibrary.length; i++){
//         let row = document.createElement('tr')
//         let title = document.createElement('td')
//         let author = document.createElement('td')
//         let read = document.createElement('td')
//         title.innerText = `${myLibrary[i].title}`
//         author.innerText = `${myLibrary[i].author}`
//         read.innerText = `${myLibrary[i].read}`
//         row.appendChild(title)
//         row.appendChild(author)
//         row.appendChild(read)
//         tBody.appendChild(row)
//     }
// }

// initialLibrary()
