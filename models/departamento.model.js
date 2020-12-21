module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
          departamento: String,
          municipio: [
              {
                  nombre:String,
                  directorio:[
                      {
                          Fiscalia: String,
                          Direccion: String,
                          Telefonos:[
                              {
                                  numero:String
                              }
                          ]
                      }
                  ]
              }
          ]
        }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const departamento = mongoose.model("departamento",schema);
    return departamento;
  };