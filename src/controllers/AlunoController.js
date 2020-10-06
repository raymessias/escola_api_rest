import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Otávio',
      email: 'email@email.com',
      idade: 31,
      peso: 65,
      altura: 1.69,
    });
    res.json(novoAluno);
  }
}

export default new AlunoController();
