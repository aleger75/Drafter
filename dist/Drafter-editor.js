(function(window, undefined) {

  "use strict";


/* Drafter-editor main */

// Constructor
function DrafterEditor(context) {

  if (typeof context === 'string') {
    this.elt = document.getElementById(context);
  }
  else if (typeof context === 'object') {
    this.elt = context;
  }
  else {
    throw new Error('Invalid type of argument');
  }

  this.elt.editable = true;
  this._css = this.elt.style;

}

if (typeof addEventListener !== 'undefined') {
  DrafterEditor.addEvent = function(obj, event, fn) {
    obj.addEventListener(event, fn, false);
  }
}
else if (typeof attachEvent !== 'undefined') {
  DrafterEditor.addEvent = function(obj, event, fn) {
    obj.attachEvent(event, fn, false);
  }
}
else {
  DrafterEditor.addEvent = function(obj, event, fn) {
    obj['on' + event] = fn;
  }
}

return DrafterEditor;


}(window));
