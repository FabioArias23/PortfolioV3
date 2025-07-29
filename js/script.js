/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}




/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => { // Corrected from ForEach to forEach and added 'sec' parameter
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });


    
};

/*==================== sticky navbar ====================*/


let header =  document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);




/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


/*==================== scroll reveal ===================*/

/*==================== scroll reveal ====================*/

// 1. Crear una configuración base en una variable
const sr = ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// 2. Aplicar la configuración base a los primeros elementos
sr.reveal('.home-content, .heading', { origin: 'top' });

// 3. Agregar más animaciones con configuraciones específicas si es necesario
// Por ejemplo, para elementos que vienen desde la izquierda
sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// O elementos con un delay diferente
sr.reveal('.home-content h1, .about-img', { origin: 'left', delay: 400 });
// Y elementos con un delay más largo
sr.reveal('.home-content p, .about-content', { origin: 'right', delay: 600 });


/*==================== typed js ====================*/

const typed = new Typed('.multiple-text',{

    strings:['Frontend Developer', 'Backend Developer','Instructor', 'Development'],
    typeSpeed:100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true



})

