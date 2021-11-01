const toggleMenu = document.getElementById('toggle-menu')
const sidebar = document.getElementById('sidebar')

toggleMenu.addEventListener('click', (e)=>{
    if ( e.target.id == 'toggle-menu' || e.target.parenElement.id == 'toggle-menu'){
        sidebar.classList.toggle('show')
        toggleMenu.classList.toggle('show')
    }
})