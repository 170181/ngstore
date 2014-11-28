var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ngstore");

var schema = new mongoose.Schema({
    nome: String,
    cpf: String,
    logradouro: String,
    numero: String,
    bairro: String,
    cidade: String,
    estado: String,
    cep: String,
    telefone: String
});

/* Lista todos os clientes cadastrados. */
schema.statics.listAll = function(callback) {
    this.find(callback); 
}


module.exports = mongoose.model("Cliente", schema);


