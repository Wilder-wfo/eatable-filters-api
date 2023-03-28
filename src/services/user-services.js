import { tokenKey } from '../config/url';
import apiFetch from './api-fetch';

export const createUser = (userData) => {
  return apiFetch('/users', { body: userData }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
};

export function getUser() {
  return apiFetch('/profile').then((u) => {
    const { _token, ...user } = u;
    return user;
  });
}

export const upDateUser = (updateData) => {
  console.log(updateData);
  return apiFetch('/profile', { method: 'PATCH', body: updateData }).then(
    (u) => {
      const { _token, ...user } = u;
      window.location.reload();
      return user;
    }
  );
};
