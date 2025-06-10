export default function dropDownMenu(){
    const dropDownMenu = document.querySelectorAll('[data-dropdown]');
    
    dropDownMenu.forEach((menu) => {
        ['touchstart', 'click'].forEach((userEvent)=> {
            menu.addEventListener(userEvent, handclicker);
        });
    })
    
    function handclicker(e){
        e.preventDefault();
        this.classList.toggle('active');
    }
}
