import { formatApplicationError } from '.';

test('get returns an object', async () => {
  const errorString = 'this is bad';
  const error = new Error(errorString);
  const formattedError = formatApplicationError(error);
  const expectedError = {
    application_error: `Error: ${errorString}`,
  };
  expect(formattedError).toMatchObject(expectedError);
});