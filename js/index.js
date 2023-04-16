// const Hamburguer = document.querySelector('.menu-header')
// const Menu = document.querySelector('.navegation');

const Body = document.querySelector('.body')

const ModalOne = document.querySelector('.modalOne')
const ModalTwo = document.querySelector('.modalTwo')
const ModalThree = document.querySelector('.modalThree')

const ShowModalOne = document.querySelector('.li-worksOne')
const ShowModalTwo = document.querySelector('.li-worksTwo')
const ShowModalThree = document.querySelector('.li-worksThree')


const Farol = document.querySelector('.farol')
const LuzInterna = document.querySelector('.luz-interna')
const LuzExterna = document.querySelector('.luz-externa')
const Palanca = document.querySelector(".palanca")

const Particle = document.querySelector(".particless")

const ModalTitle = document.querySelector(".h1modal")
const ModalP = document.querySelector(".p-modal")
const ModalP2 = document.querySelector(".p-modal2")
const ModalP3 = document.querySelector(".p-modal3")
const ModalFondo = document.querySelector(".content-modal")


const SnowLuz = document.querySelector('.snow-luz')

const caraOne = document.querySelector(".carawork1");
const caraTwo = document.querySelector(".carawork2");
const caraThree = document.querySelector(".carawork3");
const caraFour = document.querySelector(".carawork4");
const caraFive = document.querySelector(".carawork5");


Particle.addEventListener('click', e => {
  if(Particle.classList.contains('show-modal') && e.target == Particle) {
    Particle.classList.toggle('show-modal')
  }
  console.log(e.target)
})


ModalOne.addEventListener('click', e => {
  if(ModalOne.classList.contains('show-modal') && e.target == ModalOne) {
    ModalOne.classList.toggle('show-modal')
    Body.classList.remove('body-overflow')
  }
  console.log(e.target)
})
ModalTwo.addEventListener('click', e => {
  if(ModalTwo.classList.contains('show-modal') && e.target == ModalTwo) {
    ModalTwo.classList.toggle('show-modal')
    Body.classList.remove('body-overflow')
  }
  console.log(e.target)
})
ModalThree.addEventListener('click', e => {
  if(ModalThree.classList.contains('show-modal') && e.target == ModalThree) {
    ModalThree.classList.toggle('show-modal')
    Body.classList.remove('body-overflow')
  }
  console.log(e.target)
})




ShowModalOne.addEventListener('click', e => {
  ModalOne.classList.toggle('show-modal')
  Body.classList.add('body-overflow')
})
ShowModalTwo.addEventListener('click', () => {
  ModalTwo.classList.toggle('show-modal')
  Body.classList.add('body-overflow')
})
ShowModalThree.addEventListener('click', () => {
  ModalThree.classList.toggle('show-modal')
  Body.classList.add('body-overflow')
})




Palanca.addEventListener('click', () => {
  Palanca.classList.toggle('palanca-bottom') 
  ModalTitle.classList.toggle("modal-title-color")
  ModalP.classList.toggle("modal-title-color")
  ModalP2.classList.toggle("modal-title-color")
  ModalP3.classList.toggle("modal-title-color")
  ModalFondo.classList.toggle("modal-background")
  LuzInterna.classList.toggle("luz-interna-animacion")
  LuzExterna.classList.toggle("luz-externa-animacion")
  Farol.classList.toggle("farol-animation")
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




// function luzexterna() {
//   LuzExterna.classList.add("luz-externa-animacion")
//   console.log("luz")
// }

// function luzexternafalse() {
//   LuzExterna.classList.remove("luz-externa-animacion")
//   console.log("luz")
// }