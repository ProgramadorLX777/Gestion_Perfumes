const API = "/pedidos";

const perfumes = [
    // 👨 Masculinos
    { codigo: "H1", nombre: "XS Pure", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H2", nombre: "A*Men", disenador: "Thierry Mugler", tipo: "masculino" },
    { codigo: "H3", nombre: "YSL Eau de Toilette", disenador: "YvesSaintLaurent", tipo: "masculino" },
    { codigo: "H4", nombre: "Polo Sport", disenador: "Ralph Lauren", tipo: "masculino" },
    { codigo: "H5", nombre: "Polo Blue", disenador: "Ralph Lauren", tipo: "masculino" },
    { codigo: "H6", nombre: "Tommy Impact", disenador: "Tommy Hilfiger", tipo: "masculino" },
    { codigo: "H7", nombre: "Invictus", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H8", nombre: "Boss Bottled", disenador: "Hugo Boss", tipo: "masculino" },
    { codigo: "H9", nombre: "Black XS L'Excess", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H10", nombre: "212 VIP", disenador: "Carolina Herrera", tipo: "masculino" },

    { codigo: "H11", nombre: "Issey Miyake", disenador: "Issey Miyake", tipo: "masculino" },
    { codigo: "H12", nombre: "Devotion Pour Homme", disenador: "Dolce & Gabbana", tipo: "masculino" },
    { codigo: "H13", nombre: "Lapidus", disenador: "Ted Lapidus", tipo: "masculino" },
    { codigo: "H14", nombre: "Dior Pour Homme", disenador: "Dior", tipo: "masculino" },
    { codigo: "H15", nombre: "Paco Rabanne", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H16", nombre: "Invictus Acqua", disenador: "Chanel", tipo: "masculino" },
    { codigo: "H17", nombre: "Ultra Male", disenador: "Jean Paul Gaultier", tipo: "masculino" },
    { codigo: "H18", nombre: "Lacoste White", disenador: "Lacoste", tipo: "masculino" },
    { codigo: "H19", nombre: "Azzaro Classic", disenador: "Azzaro", tipo: "masculino" },
    { codigo: "H20", nombre: "One Million", disenador: "Paco Rabanne", tipo: "masculino" },

    { codigo: "H21", nombre: "One Million Privé", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H22", nombre: "Acqua di Gio (Normal)", disenador: "Giorgio Armani", tipo: "masculino" },
    { codigo: "H23", nombre: "Acqua di Gio Profumo", disenador: "Giorgio Armani", tipo: "masculino" },
    { codigo: "H24", nombre: "Le Male", disenador: "Jean Paul Gaultier", tipo: "masculino" },
    { codigo: "H25", nombre: "Polo Red", disenador: "Ralph Lauren", tipo: "masculino" },
    { codigo: "H26", nombre: "Dylan Blue", disenador: "Versace", tipo: "masculino" },
    { codigo: "H27", nombre: "212 Sexy", disenador: "Carolina Herrera", tipo: "masculino" },
    { codigo: "H28", nombre: "Black Code", disenador: "Giorgio Armani", tipo: "masculino" },
    { codigo: "H29", nombre: "Luna Rossa Ocean", disenador: "Prada", tipo: "masculino" },

    { codigo: "H30", nombre: "Scandal Pour Homme", disenador: "Jean Paul Gaultier", tipo: "masculino" },
    { codigo: "H31", nombre: "Polo Verde (Clásico)", disenador: "Ralph Lauren", tipo: "masculino" },
    { codigo: "H32", nombre: "Sauvage", disenador: "Dior", tipo: "masculino" },
    { codigo: "H33", nombre: "Aqva Pour Homme", disenador: "Bvlgari", tipo: "masculino" },
    { codigo: "H34", nombre: "Allure Homme Sport", disenador: "Chanel", tipo: "masculino" },
    { codigo: "H35", nombre: "Boss Bottled Night", disenador: "Hugo Boss", tipo: "masculino" },
    { codigo: "H36", nombre: "Le Male Elixir", disenador: "Jean Paul Gaultier", tipo: "masculino" },
    { codigo: "H37", nombre: "212 VIP Black", disenador: "Carolina Herrera", tipo: "masculino" },
    { codigo: "H38", nombre: "Boss Bottled Absolu", disenador: "Hugo Boss", tipo: "masculino" },
    { codigo: "H39", nombre: "Eros (Normal)", disenador: "Versace", tipo: "masculino" },
    { codigo: "H40", nombre: "Fahrenheit", disenador: "Dior", tipo: "masculino" },

    { codigo: "H41", nombre: "Stronger WY Sandal Wood", disenador: "Emporio Armani", tipo: "masculino" },
    { codigo: "H42", nombre: "YSL EDP", disenador: "YvesSaintLaurent", tipo: "masculino" },
    { codigo: "H43", nombre: "Club de Nuit", disenador: "Armaf", tipo: "masculino" },
    { codigo: "H44", nombre: "K", disenador: "Dolce & Gabbana", tipo: "masculino" },
    { codigo: "H45", nombre: "Only the Brave (Normal)", disenador: "Diesel", tipo: "masculino" },
    { codigo: "H46", nombre: "Phantom", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H47", nombre: "Gentleman Society", disenador: "Givenchy", tipo: "masculino" },
    { codigo: "H48", nombre: "Acqua di Gio Parfum", disenador: "Giorgio Armani", tipo: "masculino" },
    { codigo: "H49", nombre: "Black XS", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H50", nombre: "212 Héroes Forever Young", disenador: "Carolina Herrera", tipo: "masculino" },

    { codigo: "H51", nombre: "Code Profumo", disenador: "Giorgio Armani", tipo: "masculino" },
    { codigo: "H52", nombre: "Bleu de Chanel", disenador: "Chanel", tipo: "masculino" },
    { codigo: "H53", nombre: "Azzaro Wanted", disenador: "Azzaro", tipo: "masculino" },
    { codigo: "H54", nombre: "212 NYC", disenador: "Carolina Herrera", tipo: "masculino" },
    { codigo: "H55", nombre: "Hugo Boss Cantimplora", disenador: "Hugo Boss", tipo: "masculino" },
    { codigo: "H56", nombre: "Azzaro Most Wanted", disenador: "Azzaro", tipo: "masculino" },
    { codigo: "H57", nombre: "Ralph's Club", disenador: "Ralph Lauren", tipo: "masculino" },
    { codigo: "H58", nombre: "SpiceBomb", disenador: "Viktor & Rolf", tipo: "masculino" },
    { codigo: "H59", nombre: "One Million Elixir", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H60", nombre: "Stronger with You", disenador: "Emporio Armani", tipo: "masculino" },

    { codigo: "H61", nombre: "Toy Boy", disenador: "Moschino", tipo: "masculino" },
    { codigo: "H62", nombre: "The One", disenador: "Dolce & Gabbana", tipo: "masculino" },
    { codigo: "H63", nombre: "Fakhar Black", disenador: "Lattafa", tipo: "masculino" },
    { codigo: "H64", nombre: "Polo Black", disenador: "Ralph Lauren", tipo: "masculino" },
    { codigo: "H65", nombre: "CH Men", disenador: "Carolina Herrera", tipo: "masculino" },
    { codigo: "H66", nombre: "Gentleman EDP Boise", disenador: "Givenchy", tipo: "masculino" },
    { codigo: "H67", nombre: "Dior Homme Intense", disenador: "Dior", tipo: "masculino" },
    { codigo: "H68", nombre: "Sauvage Elixir", disenador: "Dior", tipo: "masculino" },
    { codigo: "H69", nombre: "Acqua di Gio Profondo", disenador: "Giorgio Armani", tipo: "masculino" },
    { codigo: "H70", nombre: "Tommy Boy", disenador: "Tommy Hilfiger", tipo: "masculino" },

    { codigo: "H71", nombre: "Valentino Born in Roma (Normal)", disenador: "Valentino", tipo: "masculino" },
    { codigo: "H72", nombre: "Light Blue", disenador: "Dolce & Gabbana", tipo: "masculino" },
    { codigo: "H73", nombre: "Invictus Victory", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H74", nombre: "One Million Royal", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H75", nombre: "Man in Black", disenador: "Bvlgari", tipo: "masculino" },
    { codigo: "H76", nombre: "La Nuit de L'Homme", disenador: "YvesSaintLaurent", tipo: "masculino" },
    { codigo: "H77", nombre: "Dior Homme Cologne", disenador: "Dior", tipo: "masculino" },
    { codigo: "H78", nombre: "Polo Red Extreme", disenador: "Ralph Lauren", tipo: "masculino" },
    { codigo: "H79", nombre: "One Million Lucky", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H80", nombre: "Bad Boy", disenador: "Carolina Herrera", tipo: "masculino" },

    { codigo: "H81", nombre: "Eros Flame", disenador: "Versace", tipo: "masculino" },
    { codigo: "H82", nombre: "Stronger W.Y Absolutely", disenador: "Emporio Armani", tipo: "masculino" },
    { codigo: "H83", nombre: "Valentino Born in Roma Intense", disenador: "Valentino", tipo: "masculino" },
    { codigo: "H84", nombre: "Bad Boy Extreme", disenador: "Carolina Herrera", tipo: "masculino" },
    { codigo: "H85", nombre: "Boss Bottled Elixir", disenador: "Hugo Boss", tipo: "masculino" },
    { codigo: "H86", nombre: "King Bharara", disenador: "Bharara", tipo: "masculino" },
    { codigo: "H87", nombre: "Amber Oud", disenador: "Al Haramain", tipo: "masculino" },
    { codigo: "H88", nombre: "YSL EDP Intense", disenador: "YvesSaintLaurent", tipo: "masculino" },
    { codigo: "H89", nombre: "Code", disenador: "Giorgio Armani", tipo: "masculino" },
    { codigo: "H90", nombre: "Le Beau Le Parfum", disenador: "Jean Paul Gaultier", tipo: "masculino" },

    { codigo: "H91", nombre: "Polo 67", disenador: "Ralph Lauren", tipo: "masculino" },
    { codigo: "H92", nombre: "Stronger with You Intensely", disenador: "Emporio Armani", tipo: "masculino" },
    { codigo: "H93", nombre: "The Scent", disenador: "Hugo Boss", tipo: "masculino" },
    { codigo: "H94", nombre: "Valentino Coral Fantasy", disenador: "Valentino", tipo: "masculino" },
    { codigo: "H95", nombre: "Invictus Victory Elixir", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H96", nombre: "Invictus Parfum", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H97", nombre: "Luna Rosa Carbon", disenador: "Prada", tipo: "masculino" },
    { codigo: "H98", nombre: "Bleu Electrique", disenador: "YvesSaintLaurent", tipo: "masculino" },
    { codigo: "H99", nombre: "One Million Gold", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H100", nombre: "Bad Boy Cobalt", disenador: "Carolina Herrera", tipo: "masculino" },

    { codigo: "H101", nombre: "Kahamra", disenador: "Lattafa", tipo: "masculino" },
    { codigo: "H102", nombre: "Sauvage Eau Forte", disenador: "Dior", tipo: "masculino" },
    { codigo: "H103", nombre: "One Million Parfum", disenador: "Paco Rabanne", tipo: "masculino" },
    { codigo: "H104", nombre: "MySelf Le Parfum", disenador: "YvesSaintLaurent", tipo: "masculino" },
    { codigo: "H105", nombre: "Code Elixir", disenador: "Giorgio Armani", tipo: "masculino" },
    { codigo: "H106", nombre: "Boss Bottled Citrus", disenador: "Hugo Boss", tipo: "masculino" },
    { codigo: "H107", nombre: "Prada L'Homme", disenador: "Prada", tipo: "masculino" },
    { codigo: "H108", nombre: "Super X", disenador: "Chanel", tipo: "masculino" },
    { codigo: "H109", nombre: "Hero Parfum", disenador: "Burberry", tipo: "masculino" },
    { codigo: "H110", nombre: "Stronger With You Parfum", disenador: "Emporio Armani", tipo: "masculino" },

    { codigo: "H111", nombre: "Scandal Parfum", disenador: "Jean Paul Gaultier", tipo: "masculino" },
    { codigo: "H112", nombre: "Le Male Le Parfum", disenador: "Jean Paul Gaultier", tipo: "masculino" },
    { codigo: "H113", nombre: "Luna Rosa Black", disenador: "Prada", tipo: "masculino" },
    { codigo: "H114", nombre: "Scandal Absolu", disenador: "Jean Paul Gaultier", tipo: "masculino" },
    { codigo: "H115", nombre: "Acqua di Gio Elixir", disenador: "Giorgio Armani", tipo: "masculino" },
    { codigo: "H116", nombre: "Attitud", disenador: "Armaf", tipo: "masculino" },
    { codigo: "H117", nombre: "212 VIP Black Elixir", disenador: "Carolina Herrera", tipo: "masculino" },
    { codigo: "H118", nombre: "Code Parfum", disenador: "Giorgio Armani", tipo: "masculino" },
    { codigo: "H119", nombre: "Le Sel d'Issey", disenador: "Issey Miyake", tipo: "masculino" },
    { codigo: "H120", nombre: "Asad Bourboun", disenador: "Lattafa", tipo: "masculino" },
    { codigo: "H121", nombre: "Asad Zansibar", disenador: "Lattafa", tipo: "masculino" },

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