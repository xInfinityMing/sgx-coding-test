export const SCREEN_WIDTH = () => (window.innerWidth || document.documentElement.clientWidth);
export const SCREEN_HEIGHT = () => (window.innerHeight || document.documentElement.clientHeight);
export const DOM_EVENTS = {
  MOUSEENTER: 'mouseenter',
  MOUSELEAVE: 'mouseleave',
  DROPDOWN_SHOW: 'show.bs.dropdown',
  DROPDOWN_SHOWN: 'shown.bs.dropdown',
  DROPDOWN_HIDE: 'hide.bs.dropdown',
  DROPDOWN_HIDDEN: 'hidden.bs.dropdown',
  SCROLL_SPY_ACTIVATE: 'activate.bs.scrollspy',
  CLICK: 'click',
  SCROLL: 'scroll',
  INPUT: 'input',
  BLUR: 'blur',
  CHANGE: 'change',
  CUSTOM_DROPDOWN_SELECTED: 'dropdown.selected',
  KEYUP: 'keyup',
  LOAD: 'load',
  RESIZE: 'resize',
}
// breakpoints must be same as SASS variables
export const BREAKPOINTS = {
  MD: 600,
  LG: 992,
  XL: 1366
};
export const DEVICE_MAX_WIDTH = {
  MD: BREAKPOINTS.LG - 1
}
export const DEVICE_MIN_WIDTH = {
  MD: BREAKPOINTS.MD,
  LG: BREAKPOINTS.LG,
  XL: BREAKPOINTS.XL
}
export const THOUSAND_SEPARATOR = ',';

export const INVALIDITY = {
  VALUE_MISSING: 'valueMissing'
}

export const KEYBOARD_CODES = {
  ENTER: 13
}

export const HEADER_HEIGHT = {
  DESKTOP: 100,
  MOBILE: 64,
  COLLAPSE: 54
};
