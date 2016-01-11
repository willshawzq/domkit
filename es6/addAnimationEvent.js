var addAnimationListener = (() => {
  //IE 10+ support standard way, IE 10- dont support animation
  let pfx = '',//cache current browser prefix
      prefixs = ['Webkit', 'Moz', 'O', ''];
  //set the first char to UpperCase
  const _upFirstChar = (str) => {
    if(!str) return;
    return str
              .toLowerCase()
              .replace(/\b(\w)|\s(\w)/g, (c) => {
                return c.toUpperCase();
              });
  };
  const _getEventName = (type) => {
    return pfx ? `${pfx}Animation${_upFirstChar(type)}` : `animation${type}`;
  };
  return function(el, type, fn) {
    for(let i = 0, len = prefixs.length; i < len; i++) {
      pfx = prefixs[i];
      //jude whick kind AnimationEvent in window
      if(`${pfx}AnimationEvent` in window) {
        //reset the addAnimationListener
        addAnimationListener = (el, type, fn) => {
          el.addEventListener(
            _getEventName(type),
            fn,
            false
          );
        };
        //get out of the loop
        break;
      };
    };
    //rewrite the function and run the first time
    addAnimationListener(el, type, fn);
  };
})();
