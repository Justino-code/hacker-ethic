import React, { useState } from "react";

export default function Jogos() {
  const [score, setScore] = useState(0);

  // Mini-jogo 1: Click rápido (incrementa pontos ao clicar)
  const handleClickGame1 = () => {
    setScore(score + 1);
  };

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-mono p-6">
      {/* Cabeçalho */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-neon-cyan">
          Jogos Educativos
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Teste suas habilidades em segurança digital com mini-jogos interativos
          ou explore jogos HTML5 educativos.
        </p>
      </header>

      {/* Mini-jogos */}
      <section className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Jogo 1: Click rápido */}
        <div className="bg-[#0A192F] p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 text-center">
          <h2 className="text-2xl font-bold mb-4 text-neon-cyan">Jogo Click Rápido</h2>
          <p className="text-gray-300 mb-4">
            Clique no botão o máximo de vezes que conseguir!
          </p>
          <button
            onClick={handleClickGame1}
            className="px-6 py-3 bg-[#00E5FF] text-[#0D0D0D] font-bold rounded shadow-lg hover:bg-[#00FF88] transition-colors duration-300"
          >
            Clique Aqui!
          </button>
          <p className="mt-4 text-lg text-neon-green">Pontuação: {score}</p>
        </div>

        {/* Jogo 2: HTML5 simples - Snake (iframe) */}
        <div className="bg-[#0A192F] p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow duration-300 text-center">
          <h2 className="text-2xl font-bold mb-4 text-neon-green">Jogo Snake</h2>
          <p className="text-gray-300 mb-4">
            Jogue Snake e pratique reflexos e estratégia!
          </p>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
            <iframe
              src="https://playsnake.org/embed"
              title="Jogo Snake"
              className="absolute top-0 left-0 w-full h-full rounded"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold text-neon-cyan mb-4">
          Continue aprendendo!
        </h2>
        <p className="text-gray-300 mb-6">
          Navegue de volta para artigos, áudios e vídeos para expandir seus
          conhecimentos em hacking ético.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-[#00E5FF] text-[#0D0D0D] font-bold rounded shadow-lg hover:bg-[#00FF88] transition-colors duration-300"
        >
          Voltar ao Início
        </a>
      </section>
    </div>
  );
}
