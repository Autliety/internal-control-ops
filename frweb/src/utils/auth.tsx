import React from 'react';

const authContext = React.createContext<{ user?: any }>({});

export function useAuth() {
  return React.useContext(authContext);
}

export function useAuthProvider() {
  const [auth, setAuth] = React.useState<{ user?: any}>({});
  return {
    auth,
    setAuth,
    Provider: authContext.Provider
  }
}