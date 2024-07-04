// Código JavaScript para el formulario de contacto y la navegación
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    // Aquí podrías implementar el envío del formulario o alguna acción adicional, como mostrar un mensaje de confirmación
    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
    alert('¡Mensaje enviado con éxito!');
    document.getElementById('contactForm').reset();
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
