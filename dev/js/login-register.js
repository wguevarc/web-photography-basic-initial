const topbar = document.getElementById('topbar')

const loginModal = document.getElementById('login-topbar')
const registerModal = document.getElementById('register-modal')

const loginForm = document.getElementById('login-form')
const registerform = document.getElementById('register-form')

if (topbar){
    topbar.addEventListener('click',(e)=>{
        if(e.target.parentElement.dataset.type |= undefined){
            loginModal.classList.add('lighbox--show')

        }
    })
}