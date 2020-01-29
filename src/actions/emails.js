import { API } from 'aws-amplify';

export const sendWelcome = email => async () => {
  const APIBody = {
    emailAddress: email
  };
  debugger;
  try {
    await API.post('prod', '/emails/welcome', {
      body: APIBody
    });
  } catch (err) {
    debugger;
    console.error(err.message);
  }
};
