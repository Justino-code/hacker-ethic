import React from "react";
import { motion } from "framer-motion";

export default function TecnicasHackingEtico() {
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
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#00FF88]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Técnicas de Hacking Ético
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Métodos e práticas utilizadas por hackers éticos para testar e fortalecer
          a segurança de sistemas.
        </motion.p>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-4xl mx-auto">
        <section className="bg-[#1A1A1A] rounded-xl p-5 md:p-8 mb-8 shadow-lg border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block font-bold text-[#00FF88] mb-2">O que é?</span>
                Hacking ético, também conhecido como <em>penetration testing</em>, consiste em avaliar
                a segurança de sistemas de forma legal e autorizada. O objetivo é encontrar
                vulnerabilidades antes que agentes maliciosos possam explorá-las.
              </motion.p>
            </div>
            
            <div className="space-y-4">
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="block font-bold text-[#00FF88] mb-2">Técnicas Comuns:</span>
                • Análise de vulnerabilidades<br/>
                • Exploração em ambiente controlado<br/>
                • Engenharia social ética<br/>
                • Testes de intrusão<br/>
                <span className="inline-block mt-2 text-sm text-gray-400">
                  Ferramentas: Nmap, Metasploit, Wireshark, Burp Suite
                </span>
              </motion.p>
            </div>
          </div>

          <motion.div 
            className="mt-6 pt-6 border-t border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-300 bg-[#0D0D0D] p-4 rounded-lg border-l-4 border-[#00FF88]">
              <strong className="text-[#00FF88]">⚠️ Ética Profissional:</strong> Um hacker ético deve sempre seguir um código de conduta rigoroso, documentar
              resultados detalhadamente e fornecer recomendações práticas para fortalecer a segurança.
            </p>
          </motion.div>
        </section>

        {/* Recursos & Links */}
        <section className="bg-[#1A1A1A] rounded-xl p-5 md:p-8 shadow-lg border border-gray-800">
          <motion.h3 
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#00FF88] flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-2xl">🔗</span>
            Recursos e Leituras Complementares
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recursos.map((recurso, index) => (
              <motion.div
                key={index}
                className="bg-[#0D0D0D] p-4 rounded-lg border border-gray-800 hover:border-[#00FF88] transition-all duration-300 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <a
                  href={recurso.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h4 className="font-bold text-[#00FF88] mb-2 group-hover:underline">
                    {recurso.nome}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {recurso.desc}
                  </p>
                  <div className="mt-3 text-xs text-[#00FF88] flex items-center gap-1">
                    Acessar recurso
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Disclaimer */}
          <motion.p 
            className="mt-6 text-xs text-gray-500 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Links atualizados em 2025. Recomenda-se verificar a validade dos recursos periodicamente.
          </motion.p>
        </section>
      </main>
    </motion.div>
  );
}