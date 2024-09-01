import mongoose from "mongoose";

const equipamentoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: mongoose.Schema.Types.String},
    tipo: {type: mongoose.Schema.Types.String},
    status: {type: mongoose.Schema.Types.String},
    destino: {type: mongoose.Schema.Types.String}
}, {versionKey: false});

export const equipamento = mongoose.model("equipamentos", equipamentoSchema);