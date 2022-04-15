import { useLocalStorage } from 'react-use';

export function useUser() {
  const [token, setToken, removeToken] = useLocalStorage('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNmVlNjMzLTU5OWItNDY5MC04ZWU5LWRkNjJkNGQyY2FmNiIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjUwMDU5NDU0LCJleHAiOjE2NTAxNDU4NTR9.Gv4eV0w7UP5aulkVk3v4j5t-t0v2NxC-YqJDA0rvARo');
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
