export default function navToggle(){
    document.addEventListener("click", e =>{
        if(e.target.matches("[class^=nav]") || e.target.matches("[class^=fas]") ||  e.target.matches(".nav__logo a")){
            const nav = document.querySelector(".nav"),
                  flecha = document.querySelector(".nav-flecha");

            nav.classList.toggle("nav-activo");
            flecha.classList.toggle("nav-flecha-rotate");
        }
    });
}