import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldAlt, FaPlayCircle, FaGamepad, FaUsers } from "react-icons/fa";

export default function Home() {
  const features = [
    {
      icon: <FaShieldAlt className="text-xl sm:text-2xl" />,
      title: "Artigos",
      description: "Artigos educativos sobre cibersegurança e hacking ético.",
      color: "from-cyan-500 to-blue-500",
      link: "/artigo"
    },
    {
      icon: <FaPlayCircle className="text-xl sm:text-2xl" />,
      title: "Áudio e Vídeo",
      description: "Vídeos e podcasts sobre hacking ético e tecnologia.",
      color: "from-green-500 to-emerald-500",
      link: "/audio"
    },
    {
      icon: <FaGamepad className="text-xl sm:text-2xl" />,
      title: "Jogos Educativos",
      description: "Mini-jogos que simulam desafios de segurança digital.",
      color: "from-purple-500 to-pink-500",
      link: "/jogos"
    },
    {
      icon: <FaUsers className="text-xl sm:text-2xl" />,
      title: "Comunidade",
      description: "Comunidade para aprender técnicas éticas colaborativamente.",
      color: "from-yellow-500 to-amber-500",
      link: "/comunidade"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A2E] min-h-screen text-white font-mono pt-14">
      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Hacking Ethic
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Plataforma dedicada ao Hacking Ético e Cibersegurança. 
              Aprenda com artigos, áudios, vídeos e jogos educativos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/artigo"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-[#0D0D0D] font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Começar a Explorar
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/sobre"
                className="px-6 sm:px-8 py-3 border border-cyan-500/30 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-4">
              Nossos Conteúdos
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Diferentes formatos de aprendizado para dominar a cibersegurança
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-gradient-to-br from-[#0A192F] to-[#0D1B2A] rounded-xl p-4 sm:p-5 border border-cyan-500/10 shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-500 cursor-pointer text-center"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-3 flex items-center justify-center text-cyan-400 group-hover:text-green-400 transition-colors duration-300">
                  <span className="text-xs sm:text-sm font-semibold">Explorar</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 text-xs" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cyan-500/20 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4">
              Pronto para começar?
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto">
              Junte-se à comunidade e explore o mundo do hacking ético.
            </p>
            <Link
              to="/artigo"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-[#0D0D0D] font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Iniciar Aprendizado
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}