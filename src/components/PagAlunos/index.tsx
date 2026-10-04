import { Link, useNavigate, useParams } from 'react-router-dom'

import type { Aluno } from '../../types/aluno'

interface PaginaAlunoProps {
  alunos: Aluno[]
}

function PaginaAluno({
  alunos,
}: PaginaAlunoProps) {
  const { id } = useParams<{ id: string }>()

  const navigate = useNavigate()

  if (id === undefined) {
    return (
      <section className="quadro estado erro">
        <h2>Aluno não informado</h2>

        <p>
          Não foi possível identificar o aluno solicitado.
        </p>

        <button
          onClick={() => navigate('/chamada')}
        >
          Voltar para a chamada
        </button>
      </section>
    )
  }

  const idAluno = Number(id)

  if (!Number.isInteger(idAluno)) {
    return (
      <section className="quadro estado erro">
        <h2>Aluno inválido</h2>

        <p>
          O identificador informado não é válido.
        </p>

        <button
          onClick={() => navigate('/chamada')}
        >
          Voltar para a chamada
        </button>
      </section>
    )
  }

  const aluno = alunos.find(
    item => item.id === idAluno,
  )

  if (aluno === undefined) {
    return (
      <section className="quadro estado erro">
        <h2>Aluno não encontrado</h2>

        <p>
          Não existe aluno cadastrado com o ID {idAluno}.
        </p>

        <button
          onClick={() => navigate('/chamada')}
        >
          Voltar para a chamada
        </button>
      </section>
    )
  }

  return (
    <section className="quadro ficha-aluno">
      <h2>{aluno.nome}</h2>

      <dl className="dados-aluno">
        <div>
          <dt>ID</dt>
          <dd>{aluno.id}</dd>
        </div>

        <div>
          <dt>Presença</dt>
          <dd>
            {aluno.presente
              ? 'Presente'
              : 'Ausente'}
          </dd>
        </div>

        <div>
          <dt>Entregas</dt>
          <dd>{aluno.entregas}</dd>
        </div>
      </dl>

      <div className="acoes-aluno">
        <button
          onClick={() => navigate('/chamada')}
        >
          Voltar para a chamada
        </button>

        <Link
          className="link-botao"
          to="/entregas"
        >
          Ver entregas
        </Link>
      </div>
    </section>
  )
}

export default PaginaAluno