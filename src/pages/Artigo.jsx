import React from "react";

export default function Artigo() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-mono p-6">
      {/* Cabeçalho */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-[#00E5FF] text-neon-cyan">
          Artigos de Hacking Ético
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Aprenda técnicas de cibersegurança, boas práticas e dicas de hacking ético
          com nossos artigos educativos. Explore conteúdo estruturado para iniciantes
          e avançados.
        </p>
      </header>

      {/* Lista de artigos */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Artigo 1 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-cyan-500/50 transition-shadow duration-300">
          <img
            src="/assets/cybersecurity.jpg"
            alt="Cibersegurança"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-neon-cyan">
            Introdução à Cibersegurança
          </h2>
          <p className="text-gray-300 mb-2">
            Descubra os conceitos básicos de cibersegurança, proteção de dados e
            como manter sistemas seguros contra ataques.
          </p>
          <a
            href="#"
            className="text-[#00FF88] font-bold hover:underline"
          >
            Ler mais...
          </a>
        </div>

        {/* Artigo 2 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-green-500/50 transition-shadow duration-300">
          <img
            src="/assets/ethical-hacking.jpg"
            alt="Hacking Ético"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-neon-green">
            Técnicas de Hacking Ético
          </h2>
          <p className="text-gray-300 mb-2">
            Explore ferramentas e técnicas usadas por hackers éticos para testar
            a segurança de sistemas e redes de forma legal e segura.
          </p>
          <a
            href="#"
            className="text-[#00E5FF] font-bold hover:underline"
          >
            Ler mais...
          </a>
        </div>

        {/* Artigo 3 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-purple-500/50 transition-shadow duration-300">
          <img
            src="/assets/network-security.jpg"
            alt="Segurança de Redes"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-[#FF00FF]">
            Segurança de Redes
          </h2>
          <p className="text-gray-300 mb-2">
            Saiba como proteger redes de computadores, identificar vulnerabilidades
            e aplicar boas práticas de administração segura.
          </p>
          <a
            href="#"
            className="text-[#00FF88] font-bold hover:underline"
          >
            Ler mais...
          </a>
        </div>

        {/* Artigo 4 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-yellow-500/50 transition-shadow duration-300">
          <img
            src="/assets/coding.jpg"
            alt="Programação Segura"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-[#FFFF00]">
            Programação Segura
          </h2>
          <p className="text-gray-300 mb-2">
            Aprenda a escrever código seguro, evitando vulnerabilidades comuns e
            prevenindo ataques em aplicações web e software.
          </p>
          <a
            href="#"
            className="text-[#00E5FF] font-bold hover:underline"
          >
            Ler mais...
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold text-neon-cyan mb-4">
          Quer aprender mais?
        </h2>
        <p className="text-gray-300 mb-6">
          Continue explorando nossos áudios, vídeos e jogos educativos para
          aprofundar seus conhecimentos em hacking ético.
        </p>
        <a
          href="/audio"
          className="px-6 py-3 bg-[#00E5FF] text-[#0D0D0D] font-bold rounded shadow-lg hover:bg-[#00FF88] transition-colors duration-300"
        >
          Explorar Áudios
        </a>
      </section>
    </div>
  );
}
