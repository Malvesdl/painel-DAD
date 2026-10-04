# Aula 08 — Painel Acessível

### Estudo dirigido — a aula por escrito, para você executar no seu ritmo

**Curso:** Desenvolvimento de Aplicações Dinâmicas (DAD) · 2ª série · Instituto J&F
**Tempo estimado:** 1h30 a 2h. Dá para parar no meio — o ponto de parada está marcado.

> **Esta aula continua a aula 07.** Faça a 07 primeiro. O projeto de partida daqui é exatamente o resultado de lá.

> **Como ler este arquivo.** Isto é a nossa aula, escrita. A sequência é a mesma que eu conduziria em sala, na mesma ordem, com as mesmas paradas e as mesmas perguntas — só que quem marca o ritmo agora é você. **Eu continuo do outro lado:** Teams a qualquer hora, ou me procurar na escola em qualquer horário. E a aula 09 começa com as dúvidas do que está aqui, então anote as suas pelo caminho.

---

## O que você vai fazer com o painel

O painel da aula 07 já funciona e já está tipado. Nesta aula ele ganha duas coisas que separam um exercício de um produto:

**1. O estilo vira sistema.** Hoje o CSS tem **27 valores de cor escritos na mão**, espalhados pelo arquivo. Você vai dar **nome** a cada um — e a partir daí trocar a identidade visual inteira do painel passa a ser mudar **uma linha**.

**2. O painel fica utilizável por quem não usa mouse nem enxerga a tela.** Um campo de busca com rótulo de verdade, um anel de foco que dá para ver, e um aviso que o leitor de tela realmente anuncia.

E no fim vem o passo mais importante do semestre inteiro, o passo 10: você vai **quebrar o painel de propósito** para quem usa teclado, rodar o auditor de acessibilidade — e ele vai dizer **"0 violações"**. Verde. Aprovado. Com o painel quebrado.

> **Por que isso importa mais do que parece.** Quase todo mundo que "faz acessibilidade" roda uma ferramenta, vê verde e dá por encerrado. Esta aula existe para te mostrar, com as suas próprias mãos, por que isso não basta.

---

## Como usar este arquivo

1. **Leia o parágrafo do passo antes de colar o código.** O código sem a explicação é só texto; a explicação é o que fica com você.
2. **Cole e SALVE.** Todo bloco de código aqui está limpo e completo — selecione, copie (`Ctrl+C`), cole, e aperte **`Ctrl+S`**. Quando disser *SUBSTITUA TUDO*, abra o arquivo, dê `Ctrl+A` (seleciona tudo), cole por cima e salve.
3. **Confira o caminho do arquivo antes de colar.** Este é o erro nº 1, e ele tem um motivo: pela convenção do curso quase todo componente se chama `index.tsx`. Você vai ter cinco abas abertas com o mesmo nome. **Não confie no nome da aba** — olhe a *barra de migalhas* no topo do editor, que mostra o caminho inteiro (`src > components > Entregas > index.tsx`).
4. **Depois de cada passo tem um ✅** dizendo o que tem de acontecer. Se não aconteceu, pare ali e resolva antes de seguir — erro empilhado fica dez vezes mais difícil.
5. **Travou?** Vá até o fim do arquivo, em *Se algo deu errado*. E veja a última seção: **você pode me chamar a qualquer momento.**

**As marcas que aparecem o tempo todo:**

| marca | quer dizer |
|---|---|
| 💻 **No terminal** | é comando para digitar no terminal — **não** é conteúdo de arquivo |
| 📄 **No arquivo** | é conteúdo de arquivo — criar, substituir ou acrescentar |
| ✍️ **DIGITE** | trecho para digitar à mão, não colar — é curto e é o conceito da aula |
| 📖 **Pare e entenda** | o porquê. É daqui que sai a prova |
| 🤞 | deu certo. **Reações coreana 🤞** |

**Quatro passos desta aula usam ferramenta extra** (04, 06, 09 e 10). Cada um tem alternativa que funciona em qualquer máquina, explicada no próprio passo — inclusive para quem está num notebook que não deixa instalar extensão. **Nenhuma delas bloqueia o resto:** se você não conseguir instalar nada, ainda faz a aula inteira, do começo ao fim.

---

## Passo 0 — a máquina está pronta?

**Faça isto antes de qualquer outra coisa.** São 30 segundos e evitam o travamento mais comum de todos.

Abra o **PowerShell** (tecla Windows, digite `powershell`, Enter) e rode:

💻 **No terminal:**
```powershell
node --version
npm --version
```

✅ **Resposta boa:** algo como `v22.22.2` na primeira e `10.x.x` na segunda. O número depois do `22.` pode ser outro — o que importa é começar com **v22**.

**Deu `'node' não é reconhecido como nome de cmdlet`?** O Node não está instalado. Baixe em **[nodejs.org](https://nodejs.org/)** a versão **22 LTS**, instale com *Next* em tudo, **feche o VS Code e o PowerShell, e abra de novo** (o terminal só enxerga um programa novo depois de reabrir). Rode os dois comandos outra vez.

**Deu uma versão menor que 22** (v18, v20)? Instale o Node 22 por cima, pelo mesmo link. O projeto usa Vite 8 e TypeScript 6, que **não rodam** em Node antigo — e o erro que aparece (`EBADENGINE`) não é óbvio.

> **Força Jovem!** Essa checagem de 30 segundos é a diferença entre fazer a aula hoje e travar no minuto três achando que "não funciona". Feito isso, o resto é ladeira abaixo.

---

## Antes de começar

**Se você fez a aula 07:** trabalhe no **seu próprio `painel-tipado`**, o que você terminou lá — é a continuação natural. Abra ele no VS Code (**File → Open Folder**), confira o terminal e o `dir package.json` (as duas seções logo abaixo, são rápidas) e então pule direto para *Ligue o servidor*. **Não pule a checagem do terminal**: se você está voltando noutro dia, o VS Code pode ter reaberto num perfil diferente.

**Se você não fez a aula 07, ou o seu projeto se perdeu:** você não perde esta aula por causa daquela. A pasta `_projeto_inicial_aula_08` é exatamente o resultado da aula 07, pronto.

### Onde colocar o projeto (leia, isto evita dor de cabeça)

**Se você recebeu um `.zip`, extraia primeiro.** Abrir arquivo de dentro de um zip faz o VS Code abrir em modo leitura, e nada do que você digitar será salvo. Botão direito no zip → *Extrair tudo*.

**Crie uma pasta `C:\dev`** e trabalhe lá dentro. Não é frescura:

- **sem espaço e sem acento no caminho** — `C:\Users\João Pedro\Área de Trabalho\` quebra ferramenta Node de vez em quando, e o erro não diz que o problema é o nome;
- **fora do OneDrive e da Área de Trabalho** — o OneDrive tenta sincronizar as ~200 MB de `node_modules`, trava a máquina e às vezes corrompe arquivo.

**Agora:** copie a pasta **`_projeto_inicial_aula_08`** para dentro de `C:\dev` e **renomeie a cópia para `painel-tipado`**.

Trabalhe sempre **na cópia**. A pasta original fica intacta, e se algo der muito errado você recomeça sem perder nada.

**Abra a pasta no VS Code:** **File → Open Folder → `painel-tipado`**.

### Confira em que terminal você está (30 segundos, e evita um estrago invisível)

Abra o terminal do VS Code: **Terminal → New Terminal**.

Olhe a **listinha do lado direito** do painel de terminal. Tem de estar escrito **`powershell`** ou **`pwsh`**.

**Está escrito `bash`, `cmd` ou `Git Bash`?** Troque, e troque agora:

1. clique na **setinha `˅`** ao lado do botão `+`, no canto direito do painel de terminal;
2. **Select Default Profile** → escolha **PowerShell**;
3. feche o terminal (ícone da lixeira) e abra um novo.

> ⚠️ **Por que isso importa tanto.** Os comandos desta aula usam a barra invertida do Windows (`src\components\Chamada`). No PowerShell isso funciona. **No Git Bash não dá erro — dá errado:** ele cria uma pasta chamada `srccomponentsChamada` e segue como se nada tivesse acontecido. Você só descobre quatro passos depois, quando a tela quebra, e aí não tem como relacionar uma coisa com a outra.

**E confirme que você está na pasta certa.** O prompt do terminal tem de terminar com `\painel-tipado>`. Se não terminar, você abriu a pasta errada no VS Code — feche e faça *File → Open Folder* de novo, escolhendo a `painel-tipado`.

💻 **No terminal:**
```powershell
dir package.json
```

✅ Tem de listar o arquivo. Se responder que não encontrou, você não está na raiz do projeto.

> 📌 **Dois vocabulários que eu vou usar o tempo todo:**
>
> **"Raiz do projeto"** é a pasta `painel-tipado` em si — o nível onde moram o `package.json`, o `index.html` e o `vite.config.ts`. **Não** é a pasta `src`. Quando eu disser "na raiz", é esse nível.
>
> **Arquivos que começam com ponto** (`.gitignore`, `.nvmrc`, `.oxlintrc.json`) existem e são normais, mas são fáceis de perder de vista no explorador do VS Code. O jeito rápido de achar qualquer arquivo: **`Ctrl+P`** e digite parte do nome.

### Instale as bibliotecas (só se for cópia nova)

💻 **No terminal:**
```powershell
npm install
```

> 💡 **O que é normal aparecer** e não é problema: o número de pacotes varia (`added 176 packages`, `added 183 packages` — tanto faz); linhas amarelas de `npm warn deprecated`; e uma linha dizendo `N vulnerabilities`. **Ignore as três.** E **não rode `npm audit fix`** — ele mexe nas versões e é capaz de quebrar o projeto de verdade.
>
> Se ficar um ou dois minutos parado sem imprimir nada, **está funcionando** — ele está baixando. Só vá atrás se passar de uns cinco minutos.

### Ligue o servidor

💻 **No terminal:**
```powershell
npm run dev
```

Ele imprime um endereço parecido com `http://localhost:5173`. **Abra no navegador** — dá para segurar `Ctrl` e clicar no link, direto do terminal. *(Se você ficar olhando só o terminal, vai achar que não aconteceu nada.)*

✅ Painel no ar, duas abas (**Chamada** / **Entregas**), placar **"Presentes: 3 de 4"**. 🤞

**Agora abra um SEGUNDO terminal.** Clique no botão **`+`** no canto direito do painel de terminal. Você vai ver **dois** itens na listinha da direita.

Daqui em diante eu chamo de:

- **terminal da tomada** — o primeiro, o que está rodando o `npm run dev`. **Ele fica ocupado**; não dá para digitar nada nele.
- **terminal de trabalho** — o segundo, onde vão todos os outros comandos (criar pasta, `npm run build`, `git`).

> ⚠️ **Se você digitar no terminal errado, não acontece nada e não aparece erro nenhum** — o servidor simplesmente engole a tecla. É um dos travamentos mais frustrantes que existem, porque parece que o comando "não funciona". Quando um comando parecer que não fez nada, a primeira suspeita é essa.

### Git — precisa mesmo? (30 segundos)

💻 **No terminal de trabalho:**
```powershell
git --version
```

**Respondeu uma versão?** Ótimo. Se esta é a primeira vez que você usa git nesta máquina, diga quem você é **agora** — sem isso o `git commit` falha com uma mensagem grande e assustadora (`*** Please tell me who you are`):

💻 **No terminal de trabalho:**
```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

**Respondeu `'git' não é reconhecido`?** Para **esta aula** não tem problema nenhum: os blocos marcados com 📌 são opcionais e nenhum ✅ depende deles. Pule e siga.

> ⚠️ **Mas guarde isto:** a **entrega da Semana 08, que vale nota**, pede um commit no seu projeto. Então em algum momento você vai precisar do git. Instale em [git-scm.com](https://git-scm.com/) quando puder — ou me chame, que eu instalo com você em cinco minutos. **Não deixe isso ser o motivo de perder a entrega.**

> 💡 **Se você nunca usou git**, vale fazer os 📌 desta aula para treinar o gesto num lugar onde errar não custa nada — e chegar na entrega com a mão já acostumada.

---

# PARTE 1 — o estilo vira sistema

---

## 01 · Conte os valores soltos

> 📸 **Antes de qualquer coisa: tire um print da tela do painel.** No Windows, `Win + Shift + S` → selecione a janela do navegador → o print vai para a área de transferência; cole num Paint ou num Word e deixe aberto num canto.
>
> **Por quê:** o checkpoint do passo 03 é *"a tela não pode ter mudado"*. Entre aqui e lá se passam uns 25 minutos colando CSS, e ninguém lembra o tom exato de um azul depois disso. Sem o print, esse checkpoint — que é o mais importante da Parte 1 — vira chute.

**O que você vai fazer:** medir o tamanho do problema, antes de resolver. Nenhum arquivo muda neste passo.

Abra o `src/index.css` e dê uma olhada. É uma **folha global**: uma lista de regras, com valores de cor repetidos em vários lugares. Vamos contar quantos.

💻 **No terminal de trabalho:**
```powershell
((Select-String -Path src\index.css -Pattern '#[0-9a-fA-F]{6}' -AllMatches).Matches | Measure-Object).Count
((Select-String -Path src\index.css -Pattern '#16223d' -AllMatches).Matches | Measure-Object).Count
((Select-String -Path src\index.css -Pattern '#8fe0b0' -AllMatches).Matches | Measure-Object).Count
```

✅ As três respostas: **27**, **2** e **3**.

São **27 valores de cor soltos** no arquivo. O azul do quadro (`#16223d`) aparece **2 vezes**; o verde do placar (`#8fe0b0`), **3 vezes**.

> 📖 **Pare e entenda — por que isso é um problema.** Imagine que o coordenador peça para mudar o verde do painel. Você teria que **caçar** `#8fe0b0` pelo arquivo, uma por uma. Esquecer **uma** deixa um pedaço da tela com a cor velha — e ninguém percebe até alguém reclamar. O problema não é escrever cor; é a mesma decisão estar escrita em vários lugares ao mesmo tempo.

> 💡 **Não está no PowerShell (Mac, Linux)?** Use o próprio VS Code: `Ctrl+F` no `index.css`, ligue o botão de **expressão regular** (`.*`) e busque `#[0-9a-fA-F]{6}`. Ele mostra a contagem no canto.

---

## 02 · Dar nome aos valores — `tokens.css`

**O que você vai fazer:** criar um arquivo onde cada valor ganha um **nome**.

💻 **No terminal de trabalho:**
```powershell
mkdir src\styles ; ni src\styles\tokens.css
```

📄 **No arquivo `src/styles/tokens.css`** — **crie e cole** (e salve com `Ctrl+S`; são **26 tokens**; cole todos — o próximo passo depende de todos existirem):

```css
/* tokens.css — o sistema de estilo do painel.
   Um lugar só para cor, raio e espaço. Trocar a identidade = trocar aqui. */
:root {
  /* ---- cor: fundo e texto ---- */
  --cor-fundo-1: #1b2a52;   /* topo do gradiente do corpo */
  --cor-fundo-2: #0d1420;   /* base do gradiente do corpo */
  --cor-superficie: #16223d; /* quadro, aba ativa */
  --cor-texto: #eaf0f7;     /* texto principal */
  --cor-texto-suave: #9db4d0; /* subtítulo do cabeçalho */
  --cor-borda: #2b3b5e;

  /* ---- cor: acento e status ---- */
  --cor-acento: #7cc0ff;     /* h1, contagem, aba ativa */
  --cor-ok-texto: #8fe0b0;   /* placar, "presente", "turma completa!" */
  --cor-ok-fundo: #143d2a;
  --cor-nope-texto: #ffcf9e; /* "ausente" */
  --cor-nope-fundo: #4a2a14;

  /* ---- cor: controles ---- */
  --cor-botao-texto: #cbd8ec;
  --cor-botao-fundo: #22314f;
  --cor-botao-borda: #4a5a7e;
  --cor-botao-hover: #2c3c60;
  --cor-aba-fundo: #101a30;
  --cor-aba-hover: #1a2740;

  /* ---- cor: foco (anel >= 3:1 contra toda superfície do painel) ---- */
  --cor-foco: #ffd54a;

  /* ---- raio ---- */
  --raio-cartao: 12px;
  --raio-aba: 8px;
  --raio-botao: 6px;
  --raio-pilula: 999px;

  /* ---- espaço ---- */
  --espaco-1: 4px;
  --espaco-2: 8px;
  --espaco-3: 12px;
  --espaco-4: 20px;
}
```

> 📖 **Pare e entenda — o que é um token.** Aquelas linhas que começam com `--` são **variáveis de CSS**. `--cor-superficie: #16223d;` quer dizer: *"neste projeto, 'cor de superfície' é este azul"*. A partir daí o resto do CSS não escreve mais o azul — escreve `var(--cor-superficie)`, que significa *"aquela cor que a gente combinou"*.
>
> E repare que os nomes falam do **papel**, não da aparência: `--cor-superficie`, não `--azul-escuro`. Por quê? Porque se um dia a superfície virar cinza, o nome `--azul-escuro` passa a mentir. Nome por papel sobrevive à mudança de cor; nome por cor, não.
>
> Repare também no `:root`. Ele quer dizer "o documento inteiro" — então os tokens valem para todo o CSS do projeto, de qualquer arquivo.

✅ **Na tela não muda nada.** O arquivo existe, mas ninguém o importou ainda. É o próximo passo.

---

## 03 · Ligar os tokens

**O que você vai fazer:** três coisas — importar os tokens, trocar os 27 valores por `var(...)`, e apagar um arquivo morto.

Primeiro o import. E a **ordem importa**: os tokens têm de entrar **antes** do `index.css`, senão o `index.css` pede uma variável que ainda não existe.

📄 **No arquivo `src/main.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Agora o `index.css`. É o mesmo arquivo de antes, com os 27 valores trocados por `var(--nome)`. Nenhuma regra nova, nenhuma regra a menos — **só os valores mudaram de forma**.

📄 **No arquivo `src/index.css`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: var(--cor-texto);
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(160deg, var(--cor-fundo-1), var(--cor-fundo-2));
}

.painel {
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 20px 56px;
}

.cabecalho h1 {
  margin: 0;
  font-size: 2rem;
  color: var(--cor-acento);
}

.cabecalho p {
  margin: var(--espaco-1) 0 24px;
  color: var(--cor-texto-suave);
  font-style: italic;
}

.quadro {
  background: var(--cor-superficie);
  border: 1px solid var(--cor-borda);
  border-radius: var(--raio-cartao);
  padding: 20px 22px;
}

.quadro h2 {
  margin: 0 0 var(--espaco-2);
  font-size: 1.3rem;
}

.placar {
  margin: 0 0 var(--espaco-1);
  font-weight: bold;
  color: var(--cor-ok-texto);
}

.completa {
  display: inline-block;
  margin: 0 0 16px;
  padding: 3px 12px;
  border-radius: var(--raio-pilula);
  background: var(--cor-ok-fundo);
  color: var(--cor-ok-texto);
  font-weight: bold;
  font-size: 0.95rem;
}

.quadro ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cartao {
  display: flex;
  align-items: center;
  gap: var(--espaco-3);
  padding: 10px 12px;
  border-top: 1px solid var(--cor-borda);
}

.cartao .nome {
  flex: 1;
}

.cartao .contagem {
  min-width: 40px;
  text-align: right;
  font-variant-numeric: tabular-nums;
  font-weight: bold;
  color: var(--cor-acento);
}

.badge {
  min-width: 92px;
  text-align: center;
  display: inline-block;
  font-size: 0.95rem;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: var(--raio-pilula);
}

.badge.ok {
  background: var(--cor-ok-fundo);
  color: var(--cor-ok-texto);
}

.badge.nope {
  background: var(--cor-nope-fundo);
  color: var(--cor-nope-texto);
}

.cartao button {
  min-width: 150px;
  text-align: center;
  border: 1px solid var(--cor-botao-borda);
  background: var(--cor-botao-fundo);
  color: var(--cor-botao-texto);
  border-radius: var(--raio-botao);
  padding: 6px 10px;
  cursor: pointer;
}

.cartao button:hover {
  background: var(--cor-botao-hover);
}

.abas {
  display: flex;
  gap: var(--espaco-2);
  margin: 0 0 16px;
}

.aba {
  border: 1px solid var(--cor-borda);
  background: var(--cor-aba-fundo);
  color: var(--cor-botao-texto);
  border-radius: var(--raio-aba) var(--raio-aba) 0 0;
  padding: 8px 18px;
  cursor: pointer;
  font-size: 0.95rem;
}

.aba:hover {
  background: var(--cor-aba-hover);
}

.aba.ativa {
  background: var(--cor-superficie);
  color: var(--cor-acento);
  border-bottom: 3px solid var(--cor-acento);
  font-weight: bold;
}
```

E agora apague o arquivo morto. Lembra do `src/App.css` que sobrou lá na aula 07? Ninguém importa ele desde então. Fora.

💻 **No terminal de trabalho:**
```powershell
Remove-Item src\App.css
((Select-String -Path src\index.css -Pattern '#[0-9a-fA-F]{6}' -AllMatches).Matches | Measure-Object).Count
npm run build
```

✅ A contagem de hex agora é **0**, e o build sai `✓ built`.

### 🚦 O teste que vale esta parte inteira: **A TELA NÃO PODE TER MUDADO**

Volte ao navegador e compare com o **print que você tirou no passo 01**. Olhe o azul do quadro, o verde do placar, o azul do título, o espaçamento entre os cartões.

✅ **Nada mudou.** Nenhum pixel. *(No gabarito isso foi medido de verdade: uma foto da tela antes, uma depois, comparadas pixel a pixel — **0 pixels** de diferença em 990.000. Mas só porque os **26** tokens estavam todos lá.)*

> 📖 **Pare e entenda — o que é refatorar.** Você acabou de fazer uma **refatoração**: mudou o código por dentro sem mudar nada por fora. Se a tela tivesse mudado, não seria refatoração — seria bug. **Se a sua tela mudou, faltou um token:** você colou só parte do `tokens.css`, ou colou o `index.css` sem colar o `tokens.css` antes.

📌 **git (opcional):**
```powershell
git add -A ; git commit -m "refactor: css vira sistema de tokens"
```

> ⭐ **Quer ver o ganho na prática?** No **`src/styles/tokens.css`** (cuidado: no `index.css` também tem um `:root`, não é lá), troque o valor de `--cor-acento` por `#ff8fa3`. Salve e olhe a tela: o título, os números das entregas e a aba ativa mudam **todos juntos**. Uma linha, o painel inteiro. Depois desfaça.

---

## 04 · A busca na Chamada — de propósito sem rótulo

**O que você vai fazer:** um campo de busca na tela de Chamada. Ele vai nascer **funcionando e inacessível** — e isso é de propósito. No passo 05 você conserta.

📄 **No arquivo `src/components/Chamada/index.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
import { useState } from 'react'
import type { Aluno } from '../../types/aluno'
import CartaoPresenca from '../CartaoPresenca'

interface ChamadaProps {
  alunos: Aluno[]
  onPresenca: (id: number) => void
}

function Chamada({ alunos, onPresenca }: ChamadaProps) {
  const [busca, setBusca] = useState('')

  // O placar deriva da TURMA INTEIRA (alunos) — nunca da lista filtrada.
  const presentes = alunos.filter(aluno => aluno.presente).length
  const todosPresentes = alunos.length > 0 && alunos.every(aluno => aluno.presente)

  // A busca filtra APENAS o que a <ul> renderiza.
  const termo = busca.trim().toLowerCase()
  const visiveis = termo === ''
    ? alunos
    : alunos.filter(aluno => aluno.nome.toLowerCase().includes(termo))

  return (
    <section className="quadro">
      <h2>Chamada</h2>
      <p className="placar">Presentes: {presentes} de {alunos.length}</p>
      {todosPresentes && <p className="completa">turma completa!</p>}

      <div className="busca">
        <input id="busca-aluno" type="search" value={busca}
               onChange={evento => setBusca(evento.target.value)} placeholder="digite um nome" />
      </div>

      <ul>
        {visiveis.map(aluno => (
          <CartaoPresenca key={aluno.id} aluno={aluno} onPresenca={onPresenca} />
        ))}
      </ul>
    </section>
  )
}

export default Chamada
```

> 📖 **Pare e entenda — o campo controlado.** Isto é novidade; você não viu nas semanas anteriores. São três peças que trabalham juntas:
>
> ```tsx
> const [busca, setBusca] = useState('')
> ...
> <input value={busca} onChange={evento => setBusca(evento.target.value)} />
> ```
>
> Na Semana 06, o campo era dono do próprio valor — o React nem sabia o que tinha dentro dele. Agora é o contrário: **o React é dono do valor**, e o campo só **mostra** o que o React manda. O `onChange` dispara a cada tecla, e `evento.target.value` é o texto que está no campo naquele instante.
>
> *(O trecho acima é resumido, para ler. O `<input>` de verdade que você colou tem também `id`, `type` e `placeholder`. Não cole o resumo.)*

Agora o estilo do campo. Aqui você **acrescenta** no fim do arquivo, não substitui.

> ⚠️ **Como ir ao fim do arquivo de verdade.** Clique dentro do `src/index.css` e aperte **`Ctrl+End`** — o cursor pula para a última linha. **Não role com a roda do mouse**: é muito fácil parar no meio e colar no lugar errado.
>
> ✅ **Confira que você está mesmo no fim:** a última regra do arquivo tem de ser `.aba.ativa { ... }`. Se a última coisa que você vê é outra coisa, você não está no fim.
>
> Agora pule uma linha e cole embaixo. *(Esta ordem importa: os passos 07 e 10 dependem de saber qual é a última regra do arquivo.)*

📄 **No fim do arquivo `src/index.css`** — **ACRESCENTE** (não substitua nada):

```css
.busca {
  display: flex;
  flex-direction: column;
  gap: var(--espaco-1);
  margin: 0 0 16px;
}

.busca label {
  font-size: 0.9rem;
  color: var(--cor-texto-suave);
}

.busca input {
  border: 1px solid var(--cor-botao-borda);
  background: var(--cor-aba-fundo);
  color: var(--cor-texto);
  border-radius: var(--raio-botao);
  padding: 8px 10px;
  font-size: 0.95rem;
}
```

💻 **No terminal de trabalho:**
```powershell
npm run build ; npm run lint
```

✅ **Sucesso é isto:** o build termina com **`✓ built in ...ms`**, e o lint termina com **`Found 0 warnings and 0 errors`**. 🤞

**Deu erro?** Ele aparece com o nome do arquivo e o número da linha. Quase sempre é uma edição parcial que saiu do lugar — **ache o 🆘 do passo em que você mexeu naquele arquivo e cole o arquivo inteiro por cima**. É exatamente para isso que os blocos 🆘 existem.

### 🚦 Checkpoint — a regra de ouro dos valores derivados

No navegador, digite **`bia`** no campo de busca.

✅ A lista mostra **só a Bia** · e o placar **continua dizendo "Presentes: 3 de 4"**.

> 📖 **Pare e entenda — por que o placar não pode filtrar.** Olhe as duas partes do código:
>
> ```tsx
> const presentes = alunos.filter(aluno => aluno.presente).length      // turma INTEIRA
> const visiveis = ... alunos.filter(aluno => aluno.nome...)           // só a <ul>
> ```
>
> O placar deriva da **turma inteira**. A busca filtra **só a lista que aparece**. Se o placar derivasse da lista filtrada, buscar o nome de um aluno presente faria o painel anunciar **"turma completa!"** — uma mentira. Este é um bug clássico e ele nasce de derivar do lugar errado.

### O primeiro scan de acessibilidade

Você tem **duas opções**, e as duas servem. Escolha uma agora e **use a mesma até o fim da aula** — o passo 10 vai comparar dois resultados, e comparar resultado de ferramentas diferentes não prova nada.

**Opção A — axe DevTools** (é o que eu uso em sala). É uma extensão gratuita:

1. abra a **Chrome Web Store** e procure por **axe DevTools**, ou vá direto em [chromewebstore.google.com](https://chromewebstore.google.com/) e busque `axe DevTools`;
2. clique em **Usar no Chrome** → **Adicionar extensão**;
3. volte ao painel, aperte `F12`, e vai aparecer uma aba nova chamada **axe DevTools**;
4. clique em **Scan all of my page**.

*(Na primeira vez ele pode pedir e-mail ou oferecer uma versão paga — dá para usar a gratuita sem pagar nada.)*

**Opção B — Lighthouse**, que **já vem no Chrome** e não precisa instalar nada:

1. `F12` → aba **Lighthouse**;
2. em *Categories*, desmarque tudo e deixe só **Accessibility**;
3. **Analyze page load**.

✅ **Com o axe: 0 violações.** ✅ **Com o Lighthouse: nota alta, provavelmente 100.**

**Guarde esse resultado — anote num papel.** Não vou explicar agora; o passo 10 explica, e explica bem.

> 🚫 **Não consegue instalar extensão** (notebook da escola, sem permissão de administrador)? Use o Lighthouse: ele já está no navegador, não precisa de permissão nenhuma, e serve perfeitamente para o que a aula vai provar.

---

## 05 · ✍️ O rótulo

**O que você vai fazer:** dar um nome ao campo de busca. É **uma linha** — e você digita, não cola.

### Primeiro, entenda o problema que você está resolvendo

O campo funciona. Ele até tem um `placeholder` dizendo "digite um nome", e um leitor de tela consegue anunciar isso. **Mas faça este teste:** clique no campo e digite a letra `b`.

**O `placeholder` sumiu.**

Agora imagine alguém que usa leitor de tela, foi interrompido no meio — um barulho, uma ligação — e volta ao computador. O campo tem uma letra dentro. **Não existe mais nada na tela dizendo o que aquele campo é.** O `placeholder` é um texto que desaparece justamente quando a pessoa mais precisaria dele.

### Agora conserte

Abra o **`src/components/Chamada/index.tsx`** e ache o `<div className="busca">`.

**ANTES** — é o trecho inteiro que está lá agora, do `<div>` ao `</div>`:

```tsx
      <div className="busca">
        <input id="busca-aluno" type="search" value={busca}
               onChange={evento => setBusca(evento.target.value)} placeholder="digite um nome" />
      </div>
```

**DEPOIS** — ✍️ **digite a linha do `<label>`**, que entra logo abaixo do `<div>`:

```tsx
      <div className="busca">
        <label htmlFor="busca-aluno">Buscar aluno</label>
        <input id="busca-aluno" type="search" value={busca}
               onChange={evento => setBusca(evento.target.value)} placeholder="digite um nome" />
      </div>
```

> ⚠️ **Como fazer a troca com segurança.** Estes dois trechos são **fechados** (começam no `<div>` e terminam no `</div>`), então você pode selecionar o ANTES no seu arquivo e colar o DEPOIS por cima sem medo. Mas o melhor mesmo é o gesto pequeno: clique no **fim** da linha `<div className="busca">`, aperte **Enter**, e digite só a linha do `<label>`. Depois `Ctrl+S`.

> 📖 **Pare e entenda — a amarra.** O `htmlFor` do `<label>` e o `id` do `<input>` são **o mesmo texto**: `busca-aluno`. É isso que amarra os dois. Se um mudar e o outro não, a amarra **quebra em silêncio** — nada avisa, nada dá erro, e o campo volta a ser anônimo.
>
> **E por que `htmlFor` e não `for`?** Pelo mesmo motivo de `className` e não `class`: `for` é palavra reservada do JavaScript (é o `for` do laço de repetição). O React precisou de outro nome.

### 🚦 Checkpoint — dá para conferir sem leitor de tela nenhum

Clique no **texto** "Buscar aluno" — no texto, não no campo.

✅ **O cursor pula para dentro do campo.** Se pulou, a amarra está certa. Se não pulou, confira se o `htmlFor` e o `id` são exatamente o mesmo texto.

*(Quer a prova formal? `F12` → **Elements** → selecione o `<input>` → painel **Accessibility** → **Computed Properties** → **Name**. Antes era `"digite um nome"`, vindo do placeholder. Agora é **`"Buscar aluno"`**, vindo do label.)*

> 💥 **Agora a parte que incomoda.** Volte no passo 04: o axe já estava **verde** ali, **antes** do rótulo existir. O campo estava sem rótulo, dependendo de um texto que some, e a ferramenta disse "0 violações".
>
> **Calar a ferramenta não é a mesma coisa que resolver o problema.** Guarde isso; o passo 10 leva essa ideia até o fim.

🆘 **Se travou** e o arquivo virou bagunça, este é o `src/components/Chamada/index.tsx` **inteiro**, como ele tem de estar ao fim deste passo. `Ctrl+A` e cole por cima:

```tsx
import { useState } from 'react'
import type { Aluno } from '../../types/aluno'
import CartaoPresenca from '../CartaoPresenca'

interface ChamadaProps {
  alunos: Aluno[]
  onPresenca: (id: number) => void
}

function Chamada({ alunos, onPresenca }: ChamadaProps) {
  const [busca, setBusca] = useState('')

  // O placar deriva da TURMA INTEIRA (alunos) — nunca da lista filtrada.
  const presentes = alunos.filter(aluno => aluno.presente).length
  const todosPresentes = alunos.length > 0 && alunos.every(aluno => aluno.presente)

  // A busca filtra APENAS o que a <ul> renderiza.
  const termo = busca.trim().toLowerCase()
  const visiveis = termo === ''
    ? alunos
    : alunos.filter(aluno => aluno.nome.toLowerCase().includes(termo))

  return (
    <section className="quadro">
      <h2>Chamada</h2>
      <p className="placar">Presentes: {presentes} de {alunos.length}</p>
      {todosPresentes && <p className="completa">turma completa!</p>}

      <div className="busca">
        <label htmlFor="busca-aluno">Buscar aluno</label>
        <input id="busca-aluno" type="search" value={busca}
               onChange={evento => setBusca(evento.target.value)} placeholder="digite um nome" />
      </div>

      <ul>
        {visiveis.map(aluno => (
          <CartaoPresenca key={aluno.id} aluno={aluno} onPresenca={onPresenca} />
        ))}
      </ul>
    </section>
  )
}

export default Chamada
```

💻 **No terminal de trabalho:**
```powershell
npm run build ; npm run lint
```

✅ **Sucesso é isto:** o build termina com **`✓ built in ...ms`**, e o lint termina com **`Found 0 warnings and 0 errors`**. 🤞

**Deu erro?** Ele aparece com o nome do arquivo e o número da linha. Quase sempre é uma edição parcial que saiu do lugar — **ache o 🆘 do passo em que você mexeu naquele arquivo e cole o arquivo inteiro por cima**. É exatamente para isso que os blocos 🆘 existem.

📌 **git (opcional):**
```powershell
git add -A ; git commit -m "feat: busca de aluno com label acessivel"
```

---

## 06 · Medir a cor (não se supõe, se mede)

**O que você vai fazer:** aprender a medir contraste. Nenhum arquivo muda.

Acessibilidade não se supõe, se **mede**. E o primeiro número que se mede é o **contraste** entre um texto e o fundo dele.

**Medindo no próprio painel:** `F12` → aba **Elements** → clique no **placar** ("Presentes: 3 de 4") → painel **Styles** → clique no **quadradinho colorido** ao lado da propriedade `color`. O seletor de cor que abre mostra o **Contrast ratio**.

✅ **10,12:1** — passa com folga. Os pisos são **4,5:1** para texto normal e **3:1** para texto grande.

> ⚠️ **Não apareceu nenhum "Contrast ratio"?** Acontece: às vezes ele fica escondido atrás de uma setinha (clique para expandir), e em algumas versões do Chrome ele **não calcula quando a cor vem de uma variável** — que é justamente o nosso caso depois do passo 03.
>
> **Isso não quer dizer que você errou o passo 03.** Se não aparecer, meça na régua do WebAIM (logo abaixo): cole **`#8fe0b0`** em *Foreground* e **`#16223d`** em *Background* — são a cor do placar e a do quadro. Dá o mesmo 10,12:1.

> ⚠️ **Meça o placar, não o subtítulo.** O subtítulo ("feito por...") fica sobre o **gradiente** do fundo, e sobre gradiente a ferramenta **se recusa a decidir** — ela não sabe qual ponto do gradiente considerar. Guarde isso: é exatamente o `1 incomplete` que vai aparecer no passo 10.
>
> ⚠️ **E não procure contraste no painel _Accessibility_.** Ele mostra a árvore e os atributos ARIA; não tem seção de contraste. O número vive no seletor de cor, dentro de *Styles*.

**A régua para qualquer par de cores** — inclusive as que o DevTools não consegue medir: abra **[webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)**. Cole `#9aa0a6` em *Foreground* e `#ffffff` em *Background*.

✅ **2,64:1 — reprova** nos dois pisos.

> 💭 **E olhe que parecia perfeitamente legível.** Esse cinza sobre branco está em metade dos projetos que eu recebo. **O olho não mede. A régua mede.** É essa régua que você vai usar no checklist de acessibilidade do seu projeto.

☕ **Bom ponto para parar**, se você quiser dividir a aula em dois. A Parte 2 começa do zero, só precisa do `npm run dev` ligado.

---

# PARTE 2 — foco, aviso e o clímax

---

## 07 · ✍️ Foco visível

**O que você vai fazer:** fazer o painel funcionar para quem não usa mouse. São **6 linhas** e você digita.

### Primeiro, sinta o problema

**Largue o mouse.** Sério, tire a mão dele.

> ⚠️ **Antes de tabular: clique uma vez numa área vazia da página** — numa margem, fora de qualquer botão ou campo. Se você vier direto do VS Code ou da barra de endereço, os primeiros `Tab` vão passear pela **interface do navegador** (favoritos, barra de endereço) e não pela sua página, e você vai contar paradas erradas achando que a regra não funcionou.

Agora aperte **Tab** repetidamente e acompanhe onde o cursor está.

O caminho é: aba Chamada → aba Entregas → campo de busca → os 4 botões dos alunos. São **7 paradas**.

**Você consegue ver onde está o foco?** O anel que o navegador desenha sozinho é fino e azul — sobre o nosso fundo azul-escuro, ele quase desaparece. Afaste-se um pouco da tela e tabule de novo: a essa distância não dá para ver nada.

**Esse é o problema.** Quem navega por teclado — por deficiência motora, por preferência, ou porque o mouse quebrou — está se movendo às cegas pelo seu painel.

### Agora conserte

> ⚠️ **De novo: `Ctrl+End` para ir ao fim do arquivo.** A última regra agora tem de ser a `.busca input { ... }`, que você acrescentou no passo 04. Se for outra, você não está no fim — e o passo 10 depende disto.

✍️ **Digite estas 6 linhas no FIM do `src/index.css`** (não cole — é o conceito da semana):

```css
button:focus-visible,
.aba:focus-visible,
.busca input:focus-visible {
  outline: 3px solid var(--cor-foco);
  outline-offset: 2px;
}
```

> 📖 **Pare e entenda — cada peça dessas 6 linhas:**
>
> - **`:focus-visible` e não `:focus`.** O anel aparece para quem chegou ali pelo **teclado**, não para quem clicou com o mouse. É o navegador que decide, e ele acerta.
> - **`outline` e não `border`.** O anel é desenhado **por fora** do elemento e não ocupa espaço — não empurra o layout, não faz a tela "pular" quando você tabula.
> - **`outline-offset: 2px`** afasta o anel da borda do botão, para os dois não se confundirem.
> - **A cor é o token `--cor-foco`**, não um hex solto. E esse âmbar não foi escolhido no olho: foi **medido** contra todas as superfícies do painel. No pior caso — o botão com o mouse em cima — ele dá **7,7:1**, contra um piso exigido de 3:1.

✅ **Tabule de novo:** anel âmbar de 3px, nítido, em **cada uma das 7 paradas**. Agora dá para ver de longe.

✅ **Agora clique** num botão com o mouse: **o anel não aparece.** É o `:focus-visible` fazendo o trabalho — anel para quem navega de teclado, sem poluir a tela de quem clica.

> ⭐ **Quer testar o seu olho contra a régua?** No **`src/styles/tokens.css`**, troque o valor de `--cor-foco` por outra cor que você ache bonita. Tabule. Depois **meça** essa cor no medidor do passo 06 contra `#16223d` (o quadro), `#22314f` (o botão) **e `#2c3c60`** (o botão com o mouse em cima — é o pior caso). Passou de 3:1 nos três? Se não passou, você acabou de descobrir por que a cor do anel não se escolhe no olho.

---

## 08 · ✍️ A região viva — o aviso que ninguém ouve

**O que você vai fazer:** fazer o leitor de tela anunciar o "turma completa!". São **três linhas** no TSX e **duas** no CSS.

### Primeiro, o problema

Marque a presença de todo mundo. Aparece **"turma completa!"** na tela, em verde.

Para quem enxerga, ótimo. Para quem usa leitor de tela: **silêncio absoluto.** O leitor não fala nada.

> 📖 **Pare e entenda — por que o leitor não fala.** O leitor de tela **não relê a página** a cada mudança. Se ele fizesse isso, seria impossível usar qualquer site. Ele só anuncia mudanças que acontecem dentro de uma **região que ele já estava vigiando**.
>
> E o nosso `<p className="completa">` **não existia** até o momento em que a mensagem apareceu. Ele nasceu junto com a mensagem. Não dava para o leitor estar vigiando algo que ainda não existia.
>
> **A solução:** a região precisa **existir antes**, vazia, marcada como "fique de olho aqui". A mensagem entra **dentro** dela.

### Agora conserte — o TSX

Em `src/components/Chamada/index.tsx`, ache a linha do aviso.

**ANTES** — é **uma** linha (apague esta):

```tsx
      {todosPresentes && <p className="completa">turma completa!</p>}
```

**DEPOIS** — ✍️ digite estas **três**:

```tsx
      <p className="aviso" role="status" aria-live="polite">
        {todosPresentes && <span className="completa">turma completa!</span>}
      </p>
```

> 📖 **Pare e entenda — as três decisões:**
>
> - **O `<p>` é a REGIÃO.** Existe sempre, mesmo vazio, marcado com `role="status"`. É isso que o leitor fica vigiando.
> - **O `<span>` é a MENSAGEM.** Entra e sai conforme a turma fica completa ou não. Como ela entra **dentro** de uma região vigiada, o leitor anuncia.
> - **Por que `status`/`polite` e não `alert`/`assertive`?** Porque o aviso é **positivo**, não urgente. `polite` quer dizer: *"espere a pessoa terminar de ouvir o que está ouvindo, e depois fale"*. `assertive` **interrompe** na hora — e isso se reserva para erro, não para boa notícia.

### E o CSS

> ⚠️ **Esta é a única edição da aula no MEIO de um arquivo** — e é a que faz mais estrago se sair do lugar. Ache a regra sem caçar com o olho: no `src/index.css`, aperte **`Ctrl+F`**, digite `.completa {`, aperte **Enter** e depois **Esc**. O cursor fica exatamente na regra certa.

**ANTES** — a regra inteira, da chave que abre à que fecha:

```css
.completa {
  display: inline-block;
  margin: 0 0 16px;
  padding: 3px 12px;
  border-radius: var(--raio-pilula);
  background: var(--cor-ok-fundo);
  color: var(--cor-ok-texto);
  font-weight: bold;
  font-size: 0.95rem;
}
```

**DEPOIS** — duas linhas novas **acima** da regra, e a margem do `.completa` vira `0`:

```css
.aviso { margin: 0 0 16px; }
.aviso:empty { margin: 0; }

.completa {
  display: inline-block;
  margin: 0;
  padding: 3px 12px;
  border-radius: var(--raio-pilula);
  background: var(--cor-ok-fundo);
  color: var(--cor-ok-texto);
  font-weight: bold;
  font-size: 0.95rem;
}
```

> ⚠️ **Estes dois trechos são fechados** — a chave `{` e a `}` estão as duas ali. Selecione o ANTES no seu arquivo (do `.completa {` até o `}` que fecha) e cole o DEPOIS por cima. **Confira depois de colar que ainda existe um `}` sozinho fechando a regra.** Um `{` sem `}` no CSS não dá erro no terminal: o navegador simplesmente ignora o resto do arquivo e o painel fica sem estilo nenhum.

> 📖 **Pare e entenda:** a margem **migrou** da mensagem para a região — se as duas tivessem margem, ficariam 16px duplicados. E `:empty` quer dizer *"sem nada dentro"*: assim a região vazia não deixa um buraco na tela quando não há mensagem.

💻 **No terminal de trabalho:**
```powershell
npm run build ; npm run lint
```

✅ **Sucesso é isto:** o build termina com **`✓ built in ...ms`**, e o lint termina com **`Found 0 warnings and 0 errors`**. 🤞

**Deu erro?** Ele aparece com o nome do arquivo e o número da linha. Quase sempre é uma edição parcial que saiu do lugar — **ache o 🆘 do passo em que você mexeu naquele arquivo e cole o arquivo inteiro por cima**. É exatamente para isso que os blocos 🆘 existem.

✅ **A prova, sem precisar de leitor de tela:** `F12` → **Elements** → selecione o `<p class="aviso">` → painel **Accessibility**.

- **Com alguém ausente:** o nó aparece como `status`, **sem filhos**. A região existe e está vazia.
- **Marque a presença de todos:** o nó `status` ganha um filho **`StaticText: "turma completa!"`**.

O **nome** da região continua vazio — o que mudou foi o **conteúdo**. E é mudança de conteúdo dentro de região vigiada que o leitor anuncia.

✅ E confira na tela: com alguém ausente, a região existe, está vazia, e **não deixa buraco** no layout.

🆘 **Se travou**, estes são os dois arquivos inteiros — cole por cima (`Ctrl+A`, cole, `Ctrl+S`). Eles **já incluem** tudo o que você fez até aqui: a busca do passo 04, o rótulo do 05 e a regra de foco do 07. **Não digite nada de novo depois de colar.**

📄 `src/components/Chamada/index.tsx`:

```tsx
import { useState } from 'react'
import type { Aluno } from '../../types/aluno'
import CartaoPresenca from '../CartaoPresenca'

interface ChamadaProps {
  alunos: Aluno[]
  onPresenca: (id: number) => void
}

function Chamada({ alunos, onPresenca }: ChamadaProps) {
  const [busca, setBusca] = useState('')

  // O placar deriva da TURMA INTEIRA (alunos) — nunca da lista filtrada.
  const presentes = alunos.filter(aluno => aluno.presente).length
  const todosPresentes = alunos.length > 0 && alunos.every(aluno => aluno.presente)

  // A busca filtra APENAS o que a <ul> renderiza.
  const termo = busca.trim().toLowerCase()
  const visiveis = termo === ''
    ? alunos
    : alunos.filter(aluno => aluno.nome.toLowerCase().includes(termo))

  return (
    <section className="quadro">
      <h2>Chamada</h2>
      <p className="placar">Presentes: {presentes} de {alunos.length}</p>
      <p className="aviso" role="status" aria-live="polite">
        {todosPresentes && <span className="completa">turma completa!</span>}
      </p>

      <div className="busca">
        <label htmlFor="busca-aluno">Buscar aluno</label>
        <input id="busca-aluno" type="search" value={busca}
               onChange={evento => setBusca(evento.target.value)} placeholder="digite um nome" />
      </div>

      <ul>
        {visiveis.map(aluno => (
          <CartaoPresenca key={aluno.id} aluno={aluno} onPresenca={onPresenca} />
        ))}
      </ul>
    </section>
  )
}

export default Chamada
```

📄 `src/index.css`:

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: var(--cor-texto);
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(160deg, var(--cor-fundo-1), var(--cor-fundo-2));
}

.painel {
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 20px 56px;
}

.cabecalho h1 {
  margin: 0;
  font-size: 2rem;
  color: var(--cor-acento);
}

.cabecalho p {
  margin: var(--espaco-1) 0 24px;
  color: var(--cor-texto-suave);
  font-style: italic;
}

.quadro {
  background: var(--cor-superficie);
  border: 1px solid var(--cor-borda);
  border-radius: var(--raio-cartao);
  padding: 20px 22px;
}

.quadro h2 {
  margin: 0 0 var(--espaco-2);
  font-size: 1.3rem;
}

.placar {
  margin: 0 0 var(--espaco-1);
  font-weight: bold;
  color: var(--cor-ok-texto);
}

.aviso { margin: 0 0 16px; }
.aviso:empty { margin: 0; }

.completa {
  display: inline-block;
  margin: 0;
  padding: 3px 12px;
  border-radius: var(--raio-pilula);
  background: var(--cor-ok-fundo);
  color: var(--cor-ok-texto);
  font-weight: bold;
  font-size: 0.95rem;
}

.quadro ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cartao {
  display: flex;
  align-items: center;
  gap: var(--espaco-3);
  padding: 10px 12px;
  border-top: 1px solid var(--cor-borda);
}

.cartao .nome {
  flex: 1;
}

.cartao .contagem {
  min-width: 40px;
  text-align: right;
  font-variant-numeric: tabular-nums;
  font-weight: bold;
  color: var(--cor-acento);
}

.badge {
  min-width: 92px;
  text-align: center;
  display: inline-block;
  font-size: 0.95rem;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: var(--raio-pilula);
}

.badge.ok {
  background: var(--cor-ok-fundo);
  color: var(--cor-ok-texto);
}

.badge.nope {
  background: var(--cor-nope-fundo);
  color: var(--cor-nope-texto);
}

.cartao button {
  min-width: 150px;
  text-align: center;
  border: 1px solid var(--cor-botao-borda);
  background: var(--cor-botao-fundo);
  color: var(--cor-botao-texto);
  border-radius: var(--raio-botao);
  padding: 6px 10px;
  cursor: pointer;
}

.cartao button:hover {
  background: var(--cor-botao-hover);
}

.abas {
  display: flex;
  gap: var(--espaco-2);
  margin: 0 0 16px;
}

.aba {
  border: 1px solid var(--cor-borda);
  background: var(--cor-aba-fundo);
  color: var(--cor-botao-texto);
  border-radius: var(--raio-aba) var(--raio-aba) 0 0;
  padding: 8px 18px;
  cursor: pointer;
  font-size: 0.95rem;
}

.aba:hover {
  background: var(--cor-aba-hover);
}

.aba.ativa {
  background: var(--cor-superficie);
  color: var(--cor-acento);
  border-bottom: 3px solid var(--cor-acento);
  font-weight: bold;
}

.busca {
  display: flex;
  flex-direction: column;
  gap: var(--espaco-1);
  margin: 0 0 16px;
}

.busca label {
  font-size: 0.9rem;
  color: var(--cor-texto-suave);
}

.busca input {
  border: 1px solid var(--cor-botao-borda);
  background: var(--cor-aba-fundo);
  color: var(--cor-texto);
  border-radius: var(--raio-botao);
  padding: 8px 10px;
  font-size: 0.95rem;
}

button:focus-visible,
.aba:focus-visible,
.busca input:focus-visible {
  outline: 3px solid var(--cor-foco);
  outline-offset: 2px;
}
```

---

## 09 · Ouça o painel falar

**O que você vai fazer:** operar um leitor de tela e ouvir — ou ler — o painel anunciar. Nenhum arquivo muda.

Este passo é o que transforma tudo o que você fez em algo concreto. Até aqui você confiou em mim; agora você vê.

> 🔇 **Antes de ligar qualquer coisa, saiba como CALAR.** Leitor de tela começa a falar alto e rápido no segundo em que abre, e isso assusta. **No NVDA, a tecla `Ctrl` cala na hora.** Para fechar de vez: `Insert` + `Q`. No Narrador do Windows: `Ctrl` + `Win` + `Enter` liga e desliga. Ponha o fone, se for tarde da noite.

**Opção A — NVDA** (gratuito, [nvaccess.org](https://www.nvaccess.org/)), com a tela em vez do áudio, que é bem mais fácil de acompanhar:

1. Baixe e execute o instalador. **Ele pede senha de administrador** — se o notebook não é seu e você não tem a senha, na primeira tela escolha **"Criar cópia portátil"** em vez de instalar. Funciona igual e não precisa de permissão.
2. Com o NVDA rodando, aperte `Insert` + `N` para abrir o menu.
3. Vá em **Tools → Speech Viewer**. *(Se você instalou em português, os nomes são **Ferramentas → Visualizador da fala** — é o mesmo item.)*

Abre uma janela que **escreve** tudo o que seria falado. Deixe ela num canto da tela.

*(A tecla `NVDA` dos manuais é o `Insert`, ou o `CapsLock` se você marcou essa opção na instalação.)*

**Opção B — Narrador do Windows**, que já vem instalado: `Ctrl` + `Win` + `Enter`.

**Opção C — VoiceOver**, se você estiver no Mac: `Cmd` + `F5`.

**Opção D — a árvore de acessibilidade**, do passo 08 (`F12` → Elements → Accessibility). Não fala, mas **mostra escrito** exatamente a mesma informação. Vale como evidência na folha do checklist, e não precisa instalar nada.

> ⚠️ **Se você estiver no Narrador e ele NÃO falar o "turma completa!", o problema provavelmente não é o seu código.** O Narrador é notoriamente irregular anunciando regiões `aria-live` no Chrome — às vezes fala, às vezes não. **Não saia mexendo no passo 08 por causa disso.** Confirme pela **Opção D**: se a árvore de acessibilidade mostrar o nó `status` ganhando o filho `StaticText: "turma completa!"`, o seu código está certo e o problema é a ferramenta. Se quiser ouvir de verdade, use o NVDA.

### Agora faça isto

**1.** Com o Speech Viewer (ou o leitor) ligado, **marque a presença do último aluno ausente**.

✅ **O leitor anuncia "turma completa!"** — o silêncio do começo do passo 08 acabou.

**2.** Ainda com ele ligado, aperte `Tab` até um botão "marcar falta" e aperte `Enter`.

✅ O leitor lê o **nome do botão** e o que aconteceu.

> 💭 **É assim que se descobre o que um botão "diz"** para quem não o enxerga. Guarde essa janela: é com ela que você prova acessibilidade no **seu** projeto, e é ela que responde perguntas do tipo *"o que este botão comunica quando está ativado?"*.

---

## 10 · 🎯 O clímax — a auditoria verde que mente

**Este é o passo mais importante da aula.** Leia com calma e faça de verdade — não dá para entender só lendo.

Use **a mesma ferramenta** que você escolheu no passo 04 — axe ou Lighthouse. O que a aula vai provar é que **o resultado não muda**; então tem de ser a mesma régua nas duas medições.

### (1) Rode o auditor no painel pronto

**Se você está no axe:**

✅ **0 violações.** Verde.

✅ **O número de checagens que passam subiu** em relação ao passo 04 — a página ganhou rótulo e região desde então. *(Na minha máquina foram 12 lá e 21 aqui; na sua os dois números podem ser outros.)*

✅ E **1 incomplete**: `color-contrast` — *"Element's background color could not be determined due to a background gradient."* É o subtítulo sobre o gradiente, do passo 06. **A própria ferramenta admite que não decidiu.** Guarde essa honestidade dela; ela é rara.

> 💡 **O seu número vai ser outro, e está tudo bem.** Ele muda com a versão da extensão e com quais famílias de regra estão ligadas nas opções dela. **Não pare por causa disso** — a regra do "pare no ✅" não vale para este número. O que esta aula vai provar não é o valor; é que ele é **o mesmo antes e depois**. Anote o seu, qualquer que seja, num papel.

**Se você está no Lighthouse:**

✅ **Nota de Acessibilidade alta — provavelmente 100.** Anote o número exato.

*(O Lighthouse não mostra "21 checagens" nem "1 incomplete" — ele mostra uma nota. Não tem problema: o que importa é o número que você anotou agora, para comparar daqui a pouco.)*

Tentador dar a aula por encerrada aqui. **Não.**

### (2) Agora quebre o painel de propósito

📄 **No FIM do `src/index.css`**, pule uma linha depois da última regra do arquivo — aquela de foco que você digitou no passo 07 — e digite:

```css
/* O GOLPE — vamos apagar isto em 2 minutos */
button:focus-visible, .aba:focus-visible, .busca input:focus-visible { outline: none; }
```

> 💡 **Por que no fim funciona?** No CSS, quando duas regras de mesmo peso dizem coisas diferentes sobre o mesmo elemento, **vence a última**. Como o golpe vem depois da regra de foco, ele a anula.

**Salve. Largue o mouse. Tabule.**

✅ **O foco sumiu.** Nas 7 paradas, todas. **Agora sim o painel está quebrado** para quem usa teclado — e quebrado de forma grave: a pessoa não tem como saber onde está.

### (3) Rode o auditor DE NOVO

Mesma ferramenta, mesma página, painel quebrado. Compare com o que você anotou.

**No axe:** ✅ **0 violações. O mesmo número de checagens. 1 incomplete.**

**No Lighthouse:** ✅ **A mesma nota. Provavelmente 100 de novo.**

**Idêntico.** Exatamente o mesmo resultado de antes.

*(E não é falta de sorte da ferramenta: o Lighthouse **não tem nenhuma auditoria de indicador de foco**, e o axe também não checa isso. A regra simplesmente não existe no conjunto que elas rodam.)*

### Deixe isso assentar por um minuto

Você quebrou o painel para todo mundo que navega por teclado. A ferramenta de auditoria continua dizendo **aprovado**.

> 💥 **A lição, e ela vale para o resto do curso:**
>
> **Verde quer dizer "nada errado entre as regras que ela sabe checar".** Não quer dizer "nada errado".
>
> A ferramenta não testou o teclado — que você acabou de quebrar. Não testou o leitor de tela. Não testou se o texto do rótulo faz sentido. Ela testou o que sabe testar, e disse a verdade sobre isso.
>
> **A ferramenta é o piso, não o teto.** Ela pega o que é automatizável e te economiza tempo. O que ela não pega, só a pessoa pega: largando o mouse, ligando o leitor, e usando.

> 🤞 **Se você fez o experimento e viu o resultado repetir com o painel quebrado, você entendeu a Semana 08 inteira.** Este é o momento da aula. **Reações coreana 🤞**

### (4) Agora desfaça

**Apague exatamente as 3 linhas** que você acabou de digitar — a do comentário `/* O GOLPE ... */`, a do `button:focus-visible, ...` e a linha em branco antes delas. E salve.

> ⚠️ **Cuidado para não apagar demais.** A regra legítima que fica logo acima tem **os mesmos seletores** (`button:focus-visible, .aba:focus-visible, .busca input:focus-visible`) — é fácil arrastar o mouse um pouco demais e levar as duas.
>
> ✅ **Como saber que ficou certo:** aperte `Ctrl+End`. O arquivo tem de terminar assim:
>
> ```css
>   outline: 3px solid var(--cor-foco);
>   outline-offset: 2px;
> }
> ```

✅ Tabule: o anel âmbar voltou nas 7 paradas.

**Sumiu o anel e você não sabe o que apagou?** Não perca tempo caçando — role até o 🆘 do passo 08 e cole o `src/index.css` inteiro por cima. Ele é exatamente o arquivo correto.

💻 **No terminal de trabalho:**
```powershell
npm run build
```

---

## 11 · Fechamento

💻 **No terminal de trabalho:**
```powershell
npm run build ; npm run lint
```

✅ **Sucesso é isto:** o build termina com **`✓ built in ...ms`**, e o lint termina com **`Found 0 warnings and 0 errors`**. 🤞

**Deu erro?** Ele aparece com o nome do arquivo e o número da linha. Quase sempre é uma edição parcial que saiu do lugar — **ache o 🆘 do passo em que você mexeu naquele arquivo e cole o arquivo inteiro por cima**. É exatamente para isso que os blocos 🆘 existem.

### 🚦 Os quatro portões desta aula

Confira os quatro. Todos têm de passar:

1. ✅ `npm run build` limpo
2. ✅ `npm run lint` limpo
3. ✅ **Tab alcança as 7 paradas, e todas mostram o anel**
4. ✅ **O leitor de tela anuncia "turma completa!"**

📌 **git (opcional):**
```powershell
git add -A ; git commit -m "feat: acessibilidade AA - foco visivel e aviso anunciado (role=status)"
git log --oneline
```

### Confira com o gabarito

Abra a pasta **`_projeto_final_aula_08`** e compare. Esta aula mudou **exatamente cinco coisas** em relação ao ponto de partida:

| arquivo | o que aconteceu |
|---|---|
| `src/styles/tokens.css` | **novo** — os 26 tokens |
| `src/main.tsx` | trocado — importa os tokens antes do `index.css` |
| `src/index.css` | trocado — 27 hex viraram `var(...)`, mais a busca, o foco e o aviso |
| `src/components/Chamada/index.tsx` | trocado — busca + rótulo + região viva |
| `src/App.css` | **apagado** — era órfão desde a aula 07 |

Todo o resto ficou igual: os outros cinco componentes, os dois tipos, o `App.tsx`, o `README.md`, as configurações. Você não tocou em nenhum deles.

> 💡 **Como comparar dois arquivos de verdade, sem ler linha por linha.**
>
> **Primeiro, ponha as duas pastas no mesmo lugar:** no VS Code, **File → Add Folder to Workspace** → escolha a pasta de gabarito. Agora as duas aparecem no explorador da esquerda, uma embaixo da outra. *(Sem isso não dá: você abriu só a sua, e não tem em que clicar.)*
>
> **Depois:** botão direito no **seu** arquivo → **Select for Compare**. Botão direito no arquivo correspondente do gabarito → **Compare with Selected**. Ele abre os dois lado a lado e pinta só o que está diferente.
>
> Vale a pena fazer isso com os arquivos que você mais mexeu. Se vier tudo branco, está igual.

---

## 🎉 Você terminou

Sério: pare um segundo e reconheça o que você acabou de fazer. Você pegou um arquivo de texto, sozinho, em casa, sem ninguém ao lado, e transformou um painel comum num painel que funciona para quem não usa mouse nem enxerga a tela. Isso não é pouco. Muita gente que programa por dinheiro não sabe o que é uma região `aria-live`.

**Maravilha, estou orgulhoso de você.** 🤞

E olhe o que você tem agora: um painel que funciona **de olhos fechados e sem mouse**. Isso é raro. A maior parte da internet não consegue dizer o mesmo.

---

## O que você levou desta aula

1. **Token é decisão com nome.** O valor mora num lugar; o resto aponta. Trocar a identidade vira uma linha.
2. **Nome por papel, não por aparência.** `--cor-superficie` sobrevive à troca de cor; `--azul-escuro` vira mentira.
3. **Refatorar é mudar por dentro sem mudar por fora.** Se a tela mudou, não foi refatoração — foi bug.
4. **`placeholder` não é rótulo.** Ele some na hora em que a pessoa mais precisa dele. Rótulo é `<label htmlFor>` amarrado ao `id`.
5. **`:focus-visible` com `outline`.** Anel para quem usa teclado, sem poluir o clique, sem empurrar o layout, com cor **medida** — não escolhida no olho.
6. **Região viva precisa existir antes da mensagem.** `role="status"` + `aria-live="polite"` num elemento que está sempre lá.
7. **Contraste se mede, não se supõe.** 4,5:1 para texto normal, 3:1 para texto grande e para o anel de foco.
8. **E a mais importante: ferramenta verde não quer dizer acessível.** Ela testa o que sabe testar. O resto é você, sem mouse, com o leitor ligado.

---

## Se algo deu errado

**Primeiro, os três suspeitos de sempre** — confira estes antes de qualquer outra coisa:

1. **Salvou?** Bolinha branca na aba do arquivo = sem salvar. `Ctrl+S`.
2. **É o arquivo certo?** Barra de migalhas no topo do editor, não o nome da aba.
3. **O servidor está vivo?** Olhe o terminal da tomada. Se voltou o prompt, ele morreu: `npm run dev`.

| o que acontece | o que é | o que fazer |
|---|---|---|
| colei e a tela não mudou | o arquivo está **sem salvar** | olhe a aba do arquivo no VS Code: tem uma **bolinha branca** no lugar do `x`? Aperte `Ctrl+S` |
| salvei e a tela não mudou | o servidor pode ter caído | olhe o terminal da tomada. Se voltou o prompt (`PS C:\dev\painel-tipado>`), ele morreu: rode `npm run dev` de novo |
| a página parece congelada no tempo | o Vite subiu em outra porta | confira se a URL do navegador é a mesma que o terminal acabou de imprimir — pode ter subido em `5174` |
| `'npm' não é reconhecido` | Node não instalado, ou terminal não reiniciado | volte ao **Passo 0** |
| `EBADENGINE` / `Unsupported engine` | seu Node é mais antigo que o 22 | instale o Node 22 em [nodejs.org](https://nodejs.org/) e reabra o VS Code |
| `Select-String` / `ni` / `mkdir` "não é reconhecido" | você não está no PowerShell | troque o terminal (veja *Antes de começar*) |
| criei a pasta e ela não aparece onde devia | terminal errado (Git Bash) ou pasta errada aberta | confira que o prompt termina com `\painel-tipado>` e que o terminal é `powershell` |
| `'git' não é reconhecido` | Git não instalado | para **esta aula** é opcional: pule os 📌 e siga normalmente. Para a **entrega que vale nota** você vai precisar — instale em [git-scm.com](https://git-scm.com/) quando der |
| `*** Please tell me who you are` no `git commit` | git instalado, mas nunca configurado | rode `git config --global user.name "Seu Nome"` e `git config --global user.email "seu@email"` |
| **o painel ficou todo sem estilo, branco** | uma chave `{` sem `}` no CSS — provavelmente no passo 08 | o CSS **não avisa** isso. Cole o `src/index.css` inteiro do 🆘 do passo 08 por cima |
| a tela mudou de cor depois do passo 03 | faltou token, ou o `tokens.css` não foi colado inteiro | recole o `tokens.css` inteiro (26 tokens) e confira o `main.tsx` |
| a tela ficou sem cor nenhuma | o import dos tokens não entrou, ou entrou **depois** do `index.css` | no `main.tsx`, `'./styles/tokens.css'` tem de vir **antes** de `'./index.css'` |
| `Failed to resolve import "./styles/tokens.css"` | o arquivo não está no lugar | o caminho é `src/styles/tokens.css` — confira a pasta `styles` |
| clicar no texto "Buscar aluno" não foca o campo | a amarra quebrou | `htmlFor` do label e `id` do input têm de ser o **mesmo** texto: `busca-aluno` |
| o anel de foco não aparece ao tabular | as 6 linhas não entraram, ou entraram no arquivo errado | têm de estar no **fim** do `src/index.css` |
| o anel aparece quando eu clico com o mouse | você escreveu `:focus` em vez de `:focus-visible` | acrescente o `-visible` |
| o leitor não anuncia "turma completa!" **e você está no Narrador** | é a ferramenta, não o seu código | o Narrador é irregular com `aria-live` no Chrome. Confirme pela árvore de acessibilidade (passo 08) antes de mexer em qualquer coisa |
| o leitor não anuncia, **e a árvore também não mostra o filho** | aí sim: a região não existe antes da mensagem | o `<p className="aviso">` tem de estar **sempre** no JSX; só o `<span>` de dentro entra e sai |
| o número de checagens do axe não bate com o meu | versão diferente da extensão | não é erro. O que importa é o número ser **o mesmo antes e depois** do golpe |
| o `Contrast ratio` não aparece no DevTools | o Chrome não calcula quando a cor vem de `var(...)` | meça no WebAIM: `#8fe0b0` sobre `#16223d` |
| tabulei e o foco não entra na página | o foco está na interface do navegador | clique uma vez numa área vazia da página e tabule de novo |
| sobrou um buraco na tela onde estava o aviso | faltou a regra `:empty` | acrescente `.aviso:empty { margin: 0; }` |
| o espaço embaixo do aviso dobrou | a margem ficou nos dois | a margem fica na **região** (`.aviso`); o `.completa` vai para `margin: 0` |
| `Remove-Item` não encontra o `App.css` | já foi apagado | siga em frente, está certo |
| o auditor dá 0 violações e eu quebrei o painel | **é o passo 10** | é exatamente o ponto da aula |

---

## 📋 A entrega desta semana (vale nota — M11)

O painel da aula é treino. **A nota vem do seu próprio projeto** — aquele que você vem desenvolvendo ao longo do semestre, o do integrador. Não é o `painel-tipado`.

**São quatro peças:**

1. Um commit **`feat: acessibilidade AA`** no repositório do **seu** projeto.
2. A folha **`checklist_aa_no_seu_projeto_semana08`** preenchida nas **três** colunas.
3. As **duas frases** que a folha pede.
4. O **Nível 3** do `desafio_semana08.pdf` — o componente escrito **do zero**.

**Onde entregar:** pelo **Teams**, no canal da disciplina. Se você não achar a tarefa, me mande direto por mensagem — o que não pode é ficar sem entregar por não ter achado o lugar.

**Até quando:** até a **abertura da Semana 09** — a nossa primeira aula daquela semana. Se você precisar de mais prazo, me peça **antes**, não depois.

### Respostas para o que sempre me perguntam sobre esta entrega

**"Onde está a folha?"** Na pasta **`materiais_de_aula/`**, aqui mesmo no estudo dirigido, junto com os slides e as apostilas. São três arquivos com `checklist_aa` no nome: o `.docx` (para preencher no computador), o `_para_imprimir.pdf` (para preencher à mão) e o `_exemplo_preenchido.pdf` (para ver como se faz).

**"Não tenho Word, como abro o `.docx`?"** Abra no **Word Online** (office.com, gratuito com a conta da escola) ou no **Google Docs** (drive.google.com → Novo → Upload de arquivo). Preencha lá e exporte em PDF. Ou use a versão `_para_imprimir.pdf` e preencha à mão — **foto legível serve**, não precisa de impressora nem scanner.

**"Meu projeto não é um repositório git, e agora?"** Dá para resolver em 30 segundos. No terminal, dentro da pasta do seu projeto:

```powershell
git init
git add -A
git commit -m "feat: acessibilidade AA"
```

Se o `git commit` reclamar `*** Please tell me who you are`, rode estes dois **antes** e repita o commit:

```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

E se o terminal disser `'git' não é reconhecido`, é porque o git não está instalado: baixe em [git-scm.com](https://git-scm.com/) (Next em tudo) e reabra o VS Code. **Travou em qualquer ponto disso? Me chame. Isso não é motivo para perder a entrega.**

**"Um item da folha não existe no meu projeto — o meu não tem nenhum campo de formulário."** Escreva **"não se aplica porque…"** e explique. Isso **conta**. O que não conta é deixar em branco.

**"Dá para entregar só o painel da aula?"** Dá, e vale o nível **intermediário** — não é zero, mas não é a nota cheia. A nota cheia exige funcionando **no seu projeto** e **explicado por você**. Olhe o `checklist_aa_exemplo_preenchido_semana08.pdf`: ele mostra exatamente o que eu considero evidência de verdade.

**Comece pelo item 1 da folha agora, em 5 minutos:** abra o seu projeto, **largue o mouse**, e tabule do início ao fim. Anote a **primeira falha** que encontrar. É o começo mais honesto possível — e é o item que costuma abrir os olhos de todo mundo.

> **Força Jovem!** Esta entrega é a mais fácil de fazer bem do semestre: não exige código difícil, exige **olhar**. Quem senta com a folha e o teclado por uma hora tira a nota cheia.

---

## ⭐ Estrela opcional — CSS Module

> **⚠️ Faça isto só depois de fechar os quatro portões do passo 11 — e saiba que ele deixa o seu projeto DIFERENTE do `_projeto_final_aula_08`.** Não é conteúdo de prova; é para quem quer ver o próximo degrau.

**O problema que ele resolve:** as classes do `index.css` são **globais**. Se dois componentes usarem `.cabecalho`, eles brigam — e o CSS não avisa. Um **CSS Module** faz o estilo pertencer ao componente: o nome da classe é reescrito pelo Vite para algo único.

💻 **No terminal de trabalho:**
```powershell
ni src\components\Cabecalho\Cabecalho.module.css
```

📄 **No arquivo `src/components/Cabecalho/Cabecalho.module.css`** — **crie e cole**, e salve com `Ctrl+S`:

```css
/* Cabecalho.module.css — escopo LOCAL (CSS Module).
   As classes viram nomes únicos no build; o componente as recebe via `styles`. */
.cabecalho h1 {
  margin: 0;
  font-size: 2rem;
  color: var(--cor-acento);
}

.cabecalho p {
  margin: var(--espaco-1) 0 24px;
  color: var(--cor-texto-suave);
  font-style: italic;
}
```

📄 **No arquivo `src/components/Cabecalho/index.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
import styles from './Cabecalho.module.css'

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <h1>Painel Tipado</h1>
      <p>feito por Ana</p>
    </header>
  )
}

export default Cabecalho
```

📄 **No arquivo `src/index.css`** — **APAGUE** os dois blocos que agora estão mortos (as regras migraram para o Module). São estes dois, e eles ficam logo acima da regra `.quadro`:

```css
.cabecalho h1 { ... }
.cabecalho p { ... }
```

⚠️ *Aqui, e só aqui, o `{ ... }` é ilustrativo: ele marca **o que apagar**, não algo para colar. Apague as regras inteiras, com as chaves e tudo que há dentro.*

✅ **A tela continua idêntica.** Inspecione o `<header>` no DevTools: a classe agora é algo como `_cabecalho_1a2b3_1` — um nome que o Vite gerou e que nenhum outro componente pode colidir.

> 📖 **Pare e entenda — `styles.cabecalho`.** O import `import styles from './Cabecalho.module.css'` traz um **objeto**, onde cada chave é um nome de classe que você escreveu e cada valor é o nome único que o Vite gerou. Por isso `className={styles.cabecalho}` e não `className="cabecalho"`.

---

## 💙 E se não deu certo?

Se você chegou até aqui e o seu painel não está funcionando, leia isto antes de fechar o computador.

**Não deu certo hoje. Só isso.** Não quer dizer que você não leva jeito, não quer dizer que programação não é para você, e não quer dizer nada sobre a sua nota. Código quebrado é o estado natural do código — quem programa há vinte anos passa metade do dia com a tela vermelha. A diferença é só que essa pessoa já viu aquele erro antes.

**A vida não é uma prova. Você tem mais valor do que isso.**

Então faça o seguinte, nesta ordem:

1. **Pare.** Insistir cansado só empilha erro.
2. **Tire dois prints** — a tela e o terminal inteiro.
3. **Me manda no Teams**, dizendo em que passo você estava. Pode ser agora, pode ser de madrugada.
4. **Vá dormir.** Sério. Metade dos bugs se resolve sozinha quando a gente volta no dia seguinte, e eu não estou brincando.

Quem pede ajuda no mesmo dia resolve em cinco minutos. Quem guarda a dúvida passa duas semanas carregando ela. **Me chame.**

---

## 📞 Ficou com dúvida? Me chame.

**Não fique travado sozinho.** Você pode:

- **Mandar mensagem pelo Teams a qualquer momento** — dia, noite, fim de semana. Não existe horário errado para mandar.
- **Me procurar na escola em qualquer horário**, inclusive **durante aula de outra turma**. Pode entrar, pode chamar na porta, pode esperar do lado. Não precisa marcar, não precisa esperar a nossa aula.

**Mandando mensagem, mande junto estas três coisas** — com elas eu quase sempre resolvo na primeira resposta:

1. **print da tela** (o navegador, ou o VS Code com o código);
2. **print do erro** (o terminal **inteiro**, não só a última linha);
3. **em que passo você está** ("passo 09").

E por favor: **pergunte no mesmo dia**. Dúvida guardada vira dúvida acumulada, e na semana seguinte o conteúdo novo empilha em cima. Duas linhas de mensagem hoje economizam duas semanas de confusão.

E vale para esta aula em especial: **acessibilidade parece simples quando se lê e complica quando se faz.** Se o leitor não falar, se o anel não aparecer, se a ferramenta disser uma coisa e a tela disser outra — me chame. É exatamente esse tipo de dúvida que rende a melhor conversa.

Ninguém aqui vai achar sua pergunta boba. Eu já fiz todas elas.

**Força Jovem!** 🤞

---

*Prof. Rodolfo Gonçalves · DAD · Instituto J&F*
