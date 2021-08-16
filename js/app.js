import paneles from "./paneles.js";
import menuHamburgesa from "./menu-hamburgesa.js";
import modal from "./modal.js";
import serviciosAjax from "./ajax.js";
import contactFormValidations from "./validacion-formulario.js";
import navToggle from "./nav-toggle.js";

document.addEventListener("DOMContentLoaded", () =>{
    serviciosAjax();
    menuHamburgesa();
    navToggle();   
    paneles();  
    modal();
    contactFormValidations();
});



