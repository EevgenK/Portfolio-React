export const formatKey = (e: string) => {
  if (typeof e !== 'string') {
    throw console.log('Wrong format');
  }

  return e.replace(/[^\w\s]/g, '_').replace(/\s+/g, '_');
};
