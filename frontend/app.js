const API = "http://192.168.1.14:3000/pedidos";

const form = document.getElementById("formPedido");
const lista = document.getElementById("listaPedidos");

let editandoId = null;
let listaDatos = [];

// Cargar pedidos
async function cargarPedidos() {
    try {
        const res = await fetch(API);
        const data = await res.json();

        listaDatos = data; // 🔥 IMPORTANTE (faltaba)

        lista.innerHTML = "";

        data.forEach(p => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${p.nombre_perfume}</strong> (${p.cantidad_ml}ml)<br>
                ${p.nombre_disenador} - Cliente: ${p.nombre_cliente}<br>
                <button onclick="editar(${p.id})">Editar</button>
                <button onclick="eliminar(${p.id})">Eliminar</button>
            `;
            lista.appendChild(li);
        });

    } catch (error) {
        console.error("Error al cargar pedidos:", error);
    }
}

// Guardar / Editar pedido
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const pedido = {
        codigo_perfume: document.getElementById("codigo").value,
        nombre_perfume: document.getElementById("nombre").value,
        nombre_disenador: document.getElementById("disenador").value,
        cantidad_ml: document.getElementById("ml").value,
        nombre_cliente: document.getElementById("cliente").value
    };

    try {
        if (editandoId) {
            // ✏️ EDITAR
            await fetch(`${API}/${editandoId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(pedido)
            });

            editandoId = null;

        } else {
            // ➕ CREAR
            await fetch(API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(pedido)
            });
        }

        form.reset();
        cargarPedidos();

    } catch (error) {
        console.error("Error al guardar:", error);
        alert("Error al guardar el pedido");
    }
});

// Editar pedido
function editar(id) {
    const pedido = listaDatos.find(p => p.id === id);

    document.getElementById("codigo").value = pedido.codigo_perfume;
    document.getElementById("nombre").value = pedido.nombre_perfume;
    document.getElementById("disenador").value = pedido.nombre_disenador;
    document.getElementById("ml").value = pedido.cantidad_ml;
    document.getElementById("cliente").value = pedido.nombre_cliente;

    editandoId = id;
}

// Eliminar pedido
async function eliminar(id) {
    try {
        await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        cargarPedidos();

    } catch (error) {
        console.error("Error al eliminar:", error);
        alert("Error al eliminar el pedido");
    }
}

// Inicializar
cargarPedidos();