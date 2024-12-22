export function validateWhatsApp(number: string): boolean {
  const whatsappRegex = /^\+\d{1,3}\d{9,}$/;
  return whatsappRegex.test(number);
}