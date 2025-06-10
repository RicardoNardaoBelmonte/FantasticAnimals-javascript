export default function initScrollSuave(){
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

