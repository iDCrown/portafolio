// const Hamburguer = document.querySelector('.menu-header')
// const Menu = document.querySelector('.navegation');

const ModalOne = document.querySelector('.modalOne')
const ModalTwo = document.querySelector('.modalTwo')
const ModalThree = document.querySelector('.modalThree')

const ShowModalOne = document.querySelector('.li-worksOne')
const ShowModalTwo = document.querySelector('.li-worksTwo')
const ShowModalThree = document.querySelector('.li-worksThree')

const Palanca = document.querySelector(".palanca")

const ModalTitle = document.querySelector(".h1modal")
const ModalH2 = document.querySelector(".h2-modal")
const ModalP = document.querySelector(".p-modal")
const ModalFondo = document.querySelector(".content-modal")


const SnowLuz = document.querySelector('.snow-luz')

const caraOne = document.querySelector(".carawork1");
const caraTwo = document.querySelector(".carawork2");
const caraThree = document.querySelector(".carawork3");
const caraFour = document.querySelector(".carawork4");
const caraFive = document.querySelector(".carawork5");

ModalOne.addEventListener('click', e => {
  if(ModalOne.classList.contains('show-modal') && e.target == ModalOne) {
    ModalOne.classList.toggle('show-modal')
  }
  console.log(e.target)
})
ModalTwo.addEventListener('click', e => {
  if(ModalTwo.classList.contains('show-modal') && e.target == ModalTwo) {
    ModalTwo.classList.toggle('show-modal')
  }
  console.log(e.target)
})
ModalThree.addEventListener('click', e => {
  if(ModalThree.classList.contains('show-modal') && e.target == ModalThree) {
    ModalThree.classList.toggle('show-modal')
  }
  console.log(e.target)
})

ModalTitle.addEventListener('click', () => {
  if(Palanca.classList.contains('palanca-bottom') == true) {
    // ModalTitle.classList.add("modal-title-color")
    console.log("colore")
  }
  console.log(e.target)
})
console.log(ModalTitle)

ModalH2.addEventListener('click', () =>  {
  if(Palanca.classList.contains('palanca-bottom') == true) {
    ModalH2.classList.add("modal-title")
  }
  console.log("true")
})

ModalP.addEventListener('click', () =>  {
  if(Palanca.classList.contains('palanca-bottom') == true) {
    ModalP.classList.add("modal-title-color")
  }
  console.log("true")
})

ModalFondo.addEventListener('click',() =>  {
  if(Palanca.classList.contains('palanca-bottom') == true) {
    ModalFondo.classList.add("modal-background")
  }
  console.log("true")
})



ShowModalOne.addEventListener('click', () => {
  ModalOne.classList.toggle('show-modal')
})
ShowModalTwo.addEventListener('click', () => {
  ModalTwo.classList.toggle('show-modal')
})
ShowModalThree.addEventListener('click', () => {
  ModalThree.classList.toggle('show-modal')
})

Palanca.addEventListener('click', () => {
  Palanca.classList.toggle('palanca-bottom') 
  console.log("true")
})

function caraOneTrue() {
  caraOne.classList.add("movecara")
  console.log("true")
}

function caraOnefalse() {
  caraOne.classList.remove("movecara")
  console.log("false")
}

function caraTwotrue() {
  caraTwo.classList.add("movecara")
  console.log("true")
}
function caraTwofalse() {
  caraTwo.classList.remove("movecara")
  console.log("false")
}

function caraThreetrue() {
  caraThree.classList.add("movecara")
  console.log("true")
}
function caraThreefalse() {
  caraThree.classList.remove("movecara")
  console.log("false")
}