export default function menuHamburgesa(){
        const $items = document.querySelector(".nav__items");
        const $lists = document.querySelectorAll(".nav__items__list");
 
        document.addEventListener("click", (e) =>{  
            const $menu = document.querySelector(".menu");
  
            if(e.target.matches(`[class*="linea"]`) ){    
                $items.classList.toggle("nav-activo");
                $menu.classList.toggle("toggle");

                $lists.forEach( (list, index) =>{
                    list.style.animation 
                    ? list.style.animation = ""
                    : list.style.animation = `navLink 0.5s ease forwards ${index / 7 + 0.3}s`;
            });           
         
            }else if(!(e.target.matches(".menu"))){
                $items.classList.remove("nav-activo");
                $menu.classList.remove("toggle");
                
                $lists.forEach( list =>{                    
                    if( list.style.animation ) return list.style.animation = ""
                    });                
            }
         });
}