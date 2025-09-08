document.addEventListener("DOMContentLoaded", () => {
  fetch("data/productos.json")
    .then(res => res.json())
    .then(productos => {
      const contenedor = document.querySelector(".contenedor-productos");
      const destacados = productos.slice(8, 12); 

      destacados.forEach(producto => {
        const card = document.createElement("div");
        card.className = "producto-card";

        card.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}" />
          <h5>${producto.nombre}</h5>
          <p>$${producto.precio.toLocaleString()}</p>
          <button class="btn-ver-mas" data-id="${producto.id}">Ver más</button>
        `;

        contenedor.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error al cargar productos:", error);
      document.querySelector(".contenedor-productos").innerHTML =
        "<p>No se pudieron cargar los productos.</p>";
    });
});


/* codigo para ir pasando diferentes imagenes dentro del circulo del hero banner  */


document.addEventListener("DOMContentLoaded", () => {
  const rutasImagenes = [
    'media/Mesa Comedor Pampa.png',
    'media/Mesa de Centro Araucaria.png',
    'media/Mesa de Noche Aconcagua.png',
    'media/Escritorio Costa.png',
    'media/Butaca Mendoza.png',
    'media/Sillas Córdoba.png',
    'media/Sillón Copacabana.png'
  ];

  let posicionActual = 0;
  const imagenHero = document.getElementById('inicio-hero-image');

  function actualizarImagen() {
    imagenHero.style.opacity = 0;

    setTimeout(() => {
      posicionActual = (posicionActual + 1) % rutasImagenes.length;
      imagenHero.src = rutasImagenes[posicionActual];
      imagenHero.style.opacity = 1;
    }, 500);
  }

  setInterval(actualizarImagen, 2500);
});