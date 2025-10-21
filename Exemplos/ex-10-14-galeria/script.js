const destaque = document.querySelector(".destaque img");
const miniaturas = document.querySelectorAll(".miniaturas img");

miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", e => {

        let clicada = e.target; 

        if (clicada.classList.contains("ativa")){
            clicada.classList.remove("ativa");
        }else{
            miniaturas.forEach(m => m.classList.remove("ativa"));
            clicada.classList.add("ativa");
            destaque.src = clicada.src;
        }
         });
});


/**
 * e.target.classList.add("ativa");
 * destaque.src = e.target.src;
 */