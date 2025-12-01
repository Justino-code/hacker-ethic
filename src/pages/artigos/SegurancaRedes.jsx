import React from "react";
import { motion } from "framer-motion";

export default function SegurancaRedes() {
  const praticasSeguranca = [
    { icone: "🛡️", titulo: "Firewalls", desc: "Controle de tráfego de rede" },
    { icone: "🔒", titulo: "VPNs", desc: "Conexões seguras e criptografadas" },
    { icone: "📊", titulo: "Segmentação", desc: "Isolamento de redes internas" },
    { icone: "👁️", titulo: "Monitoramento", desc: "Análise contínua de tráfego" },
    { icone: "📋", titulo: "Políticas", desc: "Controle de acesso rigoroso" },
    { icone: "🔄", titulo: "Backups", desc: "Recuperação de desastres" },
  ];

  const recursos = [
    { 
      nome: "TryHackMe", 
      url: "https://tryhackme.com", 
      desc: "Blog & Labs de Cibersegurança (2025)" 
    },
    { 
      nome: "Acronis Blog", 
      url: "https://www.acronis.com/pt/blog/", 
      desc: "Notícias e artigos técnicos de 2025" 
    },
    { 
      nome: "HackerOne", 
      url: "https://hackone.com.br/blog/10-tendencias-ciberseguranca-2025/", 
      desc: "10 Tendências em Cibersegurança para 2025" 
    },
    { 
      nome: "CNSI 2025", 
      url: "https://cnsi.digital/", 
      desc: "Conferência Nacional de Segurança Informática (Luanda, Angola)" 
    },
    { 
      nome: "New Cybersecurity 2025", 
      url: "https://www.even3.co.ao/e/new-cybersecurity-2025-535287/", 
      desc: "Evento Online sobre Segurança Digital" 
    },
  ];

  return (
    <motion.div
      className="bg-[#0D0D0D] min-h-screen text-white font-mono p-4 md:p-6 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <header className="text-center mb-8 md:mb-12">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#FF00FF]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Segurança de Redes
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Estratégias para proteger redes de computadores contra ataques e
          acessos não autorizados.
        </motion.p>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-4xl mx-auto">
        <section className="bg-[#1A1A1A] rounded-xl p-5 md:p-8 mb-8 shadow-lg border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-[#0D0D0D] p-4 rounded-lg">
                <h3 className="font-bold text-[#FF00FF] mb-3 text-lg">🌐 Definição</h3>
                <p className="text-gray-300">
                  A segurança de redes envolve a implementação de medidas técnicas e
                  administrativas para proteger a <span className="text-[#FF88FF]">integridade</span>, 
                  <span className="text-[#FF88FF]"> confidencialidade</span> e 
                  <span className="text-[#FF88FF]"> disponibilidade</span> dos dados transmitidos.
                </p>
              </div>
              
              <div className="bg-[#0D0D0D] p-4 rounded-lg">
                <h3 className="font-bold text-[#FF00FF] mb-3 text-lg">🎯 Objetivos Principais</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF00FF]">✓</span>
                    <span className="text-gray-300">Prevenir acessos não autorizados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF00FF]">✓</span>
                    <span className="text-gray-300">Garantir continuidade dos serviços</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF00FF]">✓</span>
                    <span className="text-gray-300">Proteger dados sensíveis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF00FF]">✓</span>
                    <span className="text-gray-300">Detectar e responder a incidentes</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-[#0D0D0D] p-4 rounded-lg">
                <h3 className="font-bold text-[#FF00FF] mb-3 text-lg">🛡️ Práticas Essenciais</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {praticasSeguranca.map((pratica, index) => (
                    <div 
                      key={index}
                      className="bg-[#1A1A1A] p-3 rounded-lg text-center hover:bg-[#2A2A2A] transition-colors"
                    >
                      <div className="text-2xl mb-1">{pratica.icone}</div>
                      <div className="text-sm font-bold text-[#FF88FF]">{pratica.titulo}</div>
                      <div className="text-xs text-gray-400 mt-1">{pratica.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#0D0D0D] p-4 rounded-lg border-l-4 border-[#FF00FF]">
                <h3 className="font-bold text-[#FF00FF] mb-2">⚠️ Ataques Comuns</h3>
                <p className="text-gray-300 text-sm">
                  A proteção contra <span className="text-[#FF88FF]">phishing</span>, 
                  <span className="text-[#FF88FF]"> spoofing</span>, 
                  <span className="text-[#FF88FF]"> DDoS</span> e 
                  <span className="text-[#FF88FF]"> man-in-the-middle</span> é fundamental 
                  para garantir a segurança contínua dos sistemas.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recursos & Links */}
        <section className="bg-[#1A1A1A] rounded-xl p-5 md:p-8 shadow-lg border border-gray-800">
          <motion.h3 
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#FF00FF] flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-2xl">🔗</span>
            Recursos e Leituras Complementares
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recursos.map((recurso, index) => (
              <motion.div
                key={index}
                className="bg-[#0D0D0D] p-4 rounded-lg border border-gray-800 hover:border-[#FF00FF] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <a
                  href={recurso.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-[#FF88FF] group-hover:underline">
                      {recurso.nome}
                    </h4>
                    <span className="text-[#FF00FF] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    {recurso.desc}
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-800">
                    <span className="text-xs text-[#FF00FF]">Clique para acessar</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </motion.div>
  );
}