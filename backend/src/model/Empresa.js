import mongoose from "mongoose";

const empresaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: mongoose.Schema.Types.String},
    contato: {type: mongoose.Schema.Types.String},
    endereco: {type: mongoose.Schema.Types.String},
    funcionarios: {type: mongoose.Schema.Types.String}
}, {versionKey: false});

export const empresa = mongoose.model("empresas", empresaSchema);