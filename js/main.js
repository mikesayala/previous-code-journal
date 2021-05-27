/* global data */
/* exported data */

// I want the entries tab toggle the entries page
// If there are entries i want it to show them
// if there are no entries i want the screen to show no entries recorded
// I need to make the div class with entry tab active
// that will trigger the new events page to go hidden
// and also the no entries recorded page to go hidden
// I need to query the dom for the tab class and view classes
// set up the addEventListener for the click event with the .tab query
// i need to define a function that will loop through each tab class and if it
// is equal to the event.target trigger the entries to go from hidden to view
// unless there is no entries then the entries page will stay hidden
// and the no entries recorded page will stay in view.

var $photoUrl = document.querySelector('input.photo-url');
var $newImg = document.querySelector('.img');
var $form = document.querySelector('.form');

$photoUrl.addEventListener('input', getPhotoUrl);
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
  for (var i = 0; i < data.entries.length; i++) {
    var entryObjects = journalEntry(data.entries[i]);
    $Ul.append(entryObjects);
  }
}
var $entry = document.querySelector('.entry');
var $viewAll = document.querySelectorAll('.view');
var $noEntries = document.querySelector('.none');
$entry.addEventListener('click', viewSwitch);

function viewSwitch(event) {
  var matchingDataView = event.target.getAttribute('data-view');
  for (var i = 0; i < $viewAll.length; i++) {
    if ($viewAll[i].getAttribute('data-view') === matchingDataView) {
      $viewAll[i].className = 'view';
    } else {
      $viewAll[i].className = 'view hidden';
    }
  }
  if (data.entries.length === 0) {
    $noEntries.className = 'none';
  } else {
    $noEntries.className = 'none hidden';
  }
}
