export const formatApplicationError = (e: Error): ErrorItem => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('error is...');
    console.error(e);
  }
  return {
    application_error: e.toString(),
  };
};

export type ErrorResponse = {
  errors: ErrorItem[];
};

type ErrorItem = Record<string, string>;