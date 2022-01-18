const Hamburguer = document.querySelector('.menu-header')
const Menu = document.querySelector('.navegation');

console.log(Menu)

Hamburguer.addEventListener('click', ()=> {
 Menu.classList.toggle('show-header')
 
 if(Menu === false) {
   alert('atras')
 }
})

const Modal = document.querySelector('.modal')
const contentmodal = document.querySelector('.content-modal')

Modal.addEventListener('click', e => {
  if(Modal.classList.contains('show-modal') && e.target == Modal) {
    Modal.classList.toggle('show-modal')
  }
  console.log(e.target)
})

const ShowModal = document.querySelector('.li-works')

ShowModal.addEventListener('click', () => {
  Modal.classList.toggle('show-modal')
})


const imgwork = document.getElementById("imgwork")
const cara = document.getElementById("carawork");


// test.addEventListener("mouseover", (event) => {
//   cara.classList.add("movecara")
//   console.log("yes")
// })

function caratrue() {
  cara.classList.add("movecara")
  console.log("true")
}

function carafalse() {
  cara.classList.remove("movecara")
  console.log("false")
}
