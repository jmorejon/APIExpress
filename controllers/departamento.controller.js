const db = require("../models");
const departamento = db.departamento;

// Crear un departamento
exports.create = (req, res) => {
 
  if (!req.body.departamento) {
    res.status(400).send({ message: "Falta informacion" });
    return;
  }

  
  const depto = new departamento({
    departamento: req.body.departamento,
    municipio: [
        {
            nombre:req.body.nombre,
            directorio:[
                {
                    Fiscalia: req.body.fiscalia,
                    Direccion: req.body.direccion,
                    Telefonos:[
                        {
                            numero:req.body.numero
                        }
                    ]
                }
            ]
        }
    ]
  });

  depto
    .save(depto)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al insertar."
      });
    });
};

// listar todos los departamentos
exports.findAll = (req, res) => {
  
};

// buscar un departamento
exports.findOne = (req, res) => {
  
};

// actualizar un departamento
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Falta de informacion"
        });
      }
    
      const municipio = req.params.municipio;
    
      departamento.findByIdAndUpdate(municipio, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `No se puede moficar el municipio =${municipio}.`
            });
          } else res.send({ message: "Municipio actualizado." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error al actualizar el municipio=" + municipio
          });
        });
};

//Eliminar un departamento
exports.delete = (req, res) => {
  
    
      const municipio = req.params.municipio;
    
      departamento.findByIdAndRemove(municipio, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `No se puede eliminar el municipio =${municipio}.`
            });
          } else res.send({ message: "Municipio eliminado." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error al eliminar el municipio=" + municipio
          });
        });
};

// Eliminar todos los departamentos
exports.deleteAll = (req, res) => {
  
};

// Listar todos los departamentos
exports.findAllPublished = (req, res) => {
  
};