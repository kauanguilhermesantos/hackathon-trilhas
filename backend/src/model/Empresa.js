import mongoose from "mongoose";
import { funcionarioSchema } from "./Funcionario.js";

const empresaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: mongoose.Schema.Types.String},
    contato: {type: mongoose.Schema.Types.String},
    endereco: {type: mongoose.Schema.Types.String},
    funcionario: funcionarioSchema
}, {versionKey: false});

export const empresa = mongoose.model("empresas", empresaSchema);