/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
const sr = ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left', delay: 400 });
sr.reveal('.home-content p, .about-content', { origin: 'right', delay: 600 });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Instructor', 'Full-stack developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== Language Toggler ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
             cert_utn_title: "Tecnicatura Universitaria en Programación",
        cert_utn_description: "Título académico de la Universidad Tecnológica Nacional (UTN), especializado en el diseño, desarrollo y mantenimiento de sistemas de software.",
        cert_utn_alt: "Certificado de la Tecnicatura Universitaria en Programación - UTN", // Texto ALT en Español
            page_title: "Portafolio Personal | Fabio Arias",
            nav_home: "Inicio",
            nav_about: "Acerca de Mí",
            nav_services: "Servicios",
            nav_portfolio: "Portafolio",
            nav_certifications: "Certificaciones",
            nav_recognitions: "Reconocimientos",
            nav_frameworks: "Frameworks & Tecnologías",
            nav_programming_languages: "Lenguajes de Programación",
            nav_contact: "Contacto",
            nav_lang_toggle: "English",
            nav_fusalabs: "Fusalabs",
            fusalabs_tagline: "Mi software factory: desarrollo de productos web a medida, e-commerce y soluciones con IA para empresas y emprendedores.",
            home_role_static: "Hola yo soy",
            home_name: "Fabio Arias",
            home_subtitle: "Yo soy",
            home_developer_role: "Desarrollador FullStack",
            home_description: "Manejo diferentes tecnologías, con alto nivel técnico.",
            download_cv: "Descargar CV",
            download_cv_es: "CV Español",
            download_cv_en: "CV English",
            about_heading: "Acerca de",
            about_heading_span: "Mí",
            about_role: "Desarrollador Full-Stack",
            about_description: "Desarrollador Full Stack con más de 5 años de experiencia en desarrollo de software, especializado en arquitecturas escalables, microservicios y tecnologías cloud. Experto en ecosistemas JavaScript/TypeScript (Node.js, React, Angular) y PHP (Laravel), con sólida experiencia en Python para IA/ML y microservicios. Tutor experimentado liderando más de 20 comisiones de estudiantes en programas intensivos de desarrollo web, combinando expertise técnico con habilidades pedagógicas excepcionales. Destacada participación en hackathons desarrollando soluciones innovadoras con IA (RAG, reconocimiento facial, LLMs) y servicios Azure. Tecnicatura Universitaria finalizada con TFI en sistema de gestión de capacitaciones. Capacidad demostrada para diseñar y desarrollar aplicaciones complejas desde cero en 24-48 horas bajo alta presión, trabajando efectivamente en equipos multidisciplinarios y entornos ágiles.",
            services_heading: "Nuestros",
            services_heading_span: "Servicios",
            service_frontend_title: "Frontend",
            service_frontend_description: "Uso Frameworks como Angular, Vue.js. Manejo diferentes motores de plantillas tales como Handlebars, Pugs, Ejs. Con JavaScript, manejo diferentes motores de plantillas con PHP como Livewire.",
            service_github_title: "GitHub",
            service_github_description: "Manejo del controlador de versiones como Git, GitHub, con sus diferentes tipos de comandos para cada rama.",
            service_backend_title: "Backend",
            service_backend_description: "Uso diferentes tecnologías para desarrollar arquitectura de alto nivel y rendimiento, sostenible con el tiempo. Manejo tecnologías para levantar servidores como: C, C++, Java, Node, Express, NestJS, PHP con Eloquent.",
            certifications_heading: "Mis",
            certifications_heading_span: "Certificaciones",
            cert_api_rest_title: "API desde cero con NodeJS y Express",
            cert_api_rest_description: "Certificado sobre la creación y gestión de APIs RESTful en el entorno de DonWeb.",
            cert_react_firebase_title: "Aprende React+Firebase",
            cert_react_firebase_description: "Certificado sobre el desarrollo de aplicaciones con React y el uso de Firebase para la base de datos.",
            cert_typescript_title: "Aprender Typescript de 0 a 100",
            cert_typescript_description: "Certificación en el uso de TypeScript, desde los fundamentos hasta la aplicación en proyectos de mayor escala.",
            cert_project_based_learning_title: "Aprendizaje basado en proyectos",
            cert_project_based_learning_description: "Certificado sobre la metodología de aprendizaje práctica a través de la realización de proyectos.",
            cert_time_management_title: "Capacitación Gestión del Tiempo",
            cert_time_management_description: "Certificado sobre técnicas y estrategias efectivas para la gestión del tiempo y la productividad.",
            cert_web_dev_teaching_title: "Cómo enseñar Desarrollo Web",
            cert_web_dev_teaching_description: "Certificado sobre metodologías para la enseñanza del desarrollo web.",
            cert_mern_stack_title: "Desarrollo fullstack de aplicaciones con stack MERN",
            cert_mern_stack_description: "Certificado de desarrollo web con el stack MERN en la plataforma DonWeb.",
            cert_microsoft_azure_title: "Microsoft Certified: Azure AI Engineer Associate",
            cert_microsoft_azure_description: "Certificación oficial de Microsoft que valida la capacidad de diseñar e implementar soluciones de IA con Azure AI Services, Machine Learning y procesamiento de lenguaje natural.",
            cert_azure_bootcamp_title: "Bootcamp Azure AI Engineer Associate",
            cert_azure_bootcamp_description: "Bootcamp intensivo de 12 semanas (+26 horas) de Código Facilito, enfocado en la preparación para la certificación Azure AI Engineer.",
            cert_fullstack_fundamentals_title: "Fundamentos del Desarrollo Web: Full Stack",
            cert_fullstack_fundamentals_description: "Certificado de LinkedIn Learning sobre los fundamentos del desarrollo web full stack y front-end.",
            cert_blockchain_title: "Fundamentos de la Tecnología Blockchain",
            cert_blockchain_description: "Certificado de LinkedIn Learning sobre los conceptos y fundamentos de la tecnología blockchain.",
            cert_fintech_title: "Fundamentos de Fintech (Finanzas Tecnológicas)",
            cert_fintech_description: "Certificado de LinkedIn Learning sobre los fundamentos de las finanzas tecnológicas y el ecosistema fintech.",
            cert_giving_classes_title: "El ABC de dar clases",
            cert_giving_classes_description: "Certificado sobre los fundamentos básicos para impartir clases y capacitaciones.",
            cert_ai_fundamentals_title: "Fundamentos de la Inteligencia Artificial",
            cert_ai_fundamentals_description: "Certificado sobre los conceptos fundamentales de programación y desarrollo de software.",
            cert_js_master_title: "Master en Javascript:ECMAScript, Angular +9, React, NodeJS",
            cert_js_master_description: "Certificación completa sobre desarrollo full-stack con JavaScript, cubriendo el frontend con Angular y el backend con Node.js.",
            cert_nest_backend_title: "Nest: Desarrollo Backend Con Node",
            cert_nest_backend_description: "Curso enfocado en el desarrollo de APIs robustas y escalables utilizando el framework NestJS con Node.js.",
            cert_nestjs_microservices_title: "NestJS: Microservicios con Nestjs, AWS, Docker Profesional",
            recognitions_heading: "Mis",
            recognitions_heading_span: "Reconocimientos",
            cert_nestjs_microservices_description: "Certificación sobre la arquitectura de microservicios con NestJS, integrando tecnologías como AWS y Docker para despliegues profesionales.",
            rec_coderhouse_title: "Agradecimiento de Coderhouse",
            rec_coderhouse_description: "Agradecimiento por evento Coder Buddies: Evento por el cual CoderHouse de tutores, donde ayudabamos a los nuevos ingresante de la empresa con su trabajo, para que no se estanquen y puedan seguir corrigiendo. Esto no era remunerado, lo haciamos AdHonerem",
            rec_staff_backstage_title: "Buenas practicas: tutorias, pedagogia y networking.",
            rec_staff_backstage_description: "Agradecimiento por participar en el evento colaborativo para Staff Academico.",
            rec_excellent_perf_title: "Reconocimiento por excelente desempeño",
            rec_excellent_perf_description: "Agradecimiento por parte de CoderHouse a mi trabajo por ser parte de la empresa, acompañarlos en la mision de decomocratizar la educacion brindando excepcionales clases con gran dedicacion y compromiso.",
            rec_education_month_title: "Reconocimiento al mes de la educacion",
            rec_education_month_description: "Agradecimiento por formar parte del cambio y acompañarlos en la mision de formar a los estudiantes La enseñanza es mas que impartir conocimiento, es inspirar el cambio",
            rec_new_role_title: "Felicitaciones y reconocimiento por tomar nuevo rol en la empresa",
            rec_new_role_description: "Celebrando el compromiso notable por este notable logro.",
            frameworks_heading_title: "Frameworks y Tecnologías",
            frameworks_heading_span: "Frameworks",
            html_title: "HTML",
            html_description: "Sólido conocimiento en la estructura y semántica de HTML5 para crear la base de cualquier sitio web.",
            css_title: "CSS",
            css_description: "Experiencia en el diseño y estilizado de interfaces de usuario modernas y responsivas con CSS3.",
            tailwind_title: "Tailwind CSS",
            tailwind_description: "Dominio del framework de CSS utilitario para un desarrollo rápido y eficiente de interfaces.",
            angular_title: "Angular",
            angular_description: "Experiencia en el desarrollo de aplicaciones de una sola página (SPA) con el framework de Google, utilizando componentes y servicios.",
            react_title: "React",
            react_description: "Habilidad en el desarrollo de interfaces de usuario con la librería de Facebook, incluyendo el uso de componentes, hooks y el ecosistema de React.",
            vue_title: "Vue",
            vue_description: "Conocimiento del framework progresivo Vue.js para la creación de interfaces de usuario de manera sencilla y eficiente.",
            composer_title: "Composer",
            composer_description: "Uso del gestor de dependencias de PHP para la correcta gestión de librerías y frameworks en proyectos.",
            laravel_title: "Laravel",
            laravel_description: "Manejo del framework de PHP para la creación de aplicaciones web sofisticadas con una sintaxis elegante y expresiva.",
            livewire_title: "Livewire",
            livewire_description: "Experiencia en el desarrollo full-stack con Laravel Livewire para construir interfaces dinámicas sin necesidad de escribir JavaScript.",
            handlebars_title: "Handlebars",
            handlebars_description: "Conocimiento del sistema de plantillas para generar HTML dinámico en el lado del servidor o del cliente de manera eficiente.",
            sockets_title: "Sockets",
            sockets_description: "Habilidad para implementar comunicación en tiempo real en aplicaciones web con tecnologías como WebSockets o Socket.IO.",
            express_title: "Express.js",
            express_description: "Dominio del framework de Node.js para la construcción de APIs RESTful y el desarrollo de aplicaciones backend.",
            nestjs_title: "NestJS",
            nestjs_description: "Habilidad en el framework progresivo de Node.js, utilizado para la creación de aplicaciones del lado del servidor escalables y eficientes.",
            postgresql_title: "PostgreSQL",
            postgresql_description: "Manejo de la base de datos relacional robusta y de código abierto para gestionar datos de aplicaciones complejas.",
            mongodb_title: "MongoDB",
            mongodb_description: "Experiencia con la base de datos NoSQL orientada a documentos, ideal para el desarrollo de aplicaciones modernas y flexibles.",
            email_services_title: "Servicios de Email",
            email_services_description: "Experiencia en la implementación de servicios para el envío de notificaciones por correo electrónico, como restablecimiento de contraseñas y verificaciones de cuenta.",
            languages_heading_title: "Lenguajes de",
            languages_heading_span: "Programación",
            c_title: "C",
            c_description: "Sólidos fundamentos en el lenguaje de programación C, incluyendo manejo de memoria, estructuras de datos y algoritmos.",
            c_plus_plus_title: "C++",
            c_plus_plus_description: "Manejo del lenguaje C++ para el desarrollo de sistemas de alto rendimiento, aplicando principios de programación orientada a objetos (POO).",
            javascript_title: "JavaScript",
            javascript_description: "Manejo avanzado del lenguaje para la creación de funcionalidades dinámicas, interactividad y manipulación del DOM.",
            typescript_title: "TypeScript",
            typescript_description: "Uso de TypeScript para escribir código más robusto y escalable, con tipado estático que mejora el desarrollo de proyectos complejos.",
            mysql_title: "MySQL",
            mysql_description: "Conocimiento en el uso de la base de datos relacional más popular para el almacenamiento y gestión de datos.",
            php_title: "PHP",
            php_description: "Dominio del lenguaje de scripting del lado del servidor, utilizado para el desarrollo web robusto y dinámico.",
            managers_heading: "Manejadores de",
            managers_heading_span: "Dependencias",
            npm_title: "NPM",
            npm_description: "Manejo del gestor de paquetes por defecto de Node.js, esencial para instalar y gestionar librerías en proyectos de JavaScript y TypeScript.",
            yarn_title: "YARN",
            yarn_description: "Uso de este gestor de paquetes rápido, seguro y confiable, compatible con el ecosistema de npm.",
            pnpm_title: "PNPM",
            pnpm_description: "Manejo del gestor de paquetes para Node.js, reconocido por su gran eficiencia en el uso del espacio de disco y su velocidad en la instalación.",
           
            project_mfcrm_title: "MF-CRM — Consultoría Jurídica",
            project_mfcrm_description: "Plataforma SPA de gestión integral y calculadora de liquidaciones laborales/ART para estudios jurídicos. Modelo SaaS freemium con cálculos automatizados.",
            project_fusalabs_title: "Fusalabs — Software Factory",
            project_fusalabs_description: "Empresa que fundé: desarrollo de productos web a medida, e-commerce y soluciones con IA para empresas y emprendedores.",
            project_citronela_title: "Citronela — E-commerce de botánica",
            project_citronela_description: "Tienda online de productos botánicos con catálogo, carrito, gestión de pedidos y pasarela de pago. Integración con WhatsApp Business API.",
            project_plumauy_title: "PlumaUy — Papelería artesanal",
            project_plumauy_description: "Plataforma e-commerce para una marca de papelería artesanal, con catálogo, carrito y checkout. Diseño responsive enfocado en marca y conversión.",
            project_tesloshop_frontend_title: "Aplicacion TesloShop Frontend",
            project_tesloshop_frontend_description: "Desarrollo de un e-commerce Frontend con Vite y Vanilla Js, Implementando WebSockets para la comunicacion en tiempo real. Demuestra habilidad en la creacion de interfaces dinamicas, integracion de APIs y manejo de estados",

            project_tesloshop_backend_title: "Aplicacion de TesloShop Backend",
            project_tesloshop_backend_description: "Construccion de un Backend RESTful API para un e-commerce. Utiliza tecnologias de vanguardia para garantizar  escalabilidad, seguridad y una gestion eficiente de datos de productos, usuarios y transacciones.",
project_microservices_title: "Aplicación con MicroServicios AWS/Docker",
        project_microservices_description: "Sistema distribuido de gestión aeroportuaria basado en microservicios con NestJS, RabbitMQ y Docker, bajo arquitectura hexagonal.",
            
project_superflight_tittle:"Aplicacion de SuperFlight",
            project_superflight_description: " API de reserva de vuelos desarrollada con  NestJS y MongoDB. Un proyecto que resalta el dominio  de un framework robusto, arquitectura modular y uso de bases de datos NoSQL para una gestion de datos flexible y eficiente.",

            project_workshop_mgmt_title: "Aplicacion Gestion de Talleres",
            project_workshop_mgmt_description: "API backend desarrollada en PHP para gestionar la operacion de talleres. Demuestra competencias en el desarrollo de APIs tradicionales y manejo de logica de negocio y gestion de bases de datos relacionales para CRUD completo",
            project_aacop_title: "Sistema de Gestión AACOP (UTN)",
            project_aacop_description: "Sistema de gestión integral desarrollado con Laravel 12, Livewire 3 y TailwindCSS. Incluye gestión de roles, asistencia, emisión automática de certificados y métricas en tiempo real.",
            
            project_neurodesk_title: "Microsoft AI: Proyecto NeuroDesk",
            project_neurodesk_description: "Sistema inmunológico organizacional impulsado por Azure AI. Arquitectura Backend Cloud-native, orquestación de agentes (GPT-4, Semantic Kernel) y RAG para automatización empresarial.",
            
            project_nexo_title: "Nexo Emprendedores (Hackathon)",
            project_nexo_description: "Ecosistema digital desarrollado en 24hs. Arquitectura de microservicios (Laravel + Python/FastAPI), autenticación biométrica y asistente IA con RAG.",


            curriculum_heading:"Mis",
            curriculum_heading_span: "Curriculums",
            curriculum_title_es: "Curriculum en Español",
            curriculum_description_es:"Curriculum en español para las personas que tienen diferentes maestrias en lenguas, especialimente enfocado en recursos humanos, para superar diferentes tecnicas en el oficio de la tecnologia.",
            curriculum_title_en:"Curriculum en Ingles",
            curriculum_description_en: "Curriculum en ingles para las personas que tienen diferentes maestrias en lenguas, especialmente enfocado en recursos humanos, para superar diferentes tecnicas en el oficio de la tecnologia.",
           
            contact_heading:"Contacta",
            contact_heading_span: "Conmigo",
            contact_full_name_placeholder: "Nombre Completo",
            contact_email_placeholder: "Direccion de Correo Electronico",
            contact_mobile_placeholder: "Numero de Telefono",
            contact_message_placeholder: "Tu Mensaje",
            contact_submit_btn: "Enviar Mensaje"


        },
        en: {
            cert_utn_title: "University Degree in Programming",
            cert_utn_description: "Academic degree from the National Technological University (UTN), specialized in the design, development, and maintenance of software systems.",
            cert_utn_alt: "UTN University Programming Degree Certificate", // Texto ALT en Inglés
            page_title: "Personal Portfolio | Fabio Arias",
            nav_home: "Home",
            nav_about: "About",
            nav_services: "Services",
            nav_portfolio: "Portfolio",
            nav_certifications: "Certifications",
            nav_recognitions: "Recognitions",
            nav_frameworks: "Frameworks & Technologies",
            nav_programming_languages: "Programming Languages",
            nav_contact: "Contact",
            nav_lang_toggle: "Español",
            nav_fusalabs: "Fusalabs",
            fusalabs_tagline: "My software factory: custom web product development, e-commerce, and AI solutions for businesses and entrepreneurs.",
            home_greeting: "Hello, I'm",
            home_name: "Fabio Arias",
            home_role_static: "I'm a",
            home_developer_role: "FullStack Developer",
            home_description: "I have a high technical level in various technologies.",
            download_cv: "Download CV",
            download_cv_es: "Spanish CV",
            download_cv_en: "English CV",

            about_heading: "About",
            about_heading_span: "Me",
            about_role: "Full-Stack Developer",
            about_description: "Full Stack Developer with 5+ years of experience in software development, specializing in scalable architectures, microservices, and cloud technologies. Expert in JavaScript/TypeScript (Node.js, React, Angular) and PHP (Laravel) ecosystems, with solid experience in Python for AI/ML and microservices. Experienced Lead Tutor for over 20 student cohorts in intensive web development programs, blending technical expertise with exceptional pedagogical skills. Notable hackathon participant developing innovative AI solutions (RAG, facial recognition, LLMs) and Azure services. University Associate Degree graduate with a final project in training management systems. Proven ability to design and develop complex applications from scratch within 24-48 hours under high pressure, working effectively in multidisciplinary teams and agile environments.",            services_heading: "My",
            services_heading_span: "Services",
            service_frontend_title: "Frontend",
            service_frontend_description: "I use Frameworks like Angular, Vue.js. I handle different template engines such as Handlebars, Pugs, Ejs. With JavaScript, I handle different template engines with PHP like Livewire.",
            service_github_title: "GitHub",
            service_github_description: "Management of version controllers such as Git, GitHub, with their different types of commands for each branch.",
            service_backend_title: "Backend",
            service_backend_description: "I use different technologies to develop high-level and sustainable architecture over time. I handle technologies to set up servers such as: C, C++, Java, Node, Express, NestJS, PHP with Eloquent.",
            certifications_heading: "My",
            certifications_heading_span: "Certifications",
            cert_api_rest_title: "API from scratch with NodeJS and Express",
            cert_api_rest_description: "Certificate on the creation and management of RESTful APIs in the DonWeb environment.",
            cert_react_firebase_title: "Learn React+Firebase",
            cert_react_firebase_description: "Certificate on the development of applications with React and the use of Firebase for the database.",
            cert_typescript_title: "Learn Typescript from 0 to 100",
            cert_typescript_description: "Certification in the use of TypeScript, from the fundamentals to its application in larger scale projects.",
            cert_project_based_learning_title: "Project-based learning",
            cert_project_based_learning_description: "Certificate on the practical learning methodology through project completion.",
            cert_time_management_title: "Time Management Training",
            cert_time_management_description: "Certificate on effective techniques and strategies for time management and productivity.",
            cert_web_dev_teaching_title: "How to teach Web Development",
            cert_web_dev_teaching_description: "Certificate on methodologies for teaching web development.",
            cert_mern_stack_title: "Fullstack development of applications with MERN stack",
            cert_mern_stack_description: "Web development certificate with the MERN stack on the DonWeb platform.",
            cert_microsoft_azure_title: "Microsoft Certified: Azure AI Engineer Associate",
            cert_microsoft_azure_description: "Official Microsoft certification validating the ability to design and implement AI solutions using Azure AI Services, Machine Learning and natural language processing.",
            cert_azure_bootcamp_title: "Azure AI Engineer Associate Bootcamp",
            cert_azure_bootcamp_description: "Intensive 12-week (26+ hours) bootcamp by Código Facilito, focused on preparing for the Azure AI Engineer certification.",
            cert_fullstack_fundamentals_title: "Web Development Fundamentals: Full Stack",
            cert_fullstack_fundamentals_description: "LinkedIn Learning certificate on the fundamentals of full stack and front-end web development.",
            cert_blockchain_title: "Blockchain Technology Fundamentals",
            cert_blockchain_description: "LinkedIn Learning certificate on the concepts and fundamentals of blockchain technology.",
            cert_fintech_title: "Fintech (Financial Technology) Fundamentals",
            cert_fintech_description: "LinkedIn Learning certificate on the fundamentals of financial technology and the fintech ecosystem.",
            cert_giving_classes_title: "The ABC of teaching classes",
            cert_giving_classes_description: "Certificate on the basic fundamentals for teaching classes and training.",
            cert_ai_fundamentals_title: "Fundamentals of Artificial Intelligence",
            cert_ai_fundamentals_description: "Certificate on the fundamental concepts of programming and software development.",
            cert_js_master_title: "Master in Javascript:ECMAScript, Angular +9, React, NodeJS",
            cert_js_master_description: "Full certification on full-stack development with JavaScript, covering frontend with Angular and backend with Node.js.",
            cert_nest_backend_title: "Nest: Backend Development with Node",
            cert_nest_backend_description: "Course focused on the development of robust and scalable APIs using the NestJS framework with Node.js.",
            cert_nestjs_microservices_title: "NestJS: Microservices with Nestjs, AWS, Docker Professional",
            cert_nestjs_microservices_description: "Certification on the microservices architecture with NestJS, integrating technologies like AWS and Docker for professional deployments.",
            recognitions_heading: "My",
            recognitions_heading_span: "Recognitions",
            rec_coderhouse_title: "Coderhouse Acknowledgement",
            rec_coderhouse_description: "Acknowledgement for the Coder Buddies event: An event where CoderHouse tutors helped new company entrants with their work so they could continue correcting and not get stuck. This was unpaid, we did it AdHonerem",
            rec_staff_backstage_title: "Good practices: tutoring, pedagogy and networking.",
            rec_staff_backstage_description: "Acknowledgement for participating in the collaborative event for Academic Staff.",
            rec_excellent_perf_title: "Acknowledgement for excellent performance",
            rec_excellent_perf_description: "Acknowledgement from CoderHouse for my work as part of the company, accompanying them in the mission of democratizing education by providing exceptional classes with great dedication and commitment.",
            rec_education_month_title: "Acknowledgement for the month of education",
            rec_education_month_description: "Acknowledgement for being part of the change and accompanying them in the mission of training students. Teaching is more than imparting knowledge, it is inspiring change.",
            rec_new_role_title: "Congratulations and recognition for taking on a new role in the company",
            rec_new_role_description: "Celebrating the notable commitment for this remarkable achievement.",
            frameworks_heading_title: "Frameworks & Technologies",
            frameworks_heading_span: "Frameworks",
            html_title: "HTML",
            html_description: "Solid knowledge of the structure and semantics of HTML5 to create the foundation of any website.",
            css_title: "CSS",
            css_description: "Experience in designing and styling modern and responsive user interfaces with CSS3.",
            tailwind_title: "Tailwind CSS",
            tailwind_description: "Mastery of the utility-first CSS framework for fast and efficient interface development.",
            angular_title: "Angular",
            angular_description: "Experience in developing Single Page Applications (SPAs) with the Google framework, using components and services.",
            react_title: "React",
            react_description: "Skill in developing user interfaces with the Facebook library, including the use of components, hooks, and the React ecosystem.",
            vue_title: "Vue",
            vue_description: "Knowledge of the progressive framework Vue.js for creating user interfaces in a simple and efficient way.",
            composer_title: "Composer",
            composer_description: "Use of the PHP dependency manager for the correct management of libraries and frameworks in projects.",
            laravel_title: "Laravel",
            laravel_description: "Handling of the PHP framework for creating sophisticated web applications with an elegant and expressive syntax.",
            livewire_title: "Livewire",
            livewire_description: "Experience in full-stack development with Laravel Livewire to build dynamic interfaces without the need to write JavaScript.",
            handlebars_title: "Handlebars",
            handlebars_description: "Knowledge of the template system to generate dynamic HTML on the server or client side efficiently.",
            sockets_title: "Sockets",
            sockets_description: "Ability to implement real-time communication in web applications with technologies like WebSockets or Socket.IO.",
            express_title: "Express.js",
            express_description: "Mastery of the Node.js framework for building RESTful APIs and backend application development.",
            nestjs_title: "NestJS",
            nestjs_description: "Skill in the progressive Node.js framework, used for creating scalable and efficient server-side applications.",
            postgresql_title: "PostgreSQL",
            postgresql_description: "Handling of the robust, open-source relational database to manage complex application data.",
            mongodb_title: "MongoDB",
            mongodb_description: "Experience with the document-oriented NoSQL database, ideal for developing modern and flexible applications.",
            email_services_title: "Email Services",
            email_services_description: "Experience in implementing services for sending email notifications, such as password resets and account verifications.",
            languages_heading_title: "Programming",
            languages_heading_span: "Languages",
            c_title: "C",
            c_description: "Solid fundamentals in the C programming language, including memory management, data structures, and algorithms.",
            c_plus_plus_title: "C++",
            c_plus_plus_description: "Handling of the C++ language for the development of high-performance systems, applying object-oriented programming (OOP) principles.",
            javascript_title: "JavaScript",
            javascript_description: "Advanced handling of the language for creating dynamic functionalities, interactivity, and DOM manipulation.",
            typescript_title: "TypeScript",
            typescript_description: "Use of TypeScript to write more robust and scalable code, with static typing that improves the development of complex projects.",
            mysql_title: "MySQL",
            mysql_description: "Knowledge in the use of the most popular relational database for data storage and management.",
            php_title: "PHP",
            php_description: "Mastery of the server-side scripting language, used for robust and dynamic web development.",
            managers_heading: "Dependency",
            managers_heading_span: "Managers",
            npm_title: "NPM",
            npm_description: "Handling of the default package manager for Node.js, essential for installing and managing libraries in JavaScript and TypeScript projects.",
            yarn_title: "YARN",
            yarn_description: "Use of this fast, secure, and reliable package manager, compatible with the npm ecosystem.",
            pnpm_title: "PNPM",
            pnpm_description: "Handling of the package manager for Node.js, recognized for its great efficiency in disk space usage and its installation speed.",
            
            portfolio_heading: "The Last",
            portfolio_heading_span:"Projects",
            project_mfcrm_title: "MF-CRM — Legal Consultancy",
            project_mfcrm_description: "Full management SPA and labor severance/occupational-risk (ART) calculator for law firms. Freemium SaaS model with automated calculations.",
            project_fusalabs_title: "Fusalabs — Software Factory",
            project_fusalabs_description: "The company I founded: custom web product development, e-commerce, and AI solutions for businesses and entrepreneurs.",
            project_citronela_title: "Citronela — Botanical e-commerce",
            project_citronela_description: "Online store for botanical products with catalog, cart, order management, and payment gateway. WhatsApp Business API integration.",
            project_plumauy_title: "PlumaUy — Artisanal stationery",
            project_plumauy_description: "E-commerce platform for an artisanal stationery brand, with catalog, cart, and checkout. Responsive, brand-focused, conversion-oriented design.",
            project_tesloshop_frontend_title: "TesloShop Frontend Application",
        project_tesloshop_frontend_description: "Development of an e-commerce Frontend with Vite and Vanilla JS, implementing WebSockets for real-time communication. This project showcases skills in building dynamic interfaces, API integration, and state management.",
        
        project_tesloshop_backend_title: "TesloShop Backend Application",
        project_tesloshop_backend_description: "Construction of a RESTful Backend API for an e-commerce platform. It leverages cutting-edge technologies to ensure scalability, security, and efficient management of product, user, and transaction data.",
        
        project_superflight_title: "SuperFlight Application",
        project_superflight_description: "Flight booking API developed with NestJS and MongoDB. This project highlights proficiency in a robust framework, modular architecture, and the use of NoSQL databases for flexible and efficient data management.",
        
project_microservices_title: "Flight Airport Management Microservices System",        project_microservices_description: "Deployment of a microservices architecture using Docker for containerization and AWS for cloud management. This project validates expertise in DevOps, scalability, and deployment in production environments.",
        project_microservices_description: "Distributed airport management system based on microservices with NestJS, RabbitMQ, and Docker, built under hexagonal architecture.",
        project_workshop_mgmt_title: "Workshop Management Application",
        project_workshop_mgmt_description: "Backend API developed in PHP to manage workshop operations. This demonstrates competence in traditional API development, business logic handling, and relational database management for full CRUD functionality.",

            project_aacop_title: "AACOP Management System (UTN)",
            project_aacop_description: "Comprehensive management system built with Laravel 12, Livewire 3, and TailwindCSS. Features role management, attendance tracking, automatic certificate issuance, and real-time metrics.",
            
            project_neurodesk_title: "Microsoft AI: NeuroDesk Project",
            project_neurodesk_description: "Organizational immune system powered by Azure AI. Cloud-native Backend architecture, agent orchestration (GPT-4, Semantic Kernel), and RAG for enterprise automation.",
            
            project_nexo_title: "Nexo Entrepreneurs (Hackathon)",
            project_nexo_description: "Digital ecosystem developed in 24hs. Microservices architecture (Laravel + Python/FastAPI), biometric authentication, and AI assistant with RAG.",


            curriculum_heading:"My",
            curriculum_heading_span: "Curriculums",
            curriculum_title_es: "Spanish Resume",
            curriculum_description_es: " Resume is Spanish for people with different language master's deegrees, especially focsued on human resources, to overcome different techiniques in the technology field",
            curriculum_title_en:"English Resumen",
            curriculum_description_en:"Resume in English for people with different language master's degrees, especially focused on human resources, to overcome different techniques in technology field",


            contact_heading:"Contact",
            contact_heading_span: "Me",
            contact_full_name_placeholder: "Full Name",
            contact_email_placeholder:"Email Address",
            contact_mobile_placeholder: "Mobile Number",
            contact_subject_placeholder: "Email Subject",
            contact_message_placeholder: "Your Messages",
            contact_submit_btn: "Send Message"
            
        }
    };

    const languageToggleBtn = document.getElementById('language-toggle-btn');
    const allElementsWithLangKey = document.querySelectorAll('[data-lang-key]');

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        allElementsWithLangKey.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            const translation = translations[lang][key];

            if (!translation) return;

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.id === 'language-toggle-btn') {
                element.textContent = translation;
            } else {
                // Handle parent elements with a span inside
                const spanElement = element.querySelector('span[data-lang-key]');
                if (spanElement) {
                    const spanKey = spanElement.getAttribute('data-lang-key');
                    const spanTranslation = translations[lang][spanKey];
                    element.innerHTML = `${translation} <span data-lang-key="${spanKey}">${spanTranslation}</span>`;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    // This is the code for the language toggle button
    languageToggleBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const currentLang = document.documentElement.lang || 'es';
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });

    // Set the initial language on page load
    const initialLang = document.documentElement.lang || 'es';
    setLanguage(initialLang);
});
/*==================== Lógica del Carrusel de Certificaciones ====================*/
const sliderTrack = document.getElementById('sliderTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (sliderTrack && nextBtn && prevBtn) {
    const getScrollStep = () => {
        // Calcula el ancho de una card + el gap
        const card = sliderTrack.querySelector('.cert-card');
        return card.offsetWidth + 25; // 25 es el gap definido en el CSS
    };

    nextBtn.addEventListener('click', () => {
        sliderTrack.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        sliderTrack.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });

    // Autoplay (Opcional - cada 5 segundos)
    let isPaused = false;
    sliderTrack.addEventListener('mouseenter', () => isPaused = true);
    sliderTrack.addEventListener('mouseleave', () => isPaused = false);

    setInterval(() => {
        if (!isPaused) {
            // Si llega al final, vuelve al principio
            if (sliderTrack.scrollLeft + sliderTrack.offsetWidth >= sliderTrack.scrollWidth - 10) {
                sliderTrack.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                sliderTrack.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
            }
        }
    }, 5000);
}

/*==================== Carrusel Frameworks & Tech ====================*/
const techSlider = document.getElementById('techSlider');
const nextTech = document.getElementById('nextTech');
const prevTech = document.getElementById('prevTech');

if (techSlider && nextTech && prevTech) {
    nextTech.addEventListener('click', () => {
        // Desplaza el ancho de una tarjeta + el gap
        const scrollStep = techSlider.querySelector('.tech-card').offsetWidth + 20;
        techSlider.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });

    prevTech.addEventListener('click', () => {
        const scrollStep = techSlider.querySelector('.tech-card').offsetWidth + 20;
        techSlider.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });
}
/*==================== Carrusel Reconocimientos ====================*/
const recSlider = document.getElementById('recSlider');
const nextRec = document.getElementById('nextRec');
const prevRec = document.getElementById('prevRec');

if (recSlider && nextRec && prevRec) {
    const moveRec = (direction) => {
        // Obtenemos el ancho de la primera tarjeta para saber cuánto mover
        const cardWidth = recSlider.querySelector('.cert-card').offsetWidth + 25;
        if (direction === 'next') {
            recSlider.scrollBy({ left: cardWidth, behavior: 'smooth' });
        } else {
            recSlider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
    };

    nextRec.addEventListener('click', () => moveRec('next'));
    prevRec.addEventListener('click', () => moveRec('prev'));
}/*==================== LIGHTBOX LOGIC (Galería Completa con Navegación) ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    const modalImg = modal.querySelector('.lightbox-image');
    const modalCaption = modal.querySelector('.lightbox-caption');
    const closeBtn = modal.querySelector('.lightbox-close');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    // 1. RECOLECTAR TODAS LAS IMÁGENES DE LA GALERÍA
    // El orden en que aparecen aquí será el orden de navegación
    const selectors = [
        '.portfolio-box img',    // Portafolio
        '.cert-card img',        // Certificados
        '.services-box img',     // Servicios/Varios
        '.certification-img',    // Imágenes extra de certs
        '.cv-slide',             // Curriculum
        '.about-img img'         // Foto perfil (opcional)
    ];

    // Convertimos NodeList a Array para poder manejar índices fácilmente
    let galleryImages = Array.from(document.querySelectorAll(selectors.join(', ')));
    let currentIndex = 0;

    // --- FUNCIONES CORE ---

    // Actualizar la imagen del modal según el índice actual
    const updateLightboxImage = () => {
        const img = galleryImages[currentIndex];
        
        // Animación de entrada suave (fade)
        modalImg.style.opacity = 0;
        
        setTimeout(() => {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalCaption.textContent = img.alt || '';
            modalImg.style.objectFit = 'contain'; 
            modalImg.style.opacity = 1; // Restaurar opacidad
        }, 200);
    };

    // Función para abrir el modal en un índice específico
    const openModal = (index) => {
        currentIndex = index;
        modal.classList.add('active');
        document.body.classList.add('no-scroll');
        modal.setAttribute('aria-hidden', 'false');
        updateLightboxImage();
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
        modal.setAttribute('aria-hidden', 'true');
        setTimeout(() => {
            modalImg.src = ''; 
        }, 300);
    };

    // Navegación: Siguiente imagen
    const showNext = (e) => {
        if(e) e.stopPropagation();
        currentIndex++;
        // Si llegamos al final, volvemos al principio (Loop infinito)
        if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        }
        updateLightboxImage();
    };

    // Navegación: Imagen anterior
    const showPrev = (e) => {
        if(e) e.stopPropagation();
        currentIndex--;
        // Si estamos en el principio, vamos al final
        if (currentIndex < 0) {
            currentIndex = galleryImages.length - 1;
        }
        updateLightboxImage();
    };

    // --- EVENT LISTENERS PARA LAS IMÁGENES (Clic inteligente) ---
    
    let startX = 0;
    let startY = 0;

    // Detectar clic real vs arrastre del carrusel (evita abrir al deslizar)
    galleryImages.forEach((img, index) => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            startY = e.clientY;
        });
        img.addEventListener('mouseup', (e) => {
            const movedX = Math.abs(e.clientX - startX);
            const movedY = Math.abs(e.clientY - startY);
            if (movedX < 10 && movedY < 10) {
                openModal(index);
            }
        });
        img.addEventListener('touchstart', (e) => {
            startX = e.changedTouches[0].clientX;
            startY = e.changedTouches[0].clientY;
        }, { passive: true });
        img.addEventListener('touchend', (e) => {
            const movedX = Math.abs(e.changedTouches[0].clientX - startX);
            const movedY = Math.abs(e.changedTouches[0].clientY - startY);
            if (movedX < 10 && movedY < 10) {
                openModal(index);
            }
        });
    });

    // --- BOTONES DE NAVEGACIÓN ---
    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    // --- CERRAR ---
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Clic en el overlay (fuera de la imagen) cierra el modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('lightbox-content')) {
            closeModal();
        }
    });

    // --- TECLADO: ESC cierra, flechas navegan ---
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeModal();
        else if (e.key === 'ArrowRight') showNext();
        else if (e.key === 'ArrowLeft') showPrev();
    });

    // --- SWIPE en el modal (móvil) para navegar ---
    modalImg.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].clientX;
    }, { passive: true });
    modalImg.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].clientX - startX;
        if (diff < -50) showNext();
        else if (diff > 50) showPrev();
    });
});
