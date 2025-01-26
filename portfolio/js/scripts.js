const sections = document.querySelectorAll('.fondos');
const dots = document.querySelectorAll('.circulitos .circulito');
const btn_menu = document.getElementById('menu');
const cerrar= document.getElementById('cerrar');
const presentacion=document.getElementById('cont_presen');
const presen=document.querySelector('.presentacion');
const listas_a=document.querySelectorAll('li a');
const logo=document.getElementById('atc');
const icono_menu=document.getElementById('rallitas')
const x_cerrar=document.getElementById('x_cerrar')
const parrafo_descripcion= document.getElementById('descripciones')
const titulito=document.querySelectorAll('.descripciones')
const saber_mas=document.getElementById('mas_info')
const c_timeline=document.querySelectorAll('.conter_timeline')
const titulosm=document.getElementById('sobre_mi')
const proyectos=document.getElementById('proyectos')
let array_descripcion=['Hola, mi nombre es Ángel. Soy estudiante del grado en Desarrollo de Aplicaciones Web y estoy motivado por la oportunidad de poner en práctica mis conocimientos y crecer profesionalmente. ','Soy de Granada, tengo 19 años y llevo tres años formándome en programación, adquiriendo conocimientos en diversas tecnologías y enfoques del desarrollo digital.','Me considero una persona responsable, trabajadora, creativa y extrovertida, con habilidad para el trabajo en equipo y compromiso con el logro de objetivos.','En mi tiempo libre disfruto practicar deporte, leer, compartir momentos con amigos y familiares, y continuar formándome en el ámbito de la programación.']
let array_titulo=['¿Quién soy?','Más de mi','¿Como me defino como trabajador?','¿Cuales son mis aficiones?']
let i=0


window.addEventListener('scroll', () => {
    const posicion  = proyectos.getBoundingClientRect()
    if (posicion.top >= 0 && posicion.bottom <= window.innerHeight) {
        proyectos.style.animationPlayState = 'running';
    }
});


window.addEventListener('scroll', () => {
    let current = '';
    // Verifica si el desplazamiento actual (scrollY) corresponde a una sección visible
    sections.forEach(section => {

        //offsetTop nos da la posición de la parte superior de cada sección con respecto al borde superior de la página.
        const sectionTop = section.offsetTop;
        //clientHeight nos da la altura de la sección (normalmente 100% de la altura de la ventana porque hemos definido
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 5) {
            current = section.getAttribute('id');
        }
        if(current=='segundo' || current=='tercero'){
            logo.classList.add('color_negro')
            icono_menu.classList.add('fill_negro')
            x_cerrar.classList.add('fill_negro')
            listas_a.forEach(lista => {
                lista.classList.add('color_negro');
            });
        }else{
            logo.classList.remove('color_negro')
            icono_menu.classList.remove('fill_negro')
            x_cerrar.classList.remove('fill_negro')
            listas_a.forEach(lista => {
                lista.classList.remove('color_negro');
            });
        }
    })
    // Quita la clase active de todos los puntos y agrega la clase active al punto que corresponde a la sección visible.
    dots.forEach(dot => {
        dot.classList.remove('activo');
        if (dot.getAttribute('data-section') === current) {
            dot.classList.add('activo');
        }
    });
});
btn_menu.addEventListener('click', (event) => {
    event.preventDefault();
    let menu = document.querySelector('.container_menu');
    let opacidad = menu.style.opacity;
    if(opacidad == 0){
        setTimeout(() => {         
            menu.style.transform = 'translateX(0)';
            menu.style.opacity = 1;
            menu.style.visibility = 'visible';
        }, 100);
        menu.style.display = 'flex'


    }else{
        menu.style.opacity = 0;
        menu.style.visibility = 'hidden';
    }
}
);
cerrar.addEventListener('click', (event) => {
    event.preventDefault();
    let menu = document.querySelector('.container_menu');
    menu.style.transform = 'translateX(100%)';
    menu.style.opacity = 0;
    menu.style.visibility = 'hidden';
            setTimeout(() => {    menu.style.display = 'none';}, 200);
}
);

window.addEventListener('scroll', () => {
    const posicion  = presen.getBoundingClientRect()
    if (posicion.top >= 0 && posicion.bottom <= window.innerHeight)
        titulito[0].innerText=array_titulo[0]
        parrafo_descripcion.innerText=array_descripcion[0]
        presen.style.animationPlayState = 'running';
})

window.addEventListener('scroll', () => {

    const posicion  = titulosm.getBoundingClientRect()
    if (posicion.top >= 0 && posicion.bottom <= window.innerHeight)
            titulosm.style.animationPlayState = 'running';
});



saber_mas.addEventListener('click', () => {
    i++;
    if (i > 3) {
        i = 0;
    }
    parrafo_descripcion.style.transition = 'opacity 1s';
    titulito[0].style.transition = 'opacity 1s';
    parrafo_descripcion.style.opacity = 0;
    titulito[0].style.opacity = 0;
    
    setTimeout(() => {
        parrafo_descripcion.innerText = array_descripcion[i];
        titulito[0].innerText = array_titulo[i];
        parrafo_descripcion.style.opacity = 1;
        titulito[0].style.opacity = 1;
    }, 1000);
});
