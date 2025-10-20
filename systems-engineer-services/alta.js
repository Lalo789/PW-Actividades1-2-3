document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('service-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        clearErrors();

        const name = document.getElementById('name').value.trim();
        const description = document.getElementById('description').value.trim();
        const price = document.getElementById('price').value.trim();
        const imageUrl = document.getElementById('imageUrl').value.trim();

        let isValid = true;

        // --- Validaciones ---
        if (name === '') {
            showError('name-error', 'El nombre es obligatorio.');
            isValid = false;
        }
        if (description === '') {
            showError('description-error', 'La descripción es obligatoria.');
            isValid = false;
        }
        if (price === '' || parseFloat(price) <= 0) {
            showError('price-error', 'El precio debe ser un número positivo.');
            isValid = false;
        }
        if (imageUrl === '') {
            showError('imageUrl-error', 'La URL de la imagen es obligatoria.');
            isValid = false;
        } else if (!isValidUrl(imageUrl)) {
            showError('imageUrl-error', 'Por favor, introduce una URL válida.');
            isValid = false;
        }

        if (isValid) {
            // Obtener servicios existentes de localStorage o inicializar un array vacío
            const services = JSON.parse(localStorage.getItem('services')) || [];

            // Crear el nuevo objeto de servicio
            const newService = {
                name: name,
                description: description,
                price: parseFloat(price),
                imageUrl: imageUrl
            };

            // Agregar el nuevo servicio al array
            services.push(newService);

            // Guardar el array actualizado en localStorage
            localStorage.setItem('services', JSON.stringify(services));

            // Redirigir a la página principal
            window.location.href = 'index.html';
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(span => span.textContent = '');
    }

    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
});