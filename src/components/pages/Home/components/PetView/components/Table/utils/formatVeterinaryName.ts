export function formatVeterinaryName(name: string) {
  if (!name) return '-'

  let nameWithoutDr = ''

  const nameInLowerCase = name.toLowerCase()

  if (nameInLowerCase.startsWith('dr.') || nameInLowerCase.startsWith('dr ')) nameWithoutDr = nameInLowerCase.replace('dr ', '').replace('dr. ', '')

  const capitalized = nameWithoutDr
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');


  return `Dr. ${capitalized}`
}
