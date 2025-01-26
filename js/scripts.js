document.addEventListener('DOMContentLoaded', function() {
  // Selecciona el formulario
  const formulario = document.getElementById('formulario-contacto');

  // Agrega un evento para manejar el envío
  formulario.addEventListener('submit', function(event) {
      // Evita que el formulario se envíe (comportamiento por defecto)
      event.preventDefault();

      // Muestra el mensaje de agradecimiento
      alert('Gracias por vuestro mensaje. ¡Nos pondremos en contacto pronto!');

      // Opcional: puedes reiniciar el formulario si es necesario
      formulario.reset();
  });
});


function tocar1(){
  let btnvar1= document.getElementById('btnh1')
  if(btnvar1.style.fill=='red'){
    btnvar1.style.fill='gray'; 
  }else{
    btnvar1.style.fill='red';
    }
}
function tocar2(){
  let btnvar2= document.getElementById('btnh2')
  if(btnvar2.style.fill=='red'){
    btnvar2.style.fill='gray'; 
  }else{
    btnvar2.style.fill='red'
    }
}

function tocar3(){
  const btnvar3= document.getElementById('btnh3')
  if(btnvar3.style.fill=='red'){
    btnvar3.style.fill='gray'; 
  }else{
    btnvar3.style.fill='red'
    }
}
