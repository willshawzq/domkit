function dataSet(el, val) {
  if(document.body.dataset) {
    dataSet = function(el, key) {
      if(arguments.length === 3) {
        el.dataset[key] = arguments[2];
      }else {
        return el.dataset[key];
      }
    }
  }else {
    dataSet = function(el, key) {
      if(arguments.length === 3) {
        el.setAttribute(key, arguments[2]);
      }else {
        return el.getAttribute(key);
      }
    }
  }
  dataSet.apply(this, arguments);
}
