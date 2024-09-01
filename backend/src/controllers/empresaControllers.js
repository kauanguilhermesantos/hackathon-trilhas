import { empresa } from "../model/Empresa.js";
import { funcionario } from "../model/Funcionario.js";

export class EmpresasControllers{
    static async getEmpresas(req, res){
        const showEmpresas = await empresa.find({});
        res.status(200).json(showEmpresas);
    };

    static async postEmpresas(req, res){
        const newEmpresa = req.body
        try {
            const findFuncionario = await funcionario.findById(newEmpresa.funcionario);
            const completeEmpresa = {...newEmpresa, funcionario:{...findFuncionario._doc}};
            const createdEmpresa = await empresa.create(completeEmpresa);
            res.status(201).json({message:"Empresa adicionada com sucesso.", empresa: createdEmpresa});
        } catch (error) {
            res.status(500).json({message:`${error.message} - erro ao adicionar atrativo`});
        }
    };

    static async updateEmpresas(req, body){
        try {
            const id = req.params.id;
            await empresa.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"Empresa atualizada com sucesso."});
        } catch (error) {
            res.status(500).json({message: `${error.message} - erro ao atualizar.`});
        }
    };

    static async deleteEmpresa(req, res){
        try {
            const id = req.params.id;
            await empresa.findByIdAndDelete(id);
            res.status(202).send("Empresa deletada.");
        } catch (error) {
            res.status(500).json({message: `${error.message} - erro ao deletar.`});
        }
    }
}