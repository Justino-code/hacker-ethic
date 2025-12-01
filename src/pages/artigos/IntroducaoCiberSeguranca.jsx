import React from "react";
import { motion } from "framer-motion";

export default function IntroducaoCiberseguranca() {
  const principiosCIA = [
    { 
      letra: "C", 
      nome: "Confidencialidade", 
      desc: "Garantir que informações só sejam acessadas por pessoas autorizadas" 
    },
    { 
      letra: "I", 
      nome: "Integridade", 
      desc: "Manter a precisão e completude dos dados" 
    },
    { 
      letra: "A", 
      nome: "Disponibilidade", 
      desc: "Garantir acesso aos dados quando necessário" 
    },
  ];

  const recursos = [
    { 
      nome: "TryHackMe", 
      url: "https://tryhackme.com", 
      desc: "Blog & Labs de Cibersegurança (2025)",
      icone: "🎯"
    },
    { 
      nome: "Acronis Blog", 
      url: "https://www.acronis.com/pt/blog/", 
      desc: "Notícias e artigos técnicos de 2025",
      icone: "📰"
    },
    { 
      nome: "HackerOne", 
      url: "https://hackone.com.br/blog/10-tendencias-ciberseguranca-2025/", 
      desc: "10 Tendências em Cibersegurança para 2025",
      icone: "📈"
    },
    { 
      nome: "CNSI 2025", 
      url: "https://cnsi.digital/", 
      desc: "Conferência Nacional de Segurança Informática (Luanda, Angola)",
      icone: "🎪"
    },
    { 
      nome: "New Cybersecurity 2025", 
      url: "https://www.even3.co.ao/e/new-cybersecurity-2025-535287/", 
      desc: "Evento Online sobre Segurança Digital",
      icone: "💻"
    },
  ];

  return (
    <motion.div
      className="bg-[#0D0D0D] min-h-screen text-white font-mono p-4 md:p-6 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Corrigido */}
      <header className="text-center mb-8 md:mb-12">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          {/* Efeito de gradiente no fundo do título */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/10 to-[#0088CC]/10 blur-xl rounded-lg -z-10"></div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3">
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#00B8E6] to-[#0088CC] text-transparent bg-clip-text">
              Introdução à Cibersegurança
            </span>
          </h1>
          
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 md:px-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Conceitos básicos de cibersegurança, proteção de dados e práticas essenciais
            para manter sistemas seguros.
          </motion.p>
          
          {/* Linha decorativa */}
          <motion.div 
            className="h-1 bg-gradient-to-r from-[#00E5FF] to-[#0088CC] w-32 md:w-48 mx-auto mt-4 md:mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-5xl mx-auto">
        <section className="bg-[#1A1A1A] rounded-xl p-5 md:p-8 mb-8 shadow-lg border border-gray-800">
          {/* Definição */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#0D0D0D] p-4 md:p-6 rounded-lg border-l-4 border-[#00E5FF]">
              <h2 className="text-xl md:text-2xl font-bold text-[#00E5FF] mb-4 flex items-center gap-3">
                <span className="text-2xl">🌐</span>
                O que é Cibersegurança?
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                A cibersegurança é um conjunto de práticas e tecnologias destinadas a proteger
                sistemas, redes e dados contra acessos não autorizados, ataques cibernéticos e
                vulnerabilidades. É essencial para empresas, governos e usuários individuais,
                formando a base da confiança no ambiente digital moderno.
              </p>
            </div>
          </motion.div>

          {/* Princípios CIA */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#00E5FF] mb-6 text-center">
              <span className="inline-block mr-3">🔐</span>
              Princípios Fundamentais (Tríade CIA)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {principiosCIA.map((principio, index) => (
                <motion.div 
                  key={index}
                  className="bg-[#0D0D0D] p-4 md:p-5 rounded-xl border border-gray-800 hover:border-[#00E5FF] transition-all duration-300 hover:scale-[1.02] group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#0088CC]/20 flex items-center justify-center mb-3 md:mb-4 group-hover:from-[#00E5FF]/40 group-hover:to-[#0088CC]/40 transition-all">
                      <span className="text-2xl md:text-3xl font-bold text-[#00E5FF]">
                        {principio.letra}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#00E5FF] mb-2">
                      {principio.nome}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 px-2">
                      {principio.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Práticas Básicas */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-[#0D0D0D] p-4 md:p-5 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#00E5FF] mb-4 flex items-center gap-3">
                <span className="text-xl">🛡️</span>
                Práticas Essenciais
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#00E5FF] mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm md:text-base">Atualização regular de software e sistemas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00E5FF] mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm md:text-base">Uso de senhas fortes e autenticação multifator</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00E5FF] mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm md:text-base">Backups regulares e testados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00E5FF] mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm md:text-base">Conscientização sobre phishing e engenharia social</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00E5FF] mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm md:text-base">Criptografia de dados sensíveis</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0D0D0D] p-4 md:p-5 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#00E5FF] mb-4 flex items-center gap-3">
                <span className="text-xl">🎯</span>
                Benefícios do Conhecimento
              </h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                O conhecimento básico de cibersegurança permite ao profissional ou entusiasta:
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <div className="bg-[#1A1A1A] p-3 md:p-4 rounded text-center hover:bg-[#2A2A2A] transition-colors">
                  <div className="text-[#00E5FF] text-sm md:text-base font-bold mb-1">Identificar</div>
                  <div className="text-xs text-gray-400">Ameaças em potencial</div>
                </div>
                <div className="bg-[#1A1A1A] p-3 md:p-4 rounded text-center hover:bg-[#2A2A2A] transition-colors">
                  <div className="text-[#00E5FF] text-sm md:text-base font-bold mb-1">Minimizar</div>
                  <div className="text-xs text-gray-400">Riscos e vulnerabilidades</div>
                </div>
                <div className="bg-[#1A1A1A] p-3 md:p-4 rounded text-center hover:bg-[#2A2A2A] transition-colors">
                  <div className="text-[#00E5FF] text-sm md:text-base font-bold mb-1">Aplicar</div>
                  <div className="text-xs text-gray-400">Medidas preventivas</div>
                </div>
                <div className="bg-[#1A1A1A] p-3 md:p-4 rounded text-center hover:bg-[#2A2A2A] transition-colors">
                  <div className="text-[#00E5FF] text-sm md:text-base font-bold mb-1">Proteger</div>
                  <div className="text-xs text-gray-400">Ambientes digitais</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Recursos & Links */}
        <section className="bg-[#1A1A1A] rounded-xl p-5 md:p-8 shadow-lg border border-gray-800">
          <motion.h3 
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#00E5FF] flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-2xl">🔗</span>
            Recursos e Leituras Complementares
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {recursos.map((recurso, index) => (
              <motion.div
                key={index}
                className="bg-[#0D0D0D] p-3 md:p-4 rounded-lg border border-gray-800 hover:border-[#00E5FF] transition-all duration-300 hover:scale-[1.02] group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <a
                  href={recurso.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="text-xl md:text-2xl mt-1">{recurso.icone}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#00E5FF] mb-1 text-sm md:text-base group-hover:underline truncate">
                        {recurso.nome}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400 mb-2 line-clamp-2">
                        {recurso.desc}
                      </p>
                      <div className="text-xs text-[#00E5FF] flex items-center gap-1">
                        <span>Acessar</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-center text-xs md:text-sm text-gray-500">
              💡 Dica: Explore esses recursos para aprofundar seu conhecimento em cibersegurança
            </p>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-800 text-center">
        <p className="text-xs md:text-sm text-gray-500">
          Conteúdo educacional sobre cibersegurança • Atualizado em 2025
        </p>
      </footer>
    </motion.div>
  );
}