const alphabet = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

const charValue = (char: string): number =>
  alphabet.indexOf(char.toUpperCase());

export const fromBase32 = (b32: string): number => {
  if (b32.length === 0) return 0;
  return charValue(b32.slice(-1)) + fromBase32(b32.slice(0, -1)) * 32;
};

export const toBase32 = (n: number): string => {
  const remainder = Math.floor(n / 32);
  const current = n % 32;
  if (remainder === 0) return alphabet[current];
  return `${toBase32(remainder)}${alphabet[current]}`;
};

export default { fromBase32, toBase32 };
