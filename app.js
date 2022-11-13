const tBody = document.getElementById('tbody');
const modal = document.getElementById('modal-container');
const btn = document.getElementById('btn-add');
const push = document.getElementsByClassName('btn-push')[0]
const close = document.getElementsByClassName('close')[0];

btn.addEventListener('click', modalPopup);
close.addEventListener('click', modalPopup);
window.addEventListener('click', modalClose)

function modalPopup(){
    if(modal.classList.contains('none')){
        modal.classList.toggle('none');
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
        modal.classList.toggle('none');
    }
}

function modalClose(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
        modal.classList.toggle('none')
    }
}



const theHobbit = new Book('The Hobbit', 'JR Tolkien', true)
const theBible = new Book('The Bible', 'god', false)

let myLibrary = [theHobbit, theBible];

function Book(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
}


function addToLibrary() {
    for(let i = 0; i <myLibrary.length; i++){
        let row = document.createElement('tr')
        let title = document.createElement('td')
        let author = document.createElement('td')
        let read = document.createElement('td')
        title.innerText = `${myLibrary[i].title}`
        author.innerText = `${myLibrary[i].author}`
        read.innerText = `${myLibrary[i].read}`
        row.appendChild(title)
        row.appendChild(author)
        row.appendChild(read)
        tBody.appendChild(row)
    }
}

addToLibrary()
