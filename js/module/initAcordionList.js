export default function initAcordionList(){
    const acordionList = document.querySelectorAll('.js-acordion dt');
    const activeClass = 'ativo';
    
    if(acordionList.length){
        acordionList[0].classList.add(activeClass);
        acordionList[0].nextElementSibling.classList.add(activeClass);
        
        function activeAcordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        };
        
        acordionList.forEach((item) => {
            item.addEventListener('click', activeAcordion);
        });
    }
}
