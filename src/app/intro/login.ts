const login = document.querySelector('#login') as HTMLButtonElement;
const singin = document.querySelector('#singin') as HTMLButtonElement;
const logout = document.querySelector('#logout') as HTMLButtonElement;
const profile = document.querySelector('.profile-picture') as HTMLDivElement;
const imagen = profile.firstElementChild as HTMLImageElement;
const email = document.querySelector('#floatinginput') as HTMLInputElement;
const password = document.querySelector('#floatingpassword') as HTMLInputElement;
const icons = document.getElementById('#icons') as HTMLUListElement;

const edicion = document.querySelectorAll('.java');
let usuario: string = "admin";
let contrasenia: string = "admin";
function puro() {
    


login.addEventListener('click', () => {
    if (email.value == "admin" && password.value == "admin") {
        imagen.classList.add('imagen');
        edicion.forEach(edit => {
            edit.classList.remove('visuallyhidden');
        });
            icons.id = 'botones-edicion.dashboard';
        }
    });

    logout.addEventListener('click', () => {
            imagen.classList.remove('imagen');
            edicion.forEach(edit => {
                edit.classList.add('visuallyhidden');
            });
            singin.classList.remove('visuallyhidden');
            logout.classList.add('visuallyhidden');
            icons.id = 'iconos';
    });

}