export default function modal(){    
    document.addEventListener("click", e =>{   
        let $servicios = Array.from(document.querySelectorAll(".servicios__items"));
        let $iconos = Array.from(document.querySelectorAll(".servicios__items > img"));

        let indexServicios = $servicios.indexOf(e.target);
        let indexIconos = $iconos.indexOf(e.target);        

        let contenedorModal = document.querySelector(".modal__contenedor");         
        let servicioModal = Array.from(document.querySelectorAll(".modal__servicio"));     

        if(e.target.matches(".servicios__items")) {                       
            contenedorModal.style.transform = "scale(1)";
            servicioModal.forEach( servicio => servicio.classList.remove("modal-activo"));
            servicioModal[indexServicios].classList.add("modal-activo");
            }
        
        if(e.target.matches(".servicios__items > img")){                        
            contenedorModal.style.transform = "scale(1)";
            servicioModal.forEach( servicio => servicio.classList.remove("modal-activo"));
            servicioModal[indexIconos].classList.add("modal-activo");
            }

        if(e.target.matches("#cerrar-modal") || e.target.matches(".modal__contenedor")){
            contenedorModal.style.transform = "scale(0)";
        } 
    });
}