const navigation = document.querySelector(".navigation")
const menuToggle = document.querySelector(".menuToggle")
const list = document.querySelectorAll('.list')

menuToggle.onclick = function() {
    navigation.classList.toggle('open')
}
function activarLink() {
    list.forEach((items)=> 
    items.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item)=> 
    item.addEventListener('click',activarLink)
)