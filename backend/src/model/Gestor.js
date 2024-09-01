import mongoose from "mongoose";

export const gestorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: mongoose.Schema.Types.String},
    senha: {type: mongoose.Schema.Types.String},
    tipo: {type: mongoose.Schema.Types.String},
    contato: {type: mongoose.Schema.Types.String},
    endereco: {type: mongoose.Schema.Types.String}
}, {versionKey: false});

export const gestor = mongoose.model("gestores", gestorSchema);