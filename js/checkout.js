document
  .getElementById("buy-course-btn")
  .addEventListener("click", function () {
    const course = {
      name: "Curso de Mindfulness",
      price: 50,
    };

    // Muestra una confirmación antes de redirigir
    if (
      confirm(
        `¿Deseas comprar el curso "${course.name}" por $${course.price} USD?`
      )
    ) {
      localStorage.setItem("course", JSON.stringify(course));
      window.location.href = "./metodospago.html";
    }
  });

// Recupera el curso del carrito (almacenamiento local)
const course = JSON.parse(localStorage.getItem("course"));
const courseSummary = document.getElementById("course-summary");

// Muestra el curso en el resumen
if (course) {
  courseSummary.innerHTML = `
        <h2>Resumen de compra</h2>
        <p>Curso: ${course.name}</p>
        <p>Precio: $${course.price} USD</p>
    `;
} else {
  courseSummary.innerHTML = `<p>No hay cursos en el carrito.</p>`;
}

// Maneja el envío del formulario
document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Simula el procesamiento del pago
    alert(
      "Gracias por tu compra. Recibirás un correo con los detalles del curso."
    );

    // Borra el carrito después del pago
    localStorage.removeItem("course");

    // Redirige a una página de confirmación
    window.location.href = "./thankyou.html";
  });

document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Redirige a la página de métodos de pago
    window.location.href = "./metodospago.html";
  });

document.addEventListener("DOMContentLoaded", () => {
  const methods = document.querySelectorAll(".method");

  methods.forEach((method) => {
    method.addEventListener("click", () => {
      // Deselecciona todos los métodos
      methods.forEach((m) => m.classList.remove("selected"));

      // Selecciona el método clicado
      method.classList.add("selected");

      // Obtén el método seleccionado (opcional)
      const selectedMethod = method.getAttribute("data-method");
      console.log(`Método de pago seleccionado: ${selectedMethod}`);
    });
  });
});

const mercadopago = require("mercadopago");

// Configura tu token de acceso
mercadopago.configure({
  access_token: "TU_ACCESS_TOKEN",
});

// Crear preferencia
const preference = {
  items: [
    {
      title: "Curso",
      unit_price: 50, // Precio del curso
      quantity: 1,
    },
  ],
};

// Generar preferencia
mercadopago.preferences
  .create(preference)
  .then((response) => {
    console.log(response.body.id); // Aquí obtienes TU_PREFERENCE_ID
  })
  .catch((error) => {
    console.error(error);
  });

/* Comentarios */

document.addEventListener("DOMContentLoaded", function() {
  console.log("JS cargado correctamente"); // Para verificar si el script se ejecuta

  const comentariosContainer = document.querySelector(".comentarios");
  if (!comentariosContainer) {
      console.error("No se encontró la sección de comentarios.");
      return; // Evita que el script falle si la sección no existe
  }

  const comentarios = document.querySelectorAll(".comentario");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              comentarios.forEach((comentario, index) => {
                  setTimeout(() => {
                      comentario.classList.add("mostrar");
                  }, index * 1000); // 1 segundo entre cada comentario
              });
              observer.disconnect(); // Evita que se vuelva a ejecutar
          }
      });
  }, { threshold: 0.2 });

  observer.observe(comentariosContainer);
});

console.log("checkout.js está cargado");




