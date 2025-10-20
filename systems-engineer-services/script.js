document.addEventListener('DOMContentLoaded', () => {
    
    const initialServices = [
        {
            name: "Diseño de Arquitectura de Sistemas",
            description: "Diseño de arquitecturas de sistemas robustas y escalables.",
            price: 1500,
            imageUrl: "images\representaciones-de-ui-y-ux-con-laptop.jpg"
        },
        {
            name: "Integración en la Nube",
            description: "Integración de servicios en la nube para un rendimiento mejorado.",
            price: 1200,
            imageUrl: "https://placehold.co/600x400/2980b9/ffffff?text=Cloud"
        },
        {
            name: "Auditoría de Seguridad de Red",
            description: "Evaluación y mejora de los protocolos de seguridad de la red.",
            price: 800,
            imageUrl: "https://placehold.co/600x400/c0392b/ffffff?text=Seguridad"
        },
        {
            name: "Gestión de Bases de Datos",
            description: "Administración y optimización de sistemas de bases de datos.",
            price: 900,
            imageUrl: "https://placehold.co/600x400/8e44ad/ffffff?text=DB"
        },
        {
            name: "Implementación de DevOps",
            description: "Implementación de prácticas DevOps para entrega continua.",
            price: 2000,
            imageUrl: "https://placehold.co/600x400/16a085/ffffff?text=DevOps"
        },
        {
            name: "Optimización de Rendimiento",
            description: "Optimización del rendimiento del sistema para una mejor eficiencia.",
            price: 700,
            imageUrl: "https://placehold.co/600x400/f1c40f/000000?text=Rendimiento"
        },
        {
            name: "Consultoría TI",
            description: "Provisión de servicios expertos de consultoría en TI.",
            price: 1100,
            imageUrl: "https://placehold.co/600x400/e67e22/ffffff?text=Consultoría"
        },
        {
            name: "Desarrollo de Software",
            description: "Desarrollo de soluciones de software a medida.",
            price: 1800,
            imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=Software"
        },
        {
            name: "Soporte Técnico",
            description: "Ofrecimiento de soporte técnico y resolución de problemas.",
            price: 500,
            imageUrl: "https://placehold.co/600x400/95a5a6/ffffff?text=Soporte"
        },
        {
            name: "Migración de Sistemas",
            description: "Migración de sistemas a nuevas plataformas sin interrupciones.",
            price: 1300,
            imageUrl: "https://placehold.co/600x400/2c3e50/ffffff?text=Migración"
        }
    ];


    let services = JSON.parse(localStorage.getItem('services'));

    if (!services || services.length === 0) {
        services = initialServices;
        localStorage.setItem('services', JSON.stringify(services));
    }

    const servicesContainer = document.getElementById('services-container');
    servicesContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar los elementos

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service-card');

        if (service.price > 1000) {
            serviceDiv.classList.add('premium');
        }

        const serviceImage = document.createElement('img');
        serviceImage.src = service.imageUrl;
        serviceImage.alt = service.name;

        const textContainer = document.createElement('div');
        textContainer.classList.add('service-text');

        const serviceName = document.createElement('h2');
        serviceName.textContent = service.name;

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;

        const servicePrice = document.createElement('p');
        servicePrice.classList.add('price');
        servicePrice.textContent = `$${Number(service.price).toLocaleString('en-US')}`;
        
        textContainer.appendChild(serviceName);
        textContainer.appendChild(serviceDescription);
        textContainer.appendChild(servicePrice);

        serviceDiv.appendChild(serviceImage);
        serviceDiv.appendChild(textContainer);
        
        servicesContainer.appendChild(serviceDiv);
    });
});