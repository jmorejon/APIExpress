module.exports = app => {
    const departamento = require("../controllers/departamento.controller.js");
  
    var router = require("express").Router();
  
    // Crear un nuevo municipio
    router.post("/", departamento.create);

    // Actualizar un municipio
    router.put("/:municipio", departamento.update);

    // Eliminar un municipio
    router.delete("/:municipio", departamento.delete);

    app.use("/api/departamento", router);
  };