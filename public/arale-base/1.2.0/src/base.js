define('arale-base/1.2.0/src/base', function(require, exports, module){
// Base
// ---------
// Base 是一个基础类，提供 Class、Events、Attrs 和 Aspect 支持。

var Class = require("arale-class/1.2.0/class.js");
var Events = require("arale-events/1.2.0/events.js");
var Aspect = require("./aspect.js");
var Attribute = require("./attribute.js");


module.exports = Class.create({
  Implements: [Events, Aspect, Attribute],

  initialize: function(config) {
    this.initAttrs(config);

    // Automatically register `this._onChangeAttr` method as
    // a `change:attr` event handler.
    parseEventsFromInstance(this, this.attrs);
  },

  destroy: function() {
    this.off();

    for (var p in this) {
      if (this.hasOwnProperty(p)) {
        delete this[p];
      }
    }

    // Destroy should be called only once, generate a fake destroy after called
    // https://github.com/aralejs/widget/issues/50
    this.destroy = function() {};
  }
});


function parseEventsFromInstance(host, attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      var m = '_onChange' + ucfirst(attr);
      if (host[m]) {
        host.on('change:' + attr, host[m]);
      }
    }
  }
}

function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

});
