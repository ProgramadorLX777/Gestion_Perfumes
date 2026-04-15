const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// 🔧 Middlewares
app.use(cors());
app.use(express.json());

// 🔥 Servir frontend
app.use(express.static(path.join(__dirname, "frontend")));

const PORT = process.env.PORT || 3000;

// 🔗 Conexión Mongo
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Mongo conectado"))
    .catch(err => {
        console.error("❌ Error Mongo:", err);
        process.exit(1);
    });

// 🧱 Modelo
const Pedido = mongoose.model("Pedido", {
    codigo_perfume: String,
    nombre_perfume: String,
    nombre_disenador: String,
    cantidad_ml: Number,
    nombre_cliente: String,
    tipo: String
});

// 📥 GET
app.get("/pedidos", async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener pedidos" });
    }
});

// ➕ POST
app.post("/pedidos", async (req, res) => {
    try {
        const nuevo = new Pedido(req.body);
        await nuevo.save();
        res.json(nuevo);
    } catch (error) {
        res.status(500).json({ error: "Error al guardar pedido" });
    }
});

// ✏️ UPDATE
app.put("/pedidos/:id", async (req, res) => {
    try {
        await Pedido.findByIdAndUpdate(req.params.id, req.body);
        res.json({ mensaje: "Actualizado" });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar" });
    }
});

// ❌ DELETE
app.delete("/pedidos/:id", async (req, res) => {
    try {
        await Pedido.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Eliminado" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar" });
    }
});

// 🔥 RUTA RAÍZ (IMPORTANTE)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// 🚀 Iniciar servidor
app.listen(PORT, "0.0.0.0", () => {
    console.log("🚀 Servidor corriendo en puerto " + PORT);
});