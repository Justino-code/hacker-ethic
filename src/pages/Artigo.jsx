import React, { useState } from "react";
import IntroducaoCiberseguranca from "./artigos/IntroducaoCiberSeguranca";
import TecnicasHackingEtico from "./artigos/TecnicasHackingEtico";
import SegurancaRedes from "./artigos/SegurancaRedes";
import ProgramacaoSegura from "./artigos/ProgramacaoSegura";

export default function Artigos() {
  const artigos = [
    {
      id: 1,
      titulo: "Introdução à Cibersegurança",
      imagem: "/assets/cybersecurity.jpg",
      descricao:
        "Descubra os conceitos básicos de cibersegurança, proteção de dados e como manter sistemas seguros contra ataques.",
      componente: <IntroducaoCiberseguranca />,
      links: [
        { nome: "CISA – Cybersecurity Agency", url: "https://www.cisa.gov" },
        { nome: "Kaspersky Security Center", url: "https://www.kaspersky.com/resource-center" },
        { nome: "Microsoft Security Blog", url: "https://www.microsoft.com/security/blog" }
      ],
      cor: "text-neon-cyan",
      shadow: "hover:shadow-cyan-500/50"
    },
    {
      id: 2,
      titulo: "Técnicas de Hacking Ético",
      imagem: "/assets/ethical-hacking.jpg",
      descricao:
        "Explore ferramentas e técnicas usadas por hackers éticos para testar a segurança de sistemas e redes.",
      componente: <TecnicasHackingEtico />,
      links: [
        { nome: "TryHackMe – Laboratórios práticos", url: "https://tryhackme.com" },
        { nome: "Hack The Box – Pentest Labs", url: "https://www.hackthebox.com" },
        { nome: "OWASP Top 10 • 2024/2025", url: "https://owasp.org/www-project-top-ten/" }
      ],
      cor: "text-neon-green",
      shadow: "hover:shadow-green-500/50"
    },
    {
      id: 3,
      titulo: "Segurança de Redes",
      imagem: "/assets/network-security.jpg",
      descricao:
        "Saiba como proteger redes de computadores, identificar vulnerabilidades e aplicar boas práticas de administração segura.",
      componente: <SegurancaRedes />,
      links: [
        { nome: "Documentação Wireshark", url: "https://www.wireshark.org/docs/" },
        { nome: "Manual do Nmap", url: "https://nmap.org/book/man.html" },
        { nome: "SANS – Blogs de Segurança", url: "https://www.sans.org/blog/" }
      ],
      cor: "text-[#FF00FF]",
      shadow: "hover:shadow-purple-500/50"
    },
    {
      id: 4,
      titulo: "Programação Segura",
      imagem: "/assets/coding.jpg",
      descricao:
        "Aprenda a escrever código seguro, evitando vulnerabilidades comuns e prevenindo ataques em aplicações web.",
      componente: <ProgramacaoSegura />,
      links: [
        { nome: "OWASP Cheat Sheets", url: "https://owasp.org/www-project-cheat-sheets/" },
        { nome: "MDN Web Security", url: "https://developer.mozilla.org/en-US/docs/Web/Security" },
        { nome: "PortSwigger Web Academy", url: "https://portswigger.net/web-security" }
      ],
      cor: "text-[#FFFF00]",
      shadow: "hover:shadow-yellow-500/50"
    }
  ];

  const [artigoSelecionado, setArtigoSelecionado] = useState(null);

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-mono p-6">

      {/* LISTA DE ARTIGOS */}
      {!artigoSelecionado && (
        <>
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2 text-[#00E5FF] text-neon-cyan">
              Artigos de Hacking Ético
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Aprenda técnicas de cibersegurança, boas práticas e dicas de hacking ético
              com nossos artigos educativos.
            </p>
          </header>

          <section className="grid md:grid-cols-2 gap-8">
            {artigos.map((art) => (
              <div
                key={art.id}
                onClick={() => setArtigoSelecionado(art.id)}
                className={`bg-[#0A192F] rounded-lg shadow-lg p-6 cursor-pointer ${art.shadow} hover:scale-105 transition duration-300`}
              >
                <img
                  src={art.imagem}
                  alt={art.titulo}
                  className="w-full h-48 object-cover rounded mb-4"
                />

                <h2 className={`text-2xl font-bold mb-2 ${art.cor}`}>
                  {art.titulo}
                </h2>

                <p className="text-gray-300 mb-2">{art.descricao}</p>

                <p className="text-[#00FF88] font-bold">Clique para ler...</p>

                {/* Links extras */}
                <ul className="mt-4 text-sm text-gray-400 space-y-1">
                  {art.links.map((l, i) => (
                    <li key={i}>
                      <a className="hover:text-[#00E5FF]" href={l.url} target="_blank" rel="noreferrer">
                        • {l.nome}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* CTA Final */}
          <section className="text-center mt-12">
            <h2 className="text-3xl font-bold text-neon-cyan mb-4">
              Quer aprender mais?
            </h2>
            <p className="text-gray-300 mb-6">
              Continue explorando nossos áudios, vídeos e jogos educativos.
            </p>
            <a
              href="/audio"
              className="px-6 py-3 bg-[#00E5FF] text-[#0D0D0D] font-bold rounded shadow-lg hover:bg-[#00FF88] transition-colors duration-300"
            >
              Explorar Áudios
            </a>
          </section>
        </>
      )}

      {/* ARTIGO ABERTO */}
      {artigoSelecionado && (
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => setArtigoSelecionado(null)}
            className="mb-6 px-4 py-2 bg-neon-pink font-bold rounded hover:bg-pink-600 transition-colors"
          >
            ← Voltar aos Artigos
          </button>

          <div className="bg-[#0A192F] rounded-lg shadow-lg p-6">
            {artigos.find((a) => a.id === artigoSelecionado).componente}
          </div>
        </div>
      )}
    </div>
  );
}
