/* global data */
/* exported data */

var $photoUrl = document.querySelector('input.photo-url');
var newImg = document.querySelector('.img');
$photoUrl.addEventListener('input', getPhotoUrl);

function getPhotoUrl(event) {
  newImg.setAttribute('src', event.target.value);
}
