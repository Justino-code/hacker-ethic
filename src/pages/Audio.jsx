import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaHeadphones, 
  FaPlay, 
  FaPause, 
  FaArrowRight,
  FaVolumeUp, 
  FaVolumeMute,
  FaDownload
} from "react-icons/fa";

export default function Audio() {
  const [audioPlaying, setAudioPlaying] = useState(null);
  const [currentTime, setCurrentTime] = useState({});
  const [duration, setDuration] = useState({});
  const [volume, setVolume] = useState(0.7); // Volume padrão
  const [muted, setMuted] = useState(false);
  const audioRefs = useRef({});

  // Áudios locais - apenas informações reais
  const audios = [
    {
      id: 1,
      titulo: "Introdução ao Ethical Hacking",
      descricao: "Conceitos fundamentais do hacking ético e diferenças entre hacking malicioso e ético.",
      source: "/audios/introducao-ethical-hacking.mp3",
      cor: "from-cyan-500 to-blue-500",
      corTexto: "text-cyan-400"
    },
    {
      id: 2,
      titulo: "Segurança de Redes - Firewalls",
      descricao: "Como funcionam firewalls e técnicas para proteger infraestruturas de rede.",
      source: "/audios/seguranca-redes-firewalls.mp3",
      cor: "from-green-500 to-emerald-500",
      corTexto: "text-green-400"
    },
    {
      id: 3,
      titulo: "Kali Linux - Ferramentas Básicas",
      descricao: "Guia das ferramentas essenciais do Kali Linux para iniciantes em pentest.",
      source: "/audios/kali-linux-basico.mp3",
      cor: "from-purple-500 to-pink-500",
      corTexto: "text-purple-400"
    },
    {
      id: 4,
      titulo: "Criptografia - TLS/SSL Essentials",
      descricao: "Fundamentos dos protocolos de segurança TLS/SSL e implementações práticas.",
      source: "/audios/criptografia-tls-ssl.mp3",
      cor: "from-yellow-500 to-amber-500",
      corTexto: "text-yellow-400"
    },
    {
      id: 5,
      titulo: "Blue Team vs Red Team",
      descricao: "Estratégias de defesa (Blue Team) e ataque (Red Team) em segurança corporativa.",
      source: "/audios/blue-red-team.mp3",
      cor: "from-red-500 to-orange-500",
      corTexto: "text-red-400"
    },
    {
      id: 6,
      titulo: "Forense Digital - Casos Práticos",
      descricao: "Análise de casos reais de forense digital e investigação de incidentes.",
      source: "/audios/forense-digital.mp3",
      cor: "from-indigo-500 to-purple-500",
      corTexto: "text-indigo-400"
    }
  ];

  // Função para obter duração real do áudio
  const handleLoadedMetadata = (audioId, e) => {
    const audioDuration = e.target.duration;
    setDuration(prev => ({
      ...prev,
      [audioId]: audioDuration
    }));
  };

  // Função para calcular tempo decorrido
  const handleTimeUpdate = (audioId, e) => {
    setCurrentTime(prev => ({
      ...prev,
      [audioId]: e.target.currentTime
    }));
  };

  const togglePlay = (audioId) => {
    const audio = audioRefs.current[audioId];
    
    if (!audio) return;

    if (audioPlaying === audioId) {
      audio.pause();
      setAudioPlaying(null);
    } else {
      // Pausar áudio atual se houver
      if (audioPlaying) {
        const currentAudio = audioRefs.current[audioPlaying];
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
      }
      
      audio.volume = muted ? 0 : volume;
      audio.play().catch(error => {
        console.error("Erro ao reproduzir áudio:", error);
      });
      setAudioPlaying(audioId);
    }
  };

  const handleSeek = (audioId, value) => {
    const audio = audioRefs.current[audioId];
    if (audio) {
      audio.currentTime = value;
      setCurrentTime(prev => ({
        ...prev,
        [audioId]: value
      }));
    }
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    // Atualizar volume em todos os áudios
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) {
        audio.volume = value;
      }
    });
  };

  const toggleMute = () => {
    const newMuted = !muted;
    setMuted(newMuted);
    // Aplicar mute/unmute em todos os áudios
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) {
        audio.muted = newMuted;
      }
    });
  };

  // Formatar tempo em MM:SS
  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A2E] min-h-screen text-white font-mono pt-14">
      {/* Header */}
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="text-center mb-6 sm:mb-10 w-full">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Áudios Educativos
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-3">
            Ouça podcasts e aulas sobre hacking ético e cibersegurança. 
            Clique em "Ouvir" para começar.
          </p>
        </div>

        {/* Lista de Áudios */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-8 sm:mb-12 w-full">
          {audios.map((audio) => (
            <div
              key={audio.id}
              className="group bg-gradient-to-br from-[#0A192F] to-[#0D1B2A] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-cyan-500/10 shadow-lg hover:border-cyan-500/30 transition-all duration-300 w-full"
            >
              {/* Áudio Element (escondido) */}
              <audio
                ref={el => audioRefs.current[audio.id] = el}
                src={audio.source}
                onTimeUpdate={(e) => handleTimeUpdate(audio.id, e)}
                onLoadedMetadata={(e) => handleLoadedMetadata(audio.id, e)}
                onEnded={() => setAudioPlaying(null)}
                preload="metadata"
              />

              <div className="flex flex-col sm:flex-row items-start gap-4">
                {/* Ícone do Áudio */}
                <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${audio.cor} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                    <FaHeadphones className="text-white text-lg sm:text-xl" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0 w-full">
                  <div className="mb-3">
                    <h2 className={`text-base sm:text-lg lg:text-xl font-bold ${audio.corTexto} group-hover:text-white transition-colors duration-300 mb-2`}>
                      {audio.titulo}
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {audio.descricao}
                    </p>
                  </div>

                  {/* Player de Áudio */}
                  <div className="bg-[#0D0D0D] rounded-lg sm:rounded-xl p-3 space-y-3">
                    {/* Controles */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                      {/* Botão Play/Pause */}
                      <button
                        onClick={() => togglePlay(audio.id)}
                        className={`w-full sm:w-auto px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 ${
                          audioPlaying === audio.id 
                            ? 'bg-cyan-500 hover:bg-cyan-600' 
                            : 'bg-cyan-500 hover:bg-cyan-600'
                        }`}
                      >
                        {audioPlaying === audio.id ? (
                          <>
                            <FaPause className="text-white text-sm" />
                            <span className="text-sm font-semibold">Pausar</span>
                          </>
                        ) : (
                          <>
                            <FaPlay className="text-white text-sm ml-0.5" />
                            <span className="text-sm font-semibold">Ouvir Agora</span>
                          </>
                        )}
                      </button>

                      {/* Tempo */}
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                        <span>{formatTime(currentTime[audio.id] || 0)}</span>
                        <span>/</span>
                        <span>{formatTime(duration[audio.id]) || "Carregando..."}</span>
                      </div>

                      {/* Download */}
                      <button 
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 px-3 py-2 border border-green-500/30 rounded-lg hover:bg-green-500/10"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = audio.source;
                          link.download = audio.titulo.replace(/\s+/g, '-') + '.mp3';
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                      >
                        <FaDownload size={14} />
                        <span className="text-xs sm:text-sm">Download</span>
                      </button>
                    </div>

                    {/* Barra de Progresso */}
                    <div className="w-full">
                      <input
                        type="range"
                        min="0"
                        max={duration[audio.id] || 100}
                        value={currentTime[audio.id] || 0}
                        onChange={(e) => handleSeek(audio.id, parseFloat(e.target.value))}
                        className="w-full h-1.5 sm:h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                        title="Progresso"
                      />
                    </div>

                    {/* Controles de Volume (globais) */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <button
                          onClick={toggleMute}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-1"
                          title={muted ? "Ativar som" : "Desativar som"}
                        >
                          {muted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
                        </button>
                        <span className="hidden sm:inline">Volume:</span>
                      </div>
                      
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                        className="w-32 sm:w-40 accent-cyan-500"
                        title="Volume"
                        disabled={muted}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instruções */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/20 rounded-xl p-4 mb-6 sm:mb-8">
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-2">
              Como usar os áudios
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="bg-[#0A192F]/50 p-3 rounded-lg">
                <div className="text-cyan-400 font-bold mb-1">1. Ouvir Online</div>
                <p className="text-gray-300">Clique em "Ouvir Agora" para reproduzir diretamente no navegador.</p>
              </div>
              <div className="bg-[#0A192F]/50 p-3 rounded-lg">
                <div className="text-green-400 font-bold mb-1">2. Download</div>
                <p className="text-gray-300">Baixe os áudios para ouvir offline quando quiser.</p>
              </div>
              <div className="bg-[#0A192F]/50 p-3 rounded-lg">
                <div className="text-purple-400 font-bold mb-1">3. Controles</div>
                <p className="text-gray-300">Use os controles de volume e progresso para melhor experiência.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center w-full">
          <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-xl p-5 sm:p-6 lg:p-8 border border-cyan-500/20">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 mb-2 sm:mb-3">
              Explore mais conteúdo
            </h2>
            <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto">
              Continue sua jornada em cibersegurança com nossos outros recursos educativos.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <Link
                to="/video"
                className="px-4 sm:px-5 py-2 bg-gradient-to-r from-cyan-500 to-green-500 text-[#0D0D0D] font-bold rounded-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2"
              >
                Ver Vídeos
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/artigo"
                className="px-4 sm:px-5 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-xs sm:text-sm"
              >
                Ler Artigos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}