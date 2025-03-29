export const generateRandomLetter = (): string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

export const generateHash = (): string => generateRandomLetter() + Math.floor(Math.random() * 9999)

export const uriGenerator = (input: string): string =>
  `${input.toLowerCase().replace(/\s+/g, '-').substr(0, 8)}-${generateHash()}`
