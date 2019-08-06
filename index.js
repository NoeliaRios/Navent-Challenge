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
likedHeart.onclick = function(e){
  e.preventDefault();
  const heartIcon = document.querySelector('.fa-heart');
  heartIcon.classList.toggle('.red_heart');
}



// var click = 0;
// var likesPares = 0;

// function likedHeart() {

//   click++

//   if (click % 2 == 0) {
//     likesPares++
//     console.log(likesPares)
//     // var numeroDeLikes = document.querySelector('.fa-heart'); 

//   }

//   var iconos = document.querySelector('.fa-heart')
//   iconos.classList.toggle('.red_heart')

// }