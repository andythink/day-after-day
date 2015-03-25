define('arale-autocomplete/1.4.1/src/autocomplete.handlebars', function(require, exports, module){
var Handlebars = require("handlebars-runtime/1.3.0/dist/cjs/handlebars.runtime.js")["default"];
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <li data-role=\"item\" class=\""
    + escapeExpression(((stack1 = (depth1 && depth1.classPrefix)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-item\">\n        ";
  stack1 = (helper = helpers.include || (depth1 && depth1.include),options={hash:{
    'parent': (depth1)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "include", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </li>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = self.invokePartial(partials.html, 'html', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "<div class=\"";
  if (helper = helpers.classPrefix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.classPrefix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <div class=\"";
  if (helper = helpers.classPrefix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.classPrefix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-content\">\n    ";
  stack1 = self.invokePartial(partials.header, 'header', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <ul data-role=\"items\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    ";
  stack1 = self.invokePartial(partials.footer, 'footer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
});
