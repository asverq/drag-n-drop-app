const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')
let item

for (let item of items) {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
    item.addEventListener('dragover', itemOver)
}

function dragStart(event) {
    item = event.target
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragEnd() {
    items.forEach(el => el.className = "item")
    items.forEach(el => el.style.marginTop = "0")
}

function itemOver(e) {
    if (e.target.className == "item") {
        e.target.style.marginTop = "65px"
    }
}

//Placeholders Events******************************************************
for (let placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragDrop)
}

function dragOver(event) {
    event.preventDefault()
}

function dragEnter(event) {    
    if ( event.target.className == "placeholder" ) {
        event.target.classList.add('nest')
    }    
}

function dragLeave(event) {
    event.target.classList.remove('nest')
}

function dragDrop(event) {    
    console.log(event.target.className);
    if ( event.target.className == "placeholder nest" ) {
        event.target.prepend(item)
    }
    event.target.classList.remove('nest')
}
//END---------------Placeholders Events*************************************