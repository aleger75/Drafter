(function(window, document) {

  "use strict";


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

  this.elt.contentEditable = true;
  this._css = this.elt.style;

  return this.init();
}

(function() {

  DrafterEditor.prototype = {

    init: function() {
      this.test = 'test';
    },

  }

})();

if (typeof window.DrafterEditor === 'undefined') {
  window.DrafterEditor = DrafterEditor;
}


}(window, document));
