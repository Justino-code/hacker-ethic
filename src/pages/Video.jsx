import React from "react";

export default function Video() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-mono p-6">
      {/* Cabeçalho */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-neon-cyan">
          Vídeos Educativos
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Assista a vídeos sobre hacking ético, cibersegurança e tecnologia. Aprenda de
          forma prática com demonstrações e tutoriais detalhados.
        </p>
      </header>

      {/* Lista de vídeos */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Vídeo 1 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-cyan-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 text-neon-cyan">
            Introdução ao Hacking Ético
          </h2>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Introdução ao Hacking Ético"
              className="absolute top-0 left-0 w-full h-full rounded"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Vídeo 2 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-green-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 text-neon-green">
            Segurança de Redes
          </h2>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
            <iframe
              src="https://www.youtube.com/embed/9bZkp7q19f0"
              title="Segurança de Redes"
              className="absolute top-0 left-0 w-full h-full rounded"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Vídeo 3 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-purple-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 text-[#FF00FF]">
            Programação Segura
          </h2>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Programação Segura"
              className="absolute top-0 left-0 w-full h-full rounded"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Vídeo 4 */}
        <div className="bg-[#0A192F] rounded-lg shadow-lg p-6 hover:shadow-yellow-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 text-[#FFFF00]">
            Ferramentas de Pentest
          </h2>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
            <iframe
              src="https://www.youtube.com/embed/oHg5SJYRHA0"
              title="Ferramentas de Pentest"
              className="absolute top-0 left-0 w-full h-full rounded"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold text-neon-cyan mb-4">
          Continue sua jornada
        </h2>
        <p className="text-gray-300 mb-6">
          Explore nossos jogos educativos para testar seus conhecimentos de hacking ético.
        </p>
        <a
          href="/jogos"
          className="px-6 py-3 bg-[#00E5FF] text-[#0D0D0D] font-bold rounded shadow-lg hover:bg-[#00FF88] transition-colors duration-300"
        >
          Jogar Agora
        </a>
      </section>
    </div>
  );
}
