document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid-productos");
  const buscador = document.getElementById("buscador");

  // cargar productos
  fetch("data/productos.json")
    .then(res => res.json())
    .then(productos => {
      renderizarProductos(productos);

      // buscador (filtra por nombre o descripción)
      buscador.addEventListener("input", e => {
        const texto = e.target.value.toLowerCase();
        const filtrados = productos.filter(p =>
          p.nombre.toLowerCase().includes(texto) ||
          p.descripcion.toLowerCase().includes(texto)
        );
        renderizarProductos(filtrados);
      });
    })
    .catch(err => {
      console.error("Error al cargar productos:", err);
      grid.innerHTML = "<p>No se pudo cargar el catálogo.</p>";
    });

  // función que arma las tarjetas
  function renderizarProductos(lista) {
    grid.innerHTML = "";
    if (lista.length === 0) {
      grid.innerHTML = "<p>No se encontraron productos.</p>";
      return;
    }

    lista.forEach(prod => {
      const card = document.createElement("div");
      card.className = "producto-card";

      card.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h5>${prod.nombre}</h5>
        <p>$${prod.precio.toLocaleString()}</p>
        <a href="detalle.html?id=${prod.id}">Ver detalle</a>
      `;
      grid.appendChild(card);
    });
  }
});
