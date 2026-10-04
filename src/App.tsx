import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import type { Aluno } from './types/aluno'

import Cabecalho from './components/Cabecalho'
import NavAbas from './components/NavAbas'
import Chamada from './components/Chamada'
import Entregas from './components/Entregas'
import PaginaAluno from './components/PagAlunos'
import PaginaErro from './components/PagErro'

import { buscarAlunos } from './services/alunosService'

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarAlunos()
        setAlunos(dados)
      } catch {
        setErro(true)
      } finally {
        setCarregando(false)
      }
    }

    carregar()
  }, [])

  function marcarPresenca(id: number) {
    setAlunos(alunos =>
      alunos.map(aluno =>
        aluno.id === id
          ? { ...aluno, presente: !aluno.presente }
          : aluno,
      ),
    )
  }

  function registrarEntrega(id: number) {
    setAlunos(alunos =>
      alunos.map(aluno =>
        aluno.id === id
          ? { ...aluno, entregas: aluno.entregas + 1 }
          : aluno,
      ),
    )
  }

  if (carregando) {
    return (
      <main className="painel">
        <Cabecalho />

        <section className="quadro estado">
          <h2>Carregando...</h2>
          <p>Buscando os dados dos alunos.</p>
        </section>
      </main>
    )
  }

  if (erro) {
    return (
      <main className="painel">
        <Cabecalho />

        <section className="quadro estado erro">
          <h2>Não foi possível carregar</h2>
          <p>Confira se o arquivo de dados está disponível.</p>
        </section>
      </main>
    )
  }

  return (
    <main className="painel">
      <Cabecalho />

      <NavAbas />

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/chamada" replace />}
        />

        <Route
          path="/chamada"
          element={
            <Chamada
              alunos={alunos}
              onPresenca={marcarPresenca}
            />
          }
        />

        <Route
          path="/entregas"
          element={
            <Entregas
              alunos={alunos}
              onEntrega={registrarEntrega}
            />
          }
        />

        <Route
          path="/aluno/:id"
          element={<PaginaAluno alunos={alunos} />}
        />

        <Route
          path="*"
          element={<PaginaErro />}
        />
      </Routes>
    </main>
  )
}

export default App