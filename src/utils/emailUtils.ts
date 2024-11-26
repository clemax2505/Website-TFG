export const formatEmailBody = (body: string): string => {
  // Remplace les sauts de ligne par des espaces pour éviter les problèmes d'encodage
  const formattedBody = body
    .replace(/\n\s*/g, '%0D%0A')
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ýÿ]/g, 'y')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c');

  return formattedBody;
};

export const openEmailClient = (subject: string, body: string) => {
  const formattedBody = formatEmailBody(body);
  const mailtoLink = `mailto:clementmontagepc@gmail.com?subject=${encodeURIComponent(subject)}&body=${formattedBody}`;
  window.location.href = mailtoLink;
};