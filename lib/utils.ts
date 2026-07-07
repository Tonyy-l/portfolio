export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function buildMailtoLink(params: {
  recipientEmail: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}) {
  const subject = `Запитване от ${params.name} - ${params.company}`.trim();
  const body = [
    `Име: ${params.name}`,
    `Фирма: ${params.company}`,
    `Телефон: ${params.phone}`,
    `Имейл: ${params.email}`,
    `Тип проект: ${params.projectType}`,
    `Бюджет: ${params.budget}`,
    '',
    `Съобщение:`,
    params.message
  ].join('\n');

  return `mailto:${params.recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}