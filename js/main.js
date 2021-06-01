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
// take view variable compare to div elements with attribute data-view = 'entries' and set them to view and if not entries set to hidden
var $photoUrl = document.querySelector('input.photo-url');
var $newImg = document.querySelector('.img');
var $form = document.querySelector('.form');
var $Ul = document.querySelector('.ul');
var $noEntry = document.querySelector('.no-entry');
var $entry = document.querySelector('.entry');
var $viewAll = document.querySelectorAll('.view');
var $new = document.querySelector('.new');
$new.addEventListener('click', newEntry);
document.addEventListener('DOMContentLoaded', entryContentLoaded);
$photoUrl.addEventListener('input', getPhotoUrl);
$form.addEventListener('submit', getSubmit);

window.addEventListener('load', onLoad);
function onLoad(event) {
  var view = data.view;
  for (var i = 0; i < $viewAll.length; i++) {
    if (view === $viewAll[i].getAttribute('data-view')) {
      $viewAll[i].className = 'view';
    } else {
      $viewAll[i].className = 'view hidden';
    }
    if (data.entries.length === 0) {
      $noEntry.className = 'view';
    } else {
      $noEntry.className = 'view hidden';
    }
  }
}

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

  $Ul.prepend(journalEntry(data.entries[0]));
  viewSwitch('entries');

  if (data.length.entries !== 0) {
    $new.className = 'view';
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

function entryContentLoaded(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var entryObjects = journalEntry(data.entries[i]);
    $Ul.append(entryObjects);
  }
}

$entry.addEventListener('click', function (event) {
  var targetView = event.target.getAttribute('data-view');
  viewSwitch(targetView);
});

function viewSwitch(viewName) {
  data.view = 'entries';
  for (var i = 0; i < $viewAll.length; i++) {
    if ($viewAll[i].getAttribute('data-view') === viewName) {
      $viewAll[i].className = 'view';
    } else {
      $viewAll[i].className = 'view hidden';
    }
  }
  if (data.entries.length === 0) {
    $noEntry.className = 'view';
  } else {
    $noEntry.className = 'view hidden';
  }
}
// when i click on the new button
// i need entries to be hidden
// and the form-container visible

function newEntry(event) {
  event.preventDefault();
  data.view = 'entry-form';
  var newMatchView = event.target.getAttribute('data-view');
  for (var i = 0; i < $viewAll.length; i++) {
    if ($viewAll[i].getAttribute('data-view') === newMatchView) {
      $viewAll[i].className = 'view';
    } else {
      $viewAll[i].className = 'view hidden';
    }
  }
}
