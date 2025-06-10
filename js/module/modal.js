export default function initModal(){

    const abrirBotaoModal = document.querySelector('[data-modal="abrir"]');
    const fecharBotaoModal = document.querySelector('[data-modal="fechar"]');
    const modalContainer = document.querySelector('[data-modal="container"]');
    
    if (abrirBotaoModal && fecharBotaoModal && modalContainer){
    
        function toggleModal(e){
            e.preventDefault();
            modalContainer.classList.toggle('ativo');
        }
    
        function fecharModal(e){
            if(e.target === this){
                toggleModal(e);
            }
        }
    
    
        abrirBotaoModal.addEventListener('click', toggleModal);
        fecharBotaoModal.addEventListener('click', toggleModal);
        modalContainer.addEventListener('click', fecharModal);
    }

}
