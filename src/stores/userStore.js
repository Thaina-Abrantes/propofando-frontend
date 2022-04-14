import { useLocalStorage } from 'react-use';

export function useUser() {
  const [token, setToken, removeToken] = useLocalStorage('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNmVlNjMzLTU5OWItNDY5MC04ZWU5LWRkNjJkNGQyY2FmNiIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjQ5ODg1Mjg5LCJleHAiOjE2NDk5NzE2ODl9.1dLZnKudkFlFLSPgx00GgrlMMYQj99r5Jz6UKlsU3PQ');
  const [userData, setUserData, removerUserData] = useLocalStorage('userData');

  function handleClearUserData() {
    removeToken();
    removerUserData();
  }

  return {
    token,
    setToken,
    userData,
    setUserData,
    handleClearUserData,

  };
}
