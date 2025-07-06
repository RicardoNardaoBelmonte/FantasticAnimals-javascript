export default function initAcordionList() {
  const acordionList = document.querySelectorAll('[data-anime="acordion"] dt');
  const activeClass = "ativo";

  function activeAcordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (acordionList.length) {
    acordionList[0].classList.add(activeClass);
    acordionList[0].nextElementSibling.classList.add(activeClass);

    acordionList.forEach((item) => {
      item.addEventListener("click", activeAcordion);
    });
  }
}
