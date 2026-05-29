// Array para guardar viajes
const viajes = [];

// Obtener elementos HTML
const destinoInput = document.getElementById("destino");
const fechaInput = document.getElementById("fecha");
const costoInput = document.getElementById("costo");

const agregarBtn = document.getElementById("agregarBtn");

const listaViajes = document.getElementById("listaViajes");

const totalTexto = document.getElementById("total");


// Función agregar viaje
const agregarViaje = () => {

  // Obtener datos
  const destino = destinoInput.value;
  const fecha = fechaInput.value;
  const costo = Number(costoInput.value);

  // Validar campos
  if(destino === "" || fecha === "" || costo <= 0){

    alert("Completa todos los campos");

    return;
  }

  // Crear objeto
  const viaje = {
    destino,
    fecha,
    costo
  };

  // Guardar viaje
  viajes.push(viaje);

  // Mostrar viajes
  mostrarViajes();

  // Limpiar inputs
  destinoInput.value = "";
  fechaInput.value = "";
  costoInput.value = "";
};


// Función mostrar viajes
const mostrarViajes = () => {

  // Limpiar lista
  listaViajes.innerHTML = "";

  // Variable total
  let total = 0;

  // Recorrer array
  viajes.forEach((viaje, index) => {

    // Sumar costo
    total += viaje.costo;

    // Crear div
    const div = document.createElement("div");

    div.classList.add("viaje");

    // Contenido HTML
    div.innerHTML = `
      <p><strong>Viaje ${index + 1}</strong></p>

      <p>Destino: ${viaje.destino}</p>

      <p>Fecha: ${viaje.fecha}</p>

      <p>Costo: $${viaje.costo}</p>
    `;

    // Agregar al HTML
    listaViajes.appendChild(div);

  });

  // Mostrar total
  totalTexto.textContent = `Total: $${total}`;

};


// Evento botón
agregarBtn.addEventListener("click", agregarViaje);

