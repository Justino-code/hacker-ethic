import React, { useState } from "react";

export default function JogoFirewall() {
  const pacotes = [
    { id: 1, nome: "Requisição HTTP legítima", tipo: "permitir" },
    { id: 2, nome: "Tentativa de SQL Injection", tipo: "bloquear" },
    { id: 3, nome: "Ping ICMP normal", tipo: "permitir" },
    { id: 4, nome: "Pacote suspeito de malware", tipo: "bloquear" },
  ];

  const [mensagem, setMensagem] = useState("");

  function onDrop(e, acao) {
    const pacoteId = e.dataTransfer.getData("pacote");
    const pacote = pacotes.find((p) => p.id == pacoteId);

    if (pacote.tipo === acao) {
      setMensagem(`✔ Ação correta! O pacote foi ${acao === "permitir" ? "permitido" : "bloqueado"}.`);
    } else {
      setMensagem(`✘ Ação incorreta! Este pacote deveria ser ${pacote.tipo}.`);
    }

    setTimeout(() => setMensagem(""), 2000);
  }

  return (
    <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-neon-cyan mb-6">Simulador de Firewall</h2>

      <p className="text-gray-400 mb-6">
        Arraste cada pacote para a área correta: <span className="text-neon-green">Permitir</span> ou <span className="text-neon-pink">Bloquear</span>.
      </p>

      <div className="grid grid-cols-2 gap-6">
        {/* Lista de pacotes */}
        <div className="space-y-3">
          {pacotes.map((p) => (
            <div
              key={p.id}
              draggable
              onDragStart={(e) => e.dataTransfer.setData("pacote", p.id)}
              className="p-3 bg-[#222] rounded cursor-grab hover:bg-[#333] transition"
            >
              📦 {p.nome}
            </div>
          ))}
        </div>

        {/* Áreas de drop */}
        <div className="space-y-6">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, "permitir")}
            className="p-6 bg-[#002b2b] border border-neon-green rounded-xl text-center"
          >
            ✔ PERMITIR
          </div>

          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, "bloquear")}
            className="p-6 bg-[#2b0000] border border-neon-pink rounded-xl text-center"
          >
            ✘ BLOQUEAR
          </div>
        </div>
      </div>

      {mensagem && (
        <p className="text-center mt-6 text-xl">
          {mensagem.includes("✔") ? (
            <span className="text-neon-green">{mensagem}</span>
          ) : (
            <span className="text-neon-pink">{mensagem}</span>
          )}
        </p>
      )}
    </div>
  );
}
