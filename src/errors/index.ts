export const formatApplicationError = (e: Error): Record<string, string> => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('error is...');
    console.error(e);
  }
  return {
    application_error: e.toString(),
  };
};
