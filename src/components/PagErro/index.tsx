import { useNavigate } from 'react-router-dom'

function PaginaErro() {
  const navigate = useNavigate()

  return (
    <section className="quadro estado erro">
      <h2>Página não encontrada</h2>

      <p>
        A página que você tentou acessar
        não existe neste painel.
      </p>

      <button
        onClick={() => navigate('/chamada')}
      >
        Voltar para a chamada
      </button>
    </section>
  )
}

export default PaginaErro