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
  data.entries.unshift(formDataModel);
  $form.reset();
  if (getSubmit) {
    $newImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
}

function journalEntry(entry) {
  var entryLi = document.createElement('li');
  entryLi.className = 'column list-style-type';

  var entryImg = document.createElement('img');
  entryImg.setAttribute('src', entry.photoUrl);
  entryImg.className = 'column column-full img';
  entryLi.appendChild(entryImg);

  var entryDivTextContent = document.createElement('div');
  entryDivTextContent.className = 'text-content';
  entryLi.appendChild(entryDivTextContent);

  var entryH3 = document.createElement('h3');
  entryH3.className = 'h3';
  entryH3.textContent = entry.title;
  entryDivTextContent.appendChild(entryH3);

  var entryP = document.createElement('p');
  entryP.textContent = entry.notes;
  entryP.className = 'text-content';
  entryDivTextContent.appendChild(entryP);

  return entryLi;
}

var $Ul = document.querySelector('.ul');
document.addEventListener('DOMContentLoaded', entryContentLoaded);

function entryContentLoaded(event) {
  // if (entryContentLoaded !== null) {
  for (var i = 0; i < data.entries.length; i++) {
    var entryObjects = journalEntry(data.entries[i]);
    $Ul.append(entryObjects);
  }
}
// }
