export default function initModal() {
  const botaoAbrirModal = document.querySelector('[data-modal="abrir"]');
  const botaoFecharModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function clicarForaModal(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }
  if (botaoAbrirModal && botaoFecharModal && containerModal) {

    botaoAbrirModal.addEventListener("click", toggleModal);
    botaoFecharModal.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clicarForaModal);
  }
}
