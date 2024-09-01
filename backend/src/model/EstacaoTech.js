import mongoose from "mongoose";
import { gestorSchema } from "./Gestor.js";

const estacaoTechSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: mongoose.Schema.Types.String},
    gestor: {type: mongoose.Schema.Types.String},
    equipamentos: {type: mongoose.Schema.Types.String},
    contato: {type: mongoose.Schema.Types.String},
    endereco: {type: mongoose.Schema.Types.String},
    RH: {type: mongoose.Schema.Types.String},
    gestor: gestorSchema

}, {versionKey: false});

export const estacaoTech = mongoose.model("estacoesTech", estacaoTechSchema);