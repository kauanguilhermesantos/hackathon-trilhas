import { estacaoTech } from "../model/EstacaoTech";

export class etController {

  static async listarEstacoes(req, res) {
    try {
      const estacoesRetornadas = await estacaoTech.find();
      res.status(200).json(estacoesRetornadas);
    } catch (erro) {
      res.status(500).json({ message: "nao foi possivel listar estacoes" });
    }

  }
  static async adicionarEstacao(req, res) {
    try {
      const novaEstacao = req.body;
      await estacaoTech.create({
        nome: novaEstacao.nome,
        gestor: novaEstacao.gestor,
        contato: novaEstacao.contato,
        endereco: novaEstacao.endereco
      });
      res.status(200).json(estacoesRetornadas);
    } catch (erro) {
      res.status(500).json({ message: "nao foi possivel listar estacoes" });
    }
  }

  static async removerEmpresaById(req, res) {
    try {
      const { id } = req.params;
      await estacaoTech.deleteOne({id})
      res.status(200).json({ message: "objeto removido" });
    } catch (erro) {

    }
  }

}
