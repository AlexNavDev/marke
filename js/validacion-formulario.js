export default function contactFormValidations(){

    const $form = document.querySelector(".formulario__contacto"),
          $inputs = document.querySelectorAll(".formulario__contacto [required]");

          $inputs.forEach( input =>{
              const $span = document.createElement("span");
              $span.id = input.name;
              $span.textContent = input.title;
              $span.classList.add("formulario__contacto-error", "none");
              input.insertAdjacentElement("afterend", $span);           

          });

          document.addEventListener("keyup", e =>{
              if(e.target.matches(".formulario__contacto [required]")){
                  let $input = e.target,
                      pattern = $input.pattern || $input.dataset.pattern;
                      console.log($input, pattern);

                    if( pattern && $input.value !== "" ){                     
                        let regex = new RegExp(pattern);
                     
                        return !regex.exec($input.value)
                                ? document.getElementById($input.name).classList.add("is-active")
                                : document.getElementById($input.name).classList.remove("is-active");
                    }

                    if( !pattern ){
                        return  $input.value === " "
                                ? document.getElementById($input.name).classList.add("is-active")
                                : document.getElementById($input.name).classList.remove("is-active");
                    }
              }
          });

          document.addEventListener("submit", e =>{
            e.preventDefault();
                        
            const $loader = document.querySelector(".formulario__contacto-loader"),
                  $response = document.querySelector(".formulario__contacto-response");
  
                  $loader.classList.remove("none");

            setTimeout( () =>{
                $loader.classList.add("none");
                $response.classList.remove("none");
                $form.reset();

                setTimeout( () => $response.classList.add("none"), 3000);            
            }, 3000);
          });
}