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
}

function itemOver(event) {
    event.target.classList.add('slidedown')
}


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
    event.target.classList.add('nest')
}

function dragLeave(event) {
    event.target.classList.remove('nest')
}

function dragDrop(event) {
    event.target.classList.remove('nest')
    event.target.append(item)
}