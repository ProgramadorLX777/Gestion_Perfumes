const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('frontend'));

// Crear / conectar base de datos
const db = new sqlite3.Database('./database.db');

// Crear tabla si no existe
db.run(`
CREATE TABLE IF NOT EXISTS pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo_perfume TEXT,
    nombre_perfume TEXT,
    nombre_disenador TEXT,
    cantidad_ml INTEGER,
    nombre_cliente TEXT
)
`);

// Obtener pedidos
app.get('/pedidos', (req, res) => {
    db.all("SELECT * FROM pedidos", [], (err, rows) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(rows);
    });
});

// Crear pedido
app.post('/pedidos', (req, res) => {
    const { codigo_perfume, nombre_perfume, nombre_disenador, cantidad_ml, nombre_cliente } = req.body;

    db.run(
        `INSERT INTO pedidos (codigo_perfume, nombre_perfume, nombre_disenador, cantidad_ml, nombre_cliente)
         VALUES (?, ?, ?, ?, ?)`,
        [codigo_perfume, nombre_perfume, nombre_disenador, cantidad_ml, nombre_cliente],
        function (err) {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ id: this.lastID });
        }
    );
});

// Eliminar pedido
app.delete('/pedidos/:id', (req, res) => {
    db.run("DELETE FROM pedidos WHERE id = ?", [req.params.id], function (err) {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ mensaje: "Eliminado" });
    });
});

// Actualizar pedido
app.put('/pedidos/:id', (req, res) => {
    const { codigo_perfume, nombre_perfume, nombre_disenador, cantidad_ml, nombre_cliente } = req.body;

    db.run(
        `UPDATE pedidos 
         SET codigo_perfume = ?, nombre_perfume = ?, nombre_disenador = ?, cantidad_ml = ?, nombre_cliente = ?
         WHERE id = ?`,
        [codigo_perfume, nombre_perfume, nombre_disenador, cantidad_ml, nombre_cliente, req.params.id],
        function (err) {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ mensaje: "Actualizado" });
        }
    );
});

// Servidor en red
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo con base de datos 🚀`);
});