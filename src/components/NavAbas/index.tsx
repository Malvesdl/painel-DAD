import { Link, useLocation } from 'react-router-dom'

const ABAS = [
  {
    caminho: '/chamada',
    rotulo: 'Chamada',
  },
  {
    caminho: '/entregas',
    rotulo: 'Entregas',
  },
]

function NavAbas() {
  const location = useLocation()

  return (
    <nav
      className="abas"
      aria-label="Navegação principal"
    >
      {ABAS.map(aba => (
        <Link
          key={aba.caminho}
          to={aba.caminho}
          className={
            location.pathname === aba.caminho
              ? 'aba ativa'
              : 'aba'
          }
        >
          {aba.rotulo}
        </Link>
      ))}
    </nav>
  )
}

export default NavAbas