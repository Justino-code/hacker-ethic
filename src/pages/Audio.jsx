import React from "react";

export default function Audio() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-mono p-6">
      {/* Cabeçalho */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-neon-cyan">
          Áudios Educativos
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Ouça podcasts e gravações sobre hacking ético, cibersegurança e tecnologia.
          Aprenda de forma prática com exemplos e discussões de especialistas.
        </p>
      </header>

      {/* Lista de áudios */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Áudio 1 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-cyan-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-neon-cyan">
            Introdução ao Hacking Ético
          </h2>
          <p className="text-gray-300 mb-4">
            Um guia para iniciantes sobre conceitos e princípios do hacking ético.
          </p>
          <audio controls className="w-full rounded bg-[#0D0D0D]">
            <source src="/assets/audio/introducao-hacking.mp3" type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>

        {/* Áudio 2 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-green-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-neon-green">
            Segurança de Redes
          </h2>
          <p className="text-gray-300 mb-4">
            Como proteger redes e sistemas contra invasões e ataques.
          </p>
          <audio controls className="w-full rounded bg-[#0D0D0D]">
            <source src="/assets/audio/seguranca-redes.mp3" type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>

        {/* Áudio 3 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-purple-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-[#FF00FF]">
            Programação Segura
          </h2>
          <p className="text-gray-300 mb-4">
            Dicas de como escrever código seguro e prevenir vulnerabilidades.
          </p>
          <audio controls className="w-full rounded bg-[#0D0D0D]">
            <source src="/assets/audio/programacao-segura.mp3" type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>

        {/* Áudio 4 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-yellow-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-[#FFFF00]">
            Ferramentas de Pentest
          </h2>
          <p className="text-gray-300 mb-4">
            Conheça algumas ferramentas essenciais para testes de penetração éticos.
          </p>
          <audio controls className="w-full rounded bg-[#0D0D0D]">
            <source src="/assets/audio/ferramentas-pentest.mp3" type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold text-neon-cyan mb-4">
          Quer continuar aprendendo?
        </h2>
        <p className="text-gray-300 mb-6">
          Assista aos nossos vídeos e explore jogos educativos para testar seus conhecimentos.
        </p>
        <a
          href="/video"
          className="px-6 py-3 bg-[#00E5FF] text-[#0D0D0D] font-bold rounded shadow-lg hover:bg-[#00FF88] transition-colors duration-300"
        >
          Ver Vídeos
        </a>
      </section>
    </div>
  );
}
