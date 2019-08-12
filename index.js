var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("photo");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}


const likedHeart = document.querySelector('.fa-heart');
likedHeart.onclick = function (e) {
  e.preventDefault();
  const heartIcon = document.querySelector('.fa-heart');
  heartIcon.classList.toggle('red_heart');
  console.log('liked heart');
  var likedState = {};

  if (localStorage.getItem('Liked')) {
    localStorage.removeItem('Liked')
  } else {
    let estado = 'MeGusta';
    localStorage.setItem('Liked', estado);
  }
}

if (localStorage.getItem('Liked')) {
  const heartIcon = document.querySelector('.fa-heart');
  heartIcon.classList.toggle('red_heart');
}



if (localStorage.getItem('PrecioNuevo')) {
} else{
  localStorage.setItem('PrecioNuevo', 1400000);
  localStorage.setItem('PrecioMetro', 3680);
}

const changedPrice = document.querySelector('#price_tag');
changedPrice.placeholder = localStorage.getItem('PrecioNuevo');
const areaPrice = document.querySelector('span')
areaPrice.innerHTML = '$/m²' +' '+ localStorage.getItem('PrecioMetro');

changedPrice.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    const newPrice = changedPrice.value;
    const areaPrice = document.querySelector('span')

    const resulted = Math.round((newPrice * 3680) / 1400000);
    areaPrice.innerHTML = '$/m²' + resulted;

    localStorage.setItem('PrecioNuevo', newPrice);
    localStorage.setItem('PrecioMetro', resulted);

    if (localStorage.getItem('PrecioNuevo')) {
      changedPrice.placeholder = newPrice;
    } else{
      localStorage.setItem('PrecioNuevo', 1400000);
    }
  }
});




const contactButton = document.querySelector('#contact');
const modalWrapper = document.querySelector('#modal_wrapper');
const boxContainer = document.querySelector('.box_container');

contactButton.onclick = function (e) {
  e.preventDefault();
  boxContainer.classList.add('displayNone');
  modalWrapper.classList.remove('displayNone');
  modalWrapper.classList.add('displayBlock');
}



const submittedForm = document.querySelector('#formulario');
const modalThanks = document.querySelector('#modal_thanks');

submittedForm.onsubmit = function (e) {
  e.preventDefault();

  const emailValue = document.querySelector('#form_email').value;
  const emailInput = document.querySelector('#form_email');
  const errorTxt = document.querySelector('#error_txt');

  if (emailValue.length <= 0) {
    emailInput.classList.add('error');
    errorTxt.classList.remove('displayNone');
  } else {
    modalWrapper.classList.add('displayNone');

    modalThanks.classList.remove('displayNone');
    modalWrapper.classList.add('displayNone');
    boxContainer.classList.add('displayNone');
  }
}


const backButton = document.querySelector('#back');
backButton.onclick = function (e) {
  e.preventDefault();
  modalThanks.classList.add('displayNone');
  modalWrapper.classList.add('displayNone');
  boxContainer.classList.remove('displayNone');
}

