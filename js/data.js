/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
window.addEventListener('beforeunload', storage);

function storage(event) {
  var objectJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', objectJSON);
}

var previousObjectJSON = localStorage.getItem('javascript-local-storage');
if (previousObjectJSON !== null) {
  data = JSON.parse(previousObjectJSON);
}
