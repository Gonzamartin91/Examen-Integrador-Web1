const tarjetas = document.querySelectorAll(".tarjeta-mini");

tarjetas.forEach(function(tarjeta){
    tarjeta.addEventListener("click", function(){
       location.href = 'contacto.html';
    });
});