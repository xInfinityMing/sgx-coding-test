  import {
    DEVICE_MAX_WIDTH,
    DEVICE_MIN_WIDTH,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    HEADER_HEIGHT
  } from './constants';

  export function getMediaQuery(property, value) {
    return `(${property}: ${value}px)`;
  }

  export function isMobile() {
    return window.matchMedia(getMediaQuery('max-width', DEVICE_MAX_WIDTH.MD)).matches;
  }

  export function isTablet() {
    return window.matchMedia(getMediaQuery('min-width', DEVICE_MIN_WIDTH.MD)).matches;
  }

  export function isDesktop() {
    return window.matchMedia(getMediaQuery('min-width', DEVICE_MIN_WIDTH.LG)).matches;
  }

  export function isDesktopXL() {
    return window.matchMedia(getMediaQuery('min-width', DEVICE_MIN_WIDTH.XL)).matches;
  }

  export function validate(element) {
    const validityState = element.validity;
    if (validityState.valid) {
      return {valid: true}
    }

    return {valid: false, invalidity:  getKeyByValue(validityState, true)};

  }

  export function isEmpty(target) {
    return target === '';
  }

  export function scrollToElement(el, customOffset = 0) {
    if (el) {

      const elOffset = getElementTop(el);
      const headerHeight = isDesktop() ? HEADER_HEIGHT.DESKTOP : HEADER_HEIGHT.MOBILE;
      const offsetTop = elOffset - headerHeight - customOffset;

      document.documentElement.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
