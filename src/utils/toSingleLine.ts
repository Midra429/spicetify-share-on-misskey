export const toSingleLine = (str: string) => {
  return str
    .split('\n')
    .map((line) => line.trim())
    .join('')
    .trim()
}
