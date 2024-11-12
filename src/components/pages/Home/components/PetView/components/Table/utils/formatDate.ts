export function formatDate(date: Date): string {
  if (!date) return ''

  const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric', day: 'numeric' }

  return date.toLocaleDateString('pt-BR', options).replaceAll('de ', '')
}
