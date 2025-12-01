import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaClock, FaUser } from "react-icons/fa";

const ArtigoPlaceholder = ({ titulo }) => (
  <div className="prose prose-invert max-w-none">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-4 sm:mb-6">{titulo}</h1>
    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
      <div className="flex items-center gap-2">
        <FaUser className="text-xs sm:text-sm" />
        <span>Autor Hacking Ethic</span>
      </div>
      <div className="flex items-center gap-2">
        <FaClock className="text-xs sm:text-sm" />
        <span>10 min de leitura</span>
      </div>
    </div>
    
    <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
      <p>
        Este é um artigo educativo sobre {titulo.toLowerCase()}. Aqui você encontrará informações detalhadas
        e práticas sobre o tema, com exemplos reais e exercícios para consolidar seu aprendizado.
      </p>
      
      <h2 className="text-xl sm:text-2xl font-bold text-green-400 mt-6 sm:mt-8 mb-3 sm:mb-4">Conceitos Fundamentais</h2>
      <p>
        A cibersegurança é essencial no mundo digital atual. Com o aumento de ameaças cibernéticas,
        entender os princípios básicos de proteção digital torna-se crucial.
      </p>
      
      <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 border-l-4 border-cyan-500 p-4 sm:p-6 rounded-r-lg my-6 sm:my-8">
        <p className="text-cyan-300 font-semibold text-sm sm:text-base">
          💡 Dica Profissional: Sempre mantenha seus sistemas atualizados e utilize autenticação multifator.
        </p>
      </div>
    </div>
  </div>
);

export default function Artigos() {
  const artigos = [
    {
      id: 1,
      titulo: "Introdução à Cibersegurança",
      descricao: "Descubra os conceitos básicos de cibersegurança, proteção de dados e como manter sistemas seguros contra ataques.",
      categoria: "Básico",
      tempoLeitura: "8 min",
      componente: <ArtigoPlaceholder titulo="Introdução à Cibersegurança" />,
      links: [
        { nome: "CISA – Cybersecurity Agency", url: "https://www.cisa.gov" },
        { nome: "Kaspersky Security Center", url: "https://www.kaspersky.com/resource-center" },
      ],
      badgeColor: "bg-cyan-500/20 text-cyan-400"
    },
    {
      id: 2,
      titulo: "Técnicas de Hacking Ético",
      descricao: "Explore ferramentas e técnicas usadas por hackers éticos para testar a segurança de sistemas e redes.",
      categoria: "Avançado",
      tempoLeitura: "12 min",
      componente: <ArtigoPlaceholder titulo="Técnicas de Hacking Ético" />,
      links: [
        { nome: "TryHackMe – Laboratórios práticos", url: "https://tryhackme.com" },
        { nome: "Hack The Box – Pentest Labs", url: "https://www.hackthebox.com" },
      ],
      badgeColor: "bg-green-500/20 text-green-400"
    },
    {
      id: 3,
      titulo: "Segurança de Redes",
      descricao: "Saiba como proteger redes de computadores, identificar vulnerabilidades e aplicar boas práticas de administração segura.",
      categoria: "Intermediário",
      tempoLeitura: "10 min",
      componente: <ArtigoPlaceholder titulo="Segurança de Redes" />,
      links: [
        { nome: "Documentação Wireshark", url: "https://www.wireshark.org/docs/" },
        { nome: "Manual do Nmap", url: "https://nmap.org/book/man.html" },
      ],
      badgeColor: "bg-purple-500/20 text-purple-400"
    },
    {
      id: 4,
      titulo: "Programação Segura",
      descricao: "Aprenda a escrever código seguro, evitando vulnerabilidades comuns e prevenindo ataques em aplicações web.",
      categoria: "Intermediário",
      tempoLeitura: "15 min",
      componente: <ArtigoPlaceholder titulo="Programação Segura" />,
      links: [
        { nome: "OWASP Cheat Sheets", url: "https://owasp.org/www-project-cheat-sheets/" },
        { nome: "MDN Web Security", url: "https://developer.mozilla.org/en-US/docs/Web/Security" },
      ],
      badgeColor: "bg-yellow-500/20 text-yellow-400"
    }
  ];

  const [artigoSelecionado, setArtigoSelecionado] = useState(null);

  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A2E] min-h-screen text-white font-mono pt-16">
      {/* LISTA DE ARTIGOS */}
      {!artigoSelecionado && (
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Artigos
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Aprenda técnicas de cibersegurança, boas práticas e dicas de hacking ético
              com nossos artigos educativos escritos por especialistas.
            </p>
          </div>

          {/* Grid de Artigos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
            {artigos.map((art) => (
              <article
                key={art.id}
                onClick={() => setArtigoSelecionado(art.id)}
                className="group bg-gradient-to-br from-[#0A192F] to-[#0D1B2A] rounded-xl sm:rounded-2xl shadow-lg border border-cyan-500/10 hover:border-cyan-500/30 cursor-pointer transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                {/* Header do Card */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${art.badgeColor}`}>
                      {art.categoria}
                    </span>
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <FaClock className="text-xs" />
                      <span>{art.tempoLeitura}</span>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2 sm:mb-3 line-clamp-2">
                    {art.titulo}
                  </h2>
                  <p className="text-gray-400 mb-3 sm:mb-4 line-clamp-3 leading-relaxed text-sm sm:text-base">
                    {art.descricao}
                  </p>

                  {/* Links extras */}
                  <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {art.links.map((l, i) => (
                      <a
                        key={i}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 group/link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="text-xs flex-shrink-0" />
                        <span className="truncate">{l.nome}</span>
                      </a>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold text-sm sm:text-base group-hover:text-green-400 transition-colors duration-300">
                      Ler Artigo
                    </span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-[#0D0D0D] font-bold text-sm">→</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Final */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-cyan-500/20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4">
                Quer aprender mais?
              </h2>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                Continue sua jornada explorando nossos áudios, vídeos e jogos educativos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/audio"
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-[#0D0D0D] font-bold rounded-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Explorar Áudios
                </Link>
                <Link
                  to="/video"
                  className="px-6 sm:px-8 py-2 sm:py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 text-sm sm:text-base"
                >
                  Ver Vídeos
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ARTIGO ABERTO */}
      {artigoSelecionado && (
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <button
            onClick={() => setArtigoSelecionado(null)}
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-[#0D0D0D] font-bold rounded-xl hover:shadow-cyan-500/25 transition-all duration-300 mb-4 sm:mb-6 lg:mb-8 group text-sm sm:text-base"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            Voltar aos Artigos
          </button>

          <article className="bg-gradient-to-br from-[#0A192F] to-[#0D1B2A] rounded-xl sm:rounded-2xl shadow-lg border border-cyan-500/20 p-4 sm:p-6 lg:p-8">
            {artigos.find((a) => a.id === artigoSelecionado).componente}
          </article>
        </div>
      )}
    </div>
  );
}