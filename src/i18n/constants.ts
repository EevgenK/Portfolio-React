export const LOCALS = {
  EN: 'en',
  UK: 'uk-UA',
} as const;
export type LocalType = keyof typeof LOCALS;
export type LocalValueType = (typeof LOCALS)[LocalType];
