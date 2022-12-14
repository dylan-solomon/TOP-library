const table = document.getElementById('table');
const tBody = document.getElementById('tbody');
const modal = document.getElementById('modal-container');
const btn = document.getElementById('btn-add');
const push = document.getElementsByClassName('btn-push')[0]
const close = document.getElementsByClassName('close')[0];
const form = document.getElementsByClassName('modal-content')[0];
const remove = document.querySelectorAll('.delete');
let myLibrary = [];

btn.addEventListener('click', modalPopup);
close.addEventListener('click', modalPopup);
window.addEventListener('click', modalClose);
push.addEventListener('click', pushToLibrary);
remove.forEach(rem => {
    rem.addEventListener('click', deleteBook)
})

//MODAL FORM FUNCTIONS
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

function hideModal() {
    modal.style.display = 'none';
    modal.classList.toggle('none')
}

function addToLibrary() {
    let row = document.createElement('tr')
    let title = document.createElement('td')
    let author = document.createElement('td')
    let read = document.createElement('td')
    let deleteMe = document.createElement('td')
    let hasRead = document.createElement('input')
    hasRead.setAttribute('type', 'checkbox');
    let del = document.createElement('input');
    del.setAttribute('type', 'button')
    del.setAttribute('value', 'Delete')
    del.classList.add('delete')

    del.addEventListener('click', deleteBook)

    title.innerText = `${myLibrary[myLibrary.length-1].title}`
    author.innerText = `${myLibrary[myLibrary.length-1].author}`
    row.appendChild(title)
    row.appendChild(author)

    if(`${myLibrary[myLibrary.length-1].read}` == 'true'){
        hasRead.setAttribute('checked', 'true');
        read.appendChild(hasRead)
        row.appendChild(read)
    } else {
        read.appendChild(hasRead)
        row.appendChild(read)
    }

    deleteMe.appendChild(del)
    row.appendChild(deleteMe)

    tBody.appendChild(row)
}

//OBJECT CONSTRUCTOR
function Book(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
}

//ARRAY UPDATE FUNCTIONS
function pushToLibrary(e) {
    if(form.checkValidity()){
        e.preventDefault()
        myLibrary[myLibrary.length] = new Book(form.title.value, form.author.value, form.read.value);
        addToLibrary()
        hideModal()
        form.reset()
    }
}

function deleteBook(e){
    let rowJ = e.target.parentElement.parentElement;
    rowJ.classList.add(`${rowJ.rowIndex}`)
    let rowIndex = rowJ.classList[0]
    myLibrary.splice(Number(rowIndex)-1,1);
    resetTable()
    initialLibrary()
}

//TABLE UPDATE FUNCTIONS
function initialLibrary() {
    for(let i = 0; i <myLibrary.length; i++){
        let row = document.createElement('tr')
        let title = document.createElement('td')
        let author = document.createElement('td')
        let read = document.createElement('td')
        let deleteMe = document.createElement('td')
        let hasRead = document.createElement('input')
        hasRead.setAttribute('type', 'checkbox');
        let del = document.createElement('input');
        del.setAttribute('type', 'button')
        del.setAttribute('value', 'Delete')
        del.classList.add('delete')
    
        del.addEventListener('click', deleteBook)
    
        title.innerText = `${myLibrary[i].title}`
        author.innerText = `${myLibrary[i].author}`
        row.appendChild(title)
        row.appendChild(author)
    
        if(`${myLibrary[i].read}` == 'true'){
            hasRead.setAttribute('checked', 'true');
            read.appendChild(hasRead)
            row.appendChild(read)
        } else {
            read.appendChild(hasRead)
            row.appendChild(read)
        }
    
        deleteMe.appendChild(del)
        row.appendChild(deleteMe)
    
        tBody.appendChild(row)
    }
}

function resetTable(){
    let rowCount = table.rows.length;
    for(let i = rowCount - 1; i > 0; i--){
        table.deleteRow(i)
    }
}
