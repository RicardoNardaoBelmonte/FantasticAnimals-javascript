function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent div');
    
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo');
        
        function activeTab(index){
            tabContent.forEach((div) => {
                div.classList.remove('ativo');
            });
            
            tabContent[index].classList.add('ativo');
        };
        
        
        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener('click',() => {
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAcordionList(){
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
initAcordionList();


function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(e){
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // forma alternativa de dar scroll suave
        // const topo = section.offsetTop;
        // window.scrollTo({
            //    top: 1000,
            //    behavior: "smooth",
            // });
            
            
        };
        
        linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
};
initScrollSuave();

