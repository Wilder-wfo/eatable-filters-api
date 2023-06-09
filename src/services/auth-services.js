import { tokenKey } from "../config/url";
import apiFetch from "./api-fetch";

export function login(credentials) {
  return apiFetch('/login', { body: credentials }).then((user) => {
    const { token, ...userdata } = user;
    sessionStorage.setItem(tokenKey, token);
    return userdata;
  });
}

export function logout() {
  return apiFetch('/logout', { method: 'DELETE' });
}
