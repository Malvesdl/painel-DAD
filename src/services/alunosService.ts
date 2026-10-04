import type { Aluno } from '../types/aluno'

const URL_ALUNOS = '/dados/alunos.json'

export async function buscarAlunos(): Promise<Aluno[]> {
  const resposta = await fetch(URL_ALUNOS)

  if (!resposta.ok) {
    throw new Error(
      `Não foi possível carregar os alunos. Status: ${resposta.status}`,
    )
  }

  const dados: Aluno[] = await resposta.json()

  return dados
}