const API = "/pedidos";

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
            <button onclick="editar('${p._id}')">Editar</button>
            <button onclick="eliminar('${p._id}')">Eliminar</button>
        `;
        lista.appendChild(li);
    });
}

// ➕ Guardar / editar
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const pedido = {
        codigo_perfume: codigo.value,
        nombre_perfume: nombre.value,
        nombre_disenador: disenador.value,
        cantidad_ml: Number(ml.value),
        nombre_cliente: cliente.value
    };

    if (editandoId) {
        await fetch(`${API}/${editandoId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pedido)
        });
        editandoId = null;
    } else {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pedido)
        });
    }

    form.reset();
    cargarPedidos();
});

// ✏️ Editar
async function editar(id) {
    try {
        const res = await fetch(API);
        const data = await res.json();

        const p = data.find(x => x._id === id);

        if (!p) {
            alert("No se encontró el pedido");
            return;
        }

        codigo.value = p.codigo_perfume;
        nombre.value = p.nombre_perfume;
        disenador.value = p.nombre_disenador;
        ml.value = p.cantidad_ml;
        cliente.value = p.nombre_cliente;

        editandoId = id;

    } catch (error) {
        console.error("Error al editar:", error);
    }
}

// ❌ Eliminar
async function eliminar(id) {
    const confirmar1 = confirm("¿Seguro que quieres eliminar este pedido?");
    if (!confirmar1) return;

    const confirmar2 = confirm("Esta acción es permanente. ¿Eliminar?");
    if (!confirmar2) return;

    try {
        await fetch(`${API}/${id}`, { method: "DELETE" });
        cargarPedidos();
    } catch (error) {
        console.error("Error al eliminar:", error);
        alert("No se pudo eliminar");
    }
}

cargarPedidos();

window.editar = editar;
window.eliminar = eliminar;