import { request } from "./common";

export const signUp = async (body) => {
  try {
    const response = await request("/api/users/sign-up", "POST", body);

    return response;
  } catch (e) {
    return e;
  }
};
export const signIn = async (body) => {
  try {
    const response = await request("/api/users/log-in", "POST", body);
    console.log(response);
    return response;
  } catch (e) {
    return e;
  }
};
