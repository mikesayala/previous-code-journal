/* global data */
/* exported data */

var $photoUrl = document.querySelector('input.photo-url');
var $newImg = document.querySelector('.img');
$photoUrl.addEventListener('input', getPhotoUrl);
var $form = document.querySelector('.form');
$form.addEventListener('submit', getSubmit);
function getPhotoUrl(event) {
  $newImg.setAttribute('src', event.target.value);
}

function getSubmit(event) {
  event.preventDefault();
  var formDataModel = {
    title: $form.title.value,
    photoUrl: $form.photo.value,
    notes: $form.notes.value,
    entryId: data.nextEntryId
  };

  data.nextEntryId++;
  data.entries.push(formDataModel);
  $form.reset();
  if (getSubmit) {
    $newImg.setAttribute('src', 'images/placeholder-image-square.jpg');

  }
}
