import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SimuladorFirewall() {
  const pacotes = [
    { id: 1, nome: "Requisição HTTP legítima", tipo: "permitir", icone: "🌐" },
    { id: 2, nome: "Tentativa de SQL Injection", tipo: "bloquear", icone: "💉" },
    { id: 3, nome: "Ping ICMP normal", tipo: "permitir", icone: "📡" },
    { id: 4, nome: "Pacote suspeito de malware", tipo: "bloquear", icone: "🦠" },
    { id: 5, nome: "Conexão SSH legítima", tipo: "permitir", icone: "🔐" },
    { id: 6, nome: "Port scan de IP desconhecido", tipo: "bloquear", icone: "🔍" },
    { id: 7, nome: "Requisição API autorizada", tipo: "permitir", icone: "⚡" },
    { id: 8, nome: "Tentativa de brute force", tipo: "bloquear", icone: "🔨" },
  ];

  const [mensagem, setMensagem] = useState("");
  const [pontuacao, setPontuacao] = useState(0);
  const [arrastados, setArrastados] = useState([]);

  function onDrop(e, acao) {
    e.preventDefault();
    const pacoteId = e.dataTransfer.getData("pacote");
    const pacote = pacotes.find((p) => p.id == pacoteId);

    if (arrastados.includes(pacoteId)) {
      setMensagem("⚠️ Este pacote já foi classificado!");
      return;
    }

    if (pacote.tipo === acao) {
      setMensagem(`✅ Ação correta! ${pacote.nome} foi ${acao === "permitir" ? "permitido" : "bloqueado"}.`);
      setPontuacao(prev => prev + 10);
    } else {
      setMensagem(`❌ Ação incorreta! ${pacote.nome} deveria ser ${pacote.tipo}.`);
      setPontuacao(prev => Math.max(0, prev - 5));
    }

    setArrastados(prev => [...prev, pacoteId]);

    setTimeout(() => setMensagem(""), 2000);
  }

  function resetarSimulador() {
    setArrastados([]);
    setPontuacao(0);
    setMensagem("🔄 Simulador reiniciado!");
    setTimeout(() => setMensagem(""), 1500);
  }

  return (
    <div className="bg-[#1A1A1A] p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-800">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#00E5FF] mb-2">Simulador de Firewall</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Arraste os pacotes para as áreas corretas. Pontuação: 
            <span className="text-[#00FF88] font-bold ml-2">{pontuacao} pontos</span>
          </p>
        </div>
        
        <button
          onClick={resetarSimulador}
          className="mt-4 md:mt-0 px-4 py-2 bg-[#333] hover:bg-[#444] rounded-lg transition-colors text-sm"
        >
          🔄 Reiniciar
        </button>
      </div>

      <p className="text-gray-300 mb-6 text-sm md:text-base">
        Objetivo: Identificar tráfego legítimo (Permitir) e malicioso (Bloquear).
        <span className="block text-xs text-gray-500 mt-1">
          Dica: Firewalls protegem redes analisando pacotes baseados em regras de segurança.
        </span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Lista de pacotes */}
        <div>
          <h3 className="text-lg font-bold text-gray-300 mb-4 flex items-center gap-2">
            <span>📦</span>
            Pacotes de Rede ({pacotes.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pacotes.map((p) => (
              <motion.div
                key={p.id}
                draggable
                onDragStart={(e) => e.dataTransfer.setData("pacote", p.id)}
                className={`p-3 md:p-4 rounded-lg cursor-grab active:cursor-grabbing transition-all ${
                  arrastados.includes(p.id) 
                    ? "bg-[#333] opacity-50" 
                    : "bg-[#222] hover:bg-[#2a2a2a] hover:scale-[1.02]"
                }`}
                whileHover={{ scale: arrastados.includes(p.id) ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{p.icone}</span>
                  <div>
                    <p className="font-medium text-gray-200 text-sm md:text-base">{p.nome}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {arrastados.includes(p.id) ? "✓ Classificado" : "Arraste para classificar"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Áreas de drop */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-300">Áreas de Decisão</h3>
            
            <motion.div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => onDrop(e, "permitir")}
              className="p-4 md:p-6 bg-gradient-to-br from-[#002b2b] to-[#004444] border-2 border-[#00FF88] rounded-xl text-center min-h-[150px] flex flex-col justify-center"
              whileHover={{ scale: 1.01 }}
            >
              <div className="text-4xl mb-2">✅</div>
              <h4 className="text-xl font-bold text-[#00FF88] mb-2">PERMITIR</h4>
              <p className="text-sm text-gray-300">
                Tráfego legítimo e autorizado
              </p>
              <p className="text-xs text-gray-400 mt-3">
                {arrastados.filter(id => pacotes.find(p => p.id === id)?.tipo === "permitir").length} acertos
              </p>
            </motion.div>

            <motion.div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => onDrop(e, "bloquear")}
              className="p-4 md:p-6 bg-gradient-to-br from-[#2b0000] to-[#440000] border-2 border-[#FF4444] rounded-xl text-center min-h-[150px] flex flex-col justify-center"
              whileHover={{ scale: 1.01 }}
            >
              <div className="text-4xl mb-2">❌</div>
              <h4 className="text-xl font-bold text-[#FF4444] mb-2">BLOQUEAR</h4>
              <p className="text-sm text-gray-300">
                Tráfego malicioso ou suspeito
              </p>
              <p className="text-xs text-gray-400 mt-3">
                {arrastados.filter(id => pacotes.find(p => p.id === id)?.tipo === "bloquear").length} acertos
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mensagem && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-6 p-4 rounded-lg text-center ${
              mensagem.includes("✅") 
                ? "bg-[#002b2b] text-[#00FF88]" 
                : mensagem.includes("❌")
                ? "bg-[#2b0000] text-[#FF8888]"
                : "bg-[#333] text-yellow-400"
            }`}
          >
            <p className="text-base md:text-lg font-medium">{mensagem}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 pt-4 border-t border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-[#222] p-3 rounded">
            <p className="text-2xl font-bold text-[#00E5FF]">{pacotes.length}</p>
            <p className="text-xs text-gray-400">Total Pacotes</p>
          </div>
          <div className="bg-[#222] p-3 rounded">
            <p className="text-2xl font-bold text-[#00FF88]">
              {arrastados.filter(id => {
                const p = pacotes.find(pac => pac.id === id);
                return p && p.tipo === "permitir";
              }).length}
            </p>
            <p className="text-xs text-gray-400">Permitidos</p>
          </div>
          <div className="bg-[#222] p-3 rounded">
            <p className="text-2xl font-bold text-[#FF4444]">
              {arrastados.filter(id => {
                const p = pacotes.find(pac => pac.id === id);
                return p && p.tipo === "bloquear";
              }).length}
            </p>
            <p className="text-xs text-gray-400">Bloqueados</p>
          </div>
          <div className="bg-[#222] p-3 rounded">
            <p className="text-2xl font-bold text-yellow-400">{pontuacao}</p>
            <p className="text-xs text-gray-400">Pontuação</p>
          </div>
        </div>
      </div>
    </div>
  );
}