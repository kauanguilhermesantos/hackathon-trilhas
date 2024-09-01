import mongoose from "mongoose";

const funcionarioSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: mongoose.Schema.Types.String},
    origem: {type: mongoose.Schema.Types.String},
    tipo: {type: mongoose.Schema.Types.String}
}, {versionKey: false});

export const funcionario = mongoose.model("funcionarios", funcionarioSchema);