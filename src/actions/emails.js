import { API } from "aws-amplify";

export const sendWelcome = email => async () => {
  const APIBody = {
    emailAddress: email
  };
  try {
    await API.post("prod", "/emails/welcome", {
      body: APIBody
    });
  } catch (err) {
    console.error(err.message);
  }
};
