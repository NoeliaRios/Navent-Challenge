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
}




const changedPrice = document.querySelector('#price_tag');
console.log(changedPrice);

changedPrice.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    const newPrice = changedPrice.value;
    const areaPrice = document.querySelector('span')
    // const changedArea = areaPrice.textContent
    console.log('areaPrice' + areaPrice);
    console.log('newprice' + newPrice);

    areaPrice.innerHTML = '$/m²' + Math.round((newPrice * 3680) / 1400000);

  }
})


const contactButton = document.querySelector('#contact');
const modalWrapper = document.querySelector('#modal_wrapper');
const boxContainer = document.querySelector('.box_container');

contactButton.onclick = function (e) {
  e.preventDefault();
  boxContainer.classList.add('displayNone');
  modalWrapper.classList.remove('displayNone');
  modalWrapper.classList.add('displayBlock');
}










const submittedForm = document.querySelector('formulario');

submittedForm.onsubmit = function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('form_email').value;
  // const email = emailInput.value;

  if (email.length <= 0) {
    email.classList.add('error');
  }


}

console.log('emailinput' + emailInput);
// console.log('email' + email);

