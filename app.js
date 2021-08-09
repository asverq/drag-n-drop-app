const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (let placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragDrop)
}

function dragStart(event) {
    console.log(event.target)
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragEnd(event) {
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')
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