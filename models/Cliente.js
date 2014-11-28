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

/* Salvar o registro de um cliente. Caso exista um registro com o mesmo id, o mesmo será atualizado com os novos dados. */
schema.statics.salvar = function(clienteObj, callback) {
    if(!clienteObj._id) {
        this.create(clienteObj, callback);
    } 
    else {
        this.findByIdAndUpdate(clienteObj._id, clienteObj, callback);
    }
}

/* Lista todos os clientes cadastrados. */
schema.statics.listarTodos = function(callback) {
    this.find(callback); 
}

/* Busca um cliente pelo seu id. */
schema.statics.buscarPorId = function(id, callback) {
    this.findById(id, callback);
}

/* Atualiza o registro de um cliente existente. */
schema.statics.atualizar = function(clienteObj, callback) {
    this.findByIdAndUpdate(clienteObj.id, clienteObj, callback);
}


module.exports = mongoose.model("Cliente", schema);


