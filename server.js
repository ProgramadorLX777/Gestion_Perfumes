const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 SERVIR TU FRONTEND
app.use(express.static(path.join(__dirname, "frontend")));

const PORT = process.env.PORT || 3000;

// ✅ UNA SOLA CONEXIÓN
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo conectado"))
    .catch(err => console.log(err));

// 🧱 MODELO
const Pedido = mongoose.model("Pedido", {
    codigo_perfume: String,
    nombre_perfume: String,
    nombre_disenador: String,
    cantidad_ml: Number,
    nombre_cliente: String
});

// 📥 GET
app.get("/pedidos", async (req, res) => {
    const pedidos = await Pedido.find();
    res.json(pedidos);
});

// ➕ POST
app.post("/pedidos", async (req, res) => {
    const nuevo = new Pedido(req.body);
    await nuevo.save();
    res.json(nuevo);
});

// ❌ DELETE
app.delete("/pedidos/:id", async (req, res) => {
    await Pedido.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Eliminado" });
});

// ✏️ UPDATE
app.put("/pedidos/:id", async (req, res) => {
    await Pedido.findByIdAndUpdate(req.params.id, req.body);
    res.json({ mensaje: "Actualizado" });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Servidor corriendo en puerto " + PORT);
});

