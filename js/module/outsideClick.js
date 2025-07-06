export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutSideClick);
      });
    });
    element.setAttribute(outside, "");
  }
  function handleOutSideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside, "");
      html.removeEventListener("click", handleOutSideClick);
      callback();
    }
  }
}
