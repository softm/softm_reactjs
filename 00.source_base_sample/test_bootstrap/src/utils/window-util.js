const popupWindow = (url, name = '_blank', width = 1100, height = 810) => {
  window.open(url, name, `width=${width},height=${height}`);
};

// eslint-disable-next-line import/prefer-default-export
export { popupWindow };
