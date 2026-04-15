const API = "/pedidos";

const perfumes = [
    // 👨 Masculinos
    { codigo: "M001", nombre: "Sauvage", disenador: "Dior", tipo: "masculino" },
    { codigo: "M002", nombre: "Bleu de Chanel", disenador: "Chanel", tipo: "masculino" },

    // 👩 Femeninos
    { codigo: "F001", nombre: "La Vie Est Belle", disenador: "Lancôme", tipo: "femenino" },
    { codigo: "F002", nombre: "Good Girl", disenador: "Carolina Herrera", tipo: "femenino" }
];

const tipoSelect = document.getElementById("tipo");
const codigoSelect = document.getElementById("codigo");

function mostrarMensaje(texto, tipo) {
    const div = document.getElementById("mensaje");

    div.textContent = texto;
    div.className = tipo === "exito" ? "mensaje-exito" : "mensaje-error";
    div.style.display = "block";

    setTimeout(() => {
        div.style.display = "none";
    }, 3000);
}

// cuando cambia tipo
tipoSelect.addEventListener("change", () => {
    const tipo = tipoSelect.value;

    codigoSelect.innerHTML = '<option value="">Selecciona perfume</option>';

    const filtrados = perfumes.filter(p => p.tipo === tipo);

    filtrados.forEach(p => {
        const option = document.createElement("option");
        option.value = p.codigo;
        option.textContent = `${p.codigo} - ${p.nombre}`;
        codigoSelect.appendChild(option);
    });
});

codigoSelect.addEventListener("change", () => {
    const seleccionado = perfumes.find(p => p.codigo === codigoSelect.value);

    if (seleccionado) {
        nombre.value = seleccionado.nombre;
        disenador.value = seleccionado.disenador;
    }
});

const form = document.getElementById("formPedido");
const lista = document.getElementById("listaPedidos");

let editandoId = null;

// 🔄 Cargar pedidos
async function cargarPedidos() {
    const res = await fetch(API);
    const data = await res.json();

    lista.innerHTML = "";

    data.forEach(p => {
        const li = document.createElement("li");

        li.innerHTML = `
        <strong>${p.nombre_perfume}</strong> (${p.cantidad_ml}ml)<br>
        ${p.nombre_disenador} - Cliente: ${p.nombre_cliente}<br>
    `;

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.addEventListener("click", () => editar(p._id));

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => eliminar(p._id));

        li.appendChild(btnEditar);
        li.appendChild(btnEliminar);

        lista.appendChild(li);
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const pedido = {
        codigo_perfume: codigo.value,
        nombre_perfume: nombre.value,
        nombre_disenador: disenador.value,
        cantidad_ml: Number(ml.value),
        nombre_cliente: cliente.value,
        tipo: tipo.value
    };

    try {
        let res;

        if (editandoId) {
            res = await fetch(`${API}/${editandoId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(pedido)
            });
            editandoId = null;
        } else {
            res = await fetch(API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(pedido)
            });
        }

        if (!res.ok) throw new Error("Error en la petición");

        mostrarMensaje("✅ Pedido guardado correctamente", "exito");

        form.reset();
        cargarPedidos();

    } catch (error) {
        console.error(error);
        mostrarMensaje("❌ Error al guardar el pedido", "error");
    }
});

// ✏️ Editar
async function editar(id) {
    const res = await fetch(API);
    const data = await res.json();

    const p = data.find(x => x._id === id);

    codigo.value = p.codigo_perfume;
    nombre.value = p.nombre_perfume;
    disenador.value = p.nombre_disenador;
    ml.value = p.cantidad_ml;
    cliente.value = p.nombre_cliente;
    tipo.value = p.tipo;

    editandoId = id;
}

// ❌ Eliminar
async function eliminar(id) {
    // 🔥 Primera confirmación
    const confirmacion1 = confirm("¿Seguro que quieres eliminar este pedido?");
    if (!confirmacion1) return;

    // 🔥 Segunda confirmación (más seria)
    const confirmacion2 = confirm("⚠️ Esta acción NO se puede deshacer. ¿Eliminar definitivamente?");
    if (!confirmacion2) return;

    try {
        await fetch(`${API}/${id}`, { method: "DELETE" });
        cargarPedidos();
    } catch (error) {
        console.error("Error al eliminar:", error);
        alert("No se pudo eliminar el pedido");
    }
}

cargarPedidos();

window.editar = editar;
window.eliminar = eliminar;