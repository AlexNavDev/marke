export default function paneles(){
     const tabs = Array.from(document.querySelectorAll(".tabs__item"));
     const panels = Array.from(document.querySelectorAll(".panels__item"));

        document.getElementById("tabs").addEventListener("click", (e) =>{  
            if(e.target.classList.contains("tabs__item")){
                let i = tabs.indexOf(e.target);

                tabs.forEach(  tab => tab.classList.remove("tab-activo"));
                tabs[i].classList.add("tab-activo");

                panels.forEach( panel => panel.classList.remove("tab-activo"));
                panels[i].classList.add("tab-activo");
            }
        });   
}