const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

const usuarioOdontologia = [
    { id: 1009749463, nombre: "Melissa", apellido: "Lopez", edad: 16, telefono: 31045589, direccion : "mz 5 casa 2 ricaurte"},
    { id: 1987463636, nombre: "Vanesa", apellido: "Ladino", edad: 17, telefono: 32098976, direccion : "mz 3 casa 9 ricaurte" },
    { id: 1087493938, nombre: "Maria Paula", apellido: "Buenaventura", edad: 17, telefono: 37898096, direccion : "mz 9 casa 4 ricaurte" },
    { id: 1087493938, nombre: "Camila", apellido: "Alape", edad: 17, telefono: 37898951, direccion : "mz 12 casa 8 ricaurte" },
];  

app.get("/", (req, res) => {
    res.send("Hola señores, así es la creación de mi API");
});

app.get("/api/usuarioOdontologia", (req, res) => {
    res.send(usuarioOdontologia);
});

app.get("/api/usuarioOdontologia/:id", (req, res) => {
    const usuario = usuarioOdontologia.find((u) => u.id === parseInt(req.params.id));
    if (!usuario) 
        return res
        .status(404)
        .send("Usuario no encontrado en nuestra base de datos"); 
    else res.send(usuario);    
}); 

// Crear usuario de odontología
app.post("/api/usuarioOdontologia", (req, res) => { 
    const nuevoUsuario = {
        id: usuarioOdontologia.length + 1, 
        nombre: req.body.nombre, 
        apellido: req.body.apellido, 
        edad: parseInt(req.body.edad), 
        telefono: parseInt(req.body.telefono), 
        direccion: req.body.direccion,   
    };

    usuarioOdontologia.push(nuevoUsuario);
    res.send(nuevoUsuario);
});

app.put("/api/usuarioOdontologia/:id", (req, res) => {
    const usuarioIndex = usuarioOdontologia.findIndex((u) => u.id === parseInt(req.params.id));

    if (usuarioIndex !== -1) {
        const updatedUsuario = {
            id: parseInt(req.params.id),
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: parseInt(req.body.edad),
            telefono: parseInt(req.body.telefono),
            estudia: req.body.telefono,
        };
        usuarioOdontologia[usuarioIndex] = updatedUsuario;
        res.send(updatedUsuario);
    } else {
        res.status(404).send("Usuario no encontrado");
    }
});

// Eliminar usuario de odontología
app.delete("/api/usuarioOdontologia/:id", (req, res) => {
    const usuario = usuarioOdontologia.find((u) => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).send("Usuario no encontrado"); 
    else res.send(usuario);
    
    const index = usuarioOdontologia.indexOf(usuario);
    usuarioOdontologia.splice(index, 1);
    res.send(usuario); 
});

app.listen(port, () => console.log("Escuchando el puerto:", port));