import React, { useState } from "react";
import AdivinheAtaque from "./jogos/AdivinheAtaque";
import QuizSeguranca from "./jogos/QuizSeguranca";
import SimuladorFirewall from "./jogos/SimuladorFirewall";
import EncontrarVulnerabilidade from "./jogos/EncontrarVulnerabilidade";

export default function Jogos() {
  const jogos = [
    { id: 1, nome: "Adivinhe o Ataque", componente: <AdivinheAtaque /> },
    { id: 2, nome: "Quiz de Segurança Ofensiva", componente: <QuizSeguranca /> },
    { id: 3, nome: "Simulador de Firewall", componente: <SimuladorFirewall /> },
    { id: 4, nome: "Encontre a Vulnerabilidade", componente: <EncontrarVulnerabilidade /> },
    { id: 5, nome: "Jogo Externo 1 (externo)", link: "https://examplegame1.com" },
    { id: 6, nome: "Jogo Externo 2 (externo)", link: "https://examplegame2.com" },
  ];

  const [jogoSelecionado, setJogoSelecionado] = useState(null);

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-mono p-6">
      {!jogoSelecionado && (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-neon-cyan mb-8 text-center">Jogos Educativos</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {jogos.map((jogo) => (
              <div
                key={jogo.id}
                onClick={() => jogo.componente ? setJogoSelecionado(jogo.id) : window.open(jogo.link, "_blank")}
                className="p-6 bg-[#1A1A1A] rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <h2 className="text-xl font-semibold text-neon-green">{jogo.nome}</h2>
                <p className="text-gray-400 mt-2">
                  {jogo.componente ? "Clique para jogar" : "Abrir jogo externo"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {jogoSelecionado && (
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => setJogoSelecionado(null)}
            className="mb-6 px-4 py-2 bg-neon-pink rounded hover:bg-pink-600 transition-colors"
          >
            ← Voltar ao Menu de Jogos
          </button>
          {jogos.find((jogo) => jogo.id === jogoSelecionado).componente}
        </div>
      )}
    </div>
  );
}
