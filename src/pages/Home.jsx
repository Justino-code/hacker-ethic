import React from "react";

export default function Home() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-mono p-6">
      {/* Cabeçalho */}
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-[#00E5FF] mb-4 text-neon-cyan">
          CyberEthic
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Bem-vindo ao CyberEthic, o site dedicado ao Hacking Ético e Cibersegurança.
          Aqui você encontrará artigos, áudios, vídeos e jogos educativos para aprender
          sobre segurança digital de forma prática e ética.
        </p>
      </header>

      {/* Seção de Destaques */}
      <section className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 bg-[#0A192F] rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-neon-cyan">Artigos</h2>
          <p className="text-gray-300">
            Leia artigos educativos sobre cibersegurança, técnicas de hacking ético
            e boas práticas para proteção digital.
          </p>
        </div>

        <div className="p-6 bg-[#0A192F] rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-neon-green">Áudio e Vídeo</h2>
          <p className="text-gray-300">
            Assista a vídeos e ouça podcasts sobre hacking ético e tecnologia de forma
            prática, tudo em um só lugar.
          </p>
        </div>

        <div className="p-6 bg-[#0A192F] rounded-lg shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-[#FF00FF]">Jogos Educativos</h2>
          <p className="text-gray-300">
            Experimente mini-jogos que simulam desafios de segurança digital para testar
            seus conhecimentos de forma interativa.
          </p>
        </div>

        <div className="p-6 bg-[#0A192F] rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-[#FFFF00]">Comunidade</h2>
          <p className="text-gray-300">
            Participe da comunidade CyberEthic, troque experiências e aprenda técnicas
            éticas de forma colaborativa.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold text-[#00E5FF] mb-4 text-neon-cyan">
          Comece a explorar!
        </h2>
        <p className="text-gray-300 mb-6">
          Navegue pelas seções do site usando a navbar acima e descubra o mundo do
          hacking ético.
        </p>
        <a
          href="/artigo"
          className="px-6 py-3 bg-[#00E5FF] text-[#0D0D0D] font-bold rounded shadow-lg hover:bg-[#00FF88] transition-colors duration-300"
        >
          Ver Artigos
        </a>
      </section>
    </div>
  );
}
