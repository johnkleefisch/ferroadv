/**
 * Script para funcionalidades dos botões WhatsApp
 * DiuferroAdv - Advocacia Criminal
 */

// Configurações do WhatsApp
const WHATSAPP_CONFIG = {
  numero: "5562995292129", // Número do WhatsApp (com código do país)
  baseUrl: "https://wa.me/",
};

// Função principal para abrir WhatsApp
function abrirWhatsApp(mensagem = "", opcoes = {}) {
  const {
    numero = WHATSAPP_CONFIG.numero,
    novaAba = true,
    rastrear = true,
  } = opcoes;

  // Encode da mensagem para URL
  const mensagemEncoded = encodeURIComponent(mensagem);

  // Monta a URL do WhatsApp
  const url = `${WHATSAPP_CONFIG.baseUrl}${numero}${
    mensagemEncoded ? `?text=${mensagemEncoded}` : ""
  }`;

  // Rastreamento opcional (analytics)
  if (rastrear) {
    console.log("WhatsApp aberto:", { mensagem, numero, url });
    // Aqui pode adicionar Google Analytics ou outro rastreamento
  }

  // Abre o WhatsApp
  if (novaAba) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = url;
  }

  return url;
}

// Função para detectar dispositivo móvel
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// Função para detectar se WhatsApp está instalado (aproximação)
function temWhatsApp() {
  return isMobile();
}

// Mensagens pré-definidas
const MENSAGENS_PADRAO = {
  agendarAtendimento: "Olá! Gostaria de agendar um atendimento com a advogada.",
  iniciarAtendimento: "Olá! Gostaria de iniciar um atendimento com a advogada.",
  emergencia: "Olá! Preciso de atendimento de emergência.",
  informacoes: "Olá! Gostaria de mais informações sobre os serviços.",
  consultaGratuita: "Olá! Gostaria de agendar uma consulta inicial gratuita.",
};

// Funções específicas para cada tipo de botão
const WhatsAppActions = {
  agendarAtendimento: () => {
    return abrirWhatsApp(MENSAGENS_PADRAO.agendarAtendimento);
  },

  iniciarAtendimento: () => {
    return abrirWhatsApp(MENSAGENS_PADRAO.iniciarAtendimento);
  },

  emergencia: () => {
    return abrirWhatsApp(MENSAGENS_PADRAO.emergencia);
  },

  informacoes: () => {
    return abrirWhatsApp(MENSAGENS_PADRAO.informacoes);
  },

  consultaGratuita: () => {
    return abrirWhatsApp(MENSAGENS_PADRAO.consultaGratuita);
  },

  // Função genérica para mensagem customizada
  custom: (mensagem) => {
    return abrirWhatsApp(mensagem);
  },
};

// Função para configurar eventos nos botões
function configurarBotoesWhatsApp() {
  // Seleciona todos os botões com data-whatsapp
  const botoes = document.querySelectorAll("[data-whatsapp]");

  botoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      e.preventDefault();

      const acao = botao.getAttribute("data-whatsapp");
      const mensagemCustom = botao.getAttribute("data-mensagem");

      if (mensagemCustom) {
        WhatsAppActions.custom(mensagemCustom);
      } else if (WhatsAppActions[acao]) {
        WhatsAppActions[acao]();
      } else {
        console.warn("Ação WhatsApp não encontrada:", acao);
        abrirWhatsApp();
      }
    });
  });
}

// Função para adicionar classe de dispositivo móvel
function adicionarClasseDispositivo() {
  if (isMobile()) {
    document.body.classList.add("mobile-device");
  } else {
    document.body.classList.add("desktop-device");
  }

  if (temWhatsApp()) {
    document.body.classList.add("has-whatsapp");
  }
}

// Inicialização automática quando o DOM estiver pronto
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      configurarBotoesWhatsApp();
      adicionarClasseDispositivo();
    });
  } else {
    configurarBotoesWhatsApp();
    adicionarClasseDispositivo();
  }
}

// Exporta para uso em outros módulos (se necessário)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    abrirWhatsApp,
    WhatsAppActions,
    configurarBotoesWhatsApp,
    MENSAGENS_PADRAO,
    isMobile,
    temWhatsApp,
  };
}

// Exporta para uso global no browser
if (typeof window !== "undefined") {
  window.WhatsAppScript = {
    abrirWhatsApp,
    WhatsAppActions,
    configurarBotoesWhatsApp,
    MENSAGENS_PADRAO,
    isMobile,
    temWhatsApp,
  };
}
