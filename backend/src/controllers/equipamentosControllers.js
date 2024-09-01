import { equipamento } from "../model/Equipamento.js";

export class EquipamentoController{
    static async getEquipamentos(req, res){
        const showEquipamentos = await equipamento.find({});
        res.status(200).json(showEquipamentos);
    };

    static async postEquipamentos(req, res){
        const newEquipamento = req.body;
        try {
            const createdEquipamento = await equipamento.create(newEquipamento);
            res.status(200).json({message: "Equipamento adicionado com sucesso.", equipamento: createdEquipamento});
        } catch (error) {
            res.status(500).json({message:`${error.message} - erro ao adicionar equipamento.`});
        }
    };

    static async updateEquipamentos(req, res){
        try {
            const id = req.params.id;
            await equipamento.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Equipamento atualizado."});
        } catch (error) {
            res.status(500).json({message: `${error.message} - erro ao atualizar.`});
        }
    };

    static async deleteEquipamento(req, res){
        try {
            const id = req.params.id;
            await equipamento.findByIdAndDelete(id);
            res.status(202).send("Equipamento deletado com sucesso.")
        } catch (error) {
            res.status(500).json({message: `${error.message} - erro ao deletar.`});
        }
    };
}