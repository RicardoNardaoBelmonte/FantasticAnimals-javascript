export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowHalf = window.innerHeight * 0.6;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowHalf < 0;

    if (isSectionVisible) {
      section.classList.add("ativo");
    } else if (section.classList.contains("ativo")) {
      section.classList.remove("ativo");
    }
  });

  window.addEventListener("scroll", initAnimacaoScroll);
}
