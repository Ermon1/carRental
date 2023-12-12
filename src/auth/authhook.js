import { useEffect } from 'react';

const useAuth = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // No token found, navigate to the login page
      window.location.href = '/login';
    }
  }, []);
};

export default useAuth;
