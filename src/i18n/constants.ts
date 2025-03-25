export const LOCALS = {
  EN: 'en',
  UK: 'uk',
} as const;
export type LocalType = keyof typeof LOCALS;
export type LocalValueType = (typeof LOCALS)[LocalType];
