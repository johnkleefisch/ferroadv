/**
 * Função utilitária para iniciar conversas WhatsApp com saudação dinâmica
 * DiuferroAdv - Advocacia Criminal
 */

// Configurações do WhatsApp
const WHATSAPP_CONFIG = {
  numero: "55062995292129", // Número do WhatsApp (com código do país)
  baseUrl: "https://wa.me/",
};

// Função para obter saudação baseada no horário
function getGreeting(): string {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 18 || hour < 5) {
    return "Boa noite";
  } else if (hour >= 5 && hour < 12) {
    return "Bom dia";
  } else {
    return "Boa tarde";
  }
}

// Função principal para iniciar conversa WhatsApp
export function startWhatsappConversation(
  phoneNumber: string = WHATSAPP_CONFIG.numero,
  customMessage?: string
): void {
  const greeting = getGreeting();

  // Mensagem padrão com saudação dinâmica
  const defaultMessage = `${greeting}, Dra. Diulliany! Encontrei seu contato no site e gostaria de apoio jurídico.`;

  // Usa mensagem customizada ou padrão
  const message = customMessage || defaultMessage;

  // Encode da mensagem para URL
  const encodedMessage = encodeURIComponent(message);

  // Monta a URL do WhatsApp
  const url = `${WHATSAPP_CONFIG.baseUrl}${phoneNumber}?text=${encodedMessage}`;

  // Abre o WhatsApp em nova aba
  window.open(url, "_blank", "noopener,noreferrer");
}

// Função auxiliar para detectar se é dispositivo móvel
export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
