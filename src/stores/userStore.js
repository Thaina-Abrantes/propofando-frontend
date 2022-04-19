import { useLocalStorage } from 'react-use';

export function useUser() {
  const [token, setToken, removeToken] = useLocalStorage('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNmVlNjMzLTU5OWItNDY5MC04ZWU5LWRkNjJkNGQyY2FmNiIsImVtYWlsIjoibWFudUBlbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyIGFkbWluIiwiaWF0IjoxNjUwMzA0Mzg5LCJleHAiOjE2NTAzOTA3ODl9.9B3ltDLhf5JmGalOZH1VN9lmh0goJ5BiGGJsNY3IfcM');
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
