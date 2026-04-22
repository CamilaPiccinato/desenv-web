import { useState } from "react"
import './App.css'

function Header({ titulo, children }) {
  return (
    <header>
      <h1>{titulo}</h1>
      {children}
    </header>
  )
}

function Navigation({ links }) {
  return (
    <nav aria-label="Menu de navegação">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Article({ titulo, autor, data, dataISO, conteudo, imagem }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p className="autor">Por: {autor}</p>
      <time dateTime={dataISO}>{data}</time>

      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}

      {imagem && (
        <figure>
          <img src={imagem.src} alt={imagem.alt} width="200" height="200" />
          <figcaption>{imagem.legenda}</figcaption>
        </figure>
      )}
    </article>
  )
}

function Sidebar({ posts }) {
  return (
    <aside>
      <h3>Posts relacionados</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <a href={post.href}>{post.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Meu Blog de Viagens. Todos os direitos reservados.</p>
    </footer>
  )
}


function App() {
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Sobre", href: "#" },
    { label: "Contato", href: "#" },
  ]

  const postData = {
    titulo: "Descobrindo as praias do Nordeste",
    autor: "Camila",
    data: "28-02-2026",
    dataISO: "2026-02-28",
    conteudo: [
      "Nas minhas férias, fiz uma viagem para o Nordeste do Brasil e foi uma experiência incrível. Conheci praias lindas, com água clara e quente, e aproveitei bastante o clima ensolarado.",
      "Experimentei comidas típicas da região, como acarajé e tapioca, que são muito saborosas.",
    ],
    imagem: {
      src: "imagens/praia.jpg",
      alt: "Praia do Nordeste",
      legenda: "Praia no Nordeste",
    },
  }

  const relatedPosts = [
    { label: "Viagem para o interior", href: "#" },
    { label: "Trilhas!", href: "#" },
  ]

  return (
    <>
      <div className="container">
        <Header titulo="Meu blog de viagens">
          <Navigation links={navLinks} />
        </Header>

        <main>
          <Article
            titulo={postData.titulo}
            autor={postData.autor}
            data={postData.data}
            dataISO={postData.dataISO}
            conteudo={postData.conteudo}
            imagem={postData.imagem}
          />
        </main>

        <Sidebar posts={relatedPosts} />

        <Footer />
      </div>
    </>
  )
}

export default App