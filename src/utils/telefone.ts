/**
 * Utilitário centralizado para gerenciar ligações telefônicas
 * Facilita manutençãoexport default {
  iniciarLigacao,
  forcarDiscador,
  copiarNumeroTelefone,
  getNumeroFormatado,
  getNumeroCompleto,
  dispositivoSuportaLigacoes,
  acionarTelefone
};nização dos números de telefone no site
 */

// Configuração centralizada dos números de telefone
const TELEFONE_CONFIG = {
  // Número principal do escritório
  principal: "62995292129",

  // Código de área padrão (Goiânia)
  codigoArea: "62",

  // Número formatado para exibição
  numeroFormatado: "(62) 99529-2129",

  // Número completo com código do país
  numeroCompleto: "+5562995292129",
};

/**
 * Inicia uma ligação telefônica
 * Abre o discador do dispositivo com o número configurado
 */
export function iniciarLigacao(): void {
  const numeroTelefone = `tel:${TELEFONE_CONFIG.numeroCompleto}`;
  window.open(numeroTelefone, "_self");
}

/**
 * Copia o número de telefone para a área de transferência
 * Útil para dispositivos desktop
 */
export async function copiarNumeroTelefone(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(TELEFONE_CONFIG.numeroFormatado);
    return true;
  } catch (error) {
    console.error("Erro ao copiar número:", error);
    return false;
  }
}

/**
 * Retorna o número formatado para exibição
 */
export function getNumeroFormatado(): string {
  return TELEFONE_CONFIG.numeroFormatado;
}

/**
 * Retorna o número completo com código do país
 */
export function getNumeroCompleto(): string {
  return TELEFONE_CONFIG.numeroCompleto;
}

/**
 * Verifica se o dispositivo suporta ligações (mobile)
 */
export function dispositivoSuportaLigacoes(): boolean {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Força abertura do discador em qualquer dispositivo
 * Usa tel: que funciona em mobile e muitos desktops modernos
 */
export function forcarDiscador(): void {
  const numeroTelefone = `tel:${TELEFONE_CONFIG.numeroCompleto}`;
  window.location.href = numeroTelefone;
}

/**
 * Função principal que tenta abrir o discador em qualquer dispositivo
 * Sempre tenta tel: primeiro, com fallback para desktop
 */
export async function acionarTelefone(): Promise<void> {
  // Sempre tenta abrir o discador primeiro
  iniciarLigacao();

  // Em desktop, também copia como backup (sem alert para não interromper)
  if (!dispositivoSuportaLigacoes()) {
    setTimeout(async () => {
      await copiarNumeroTelefone();
    }, 100);
  }
}

export default {
  iniciarLigacao,
  copiarNumeroTelefone,
  getNumeroFormatado,
  getNumeroCompleto,
  dispositivoSuportaLigacoes,
  acionarTelefone,
};
