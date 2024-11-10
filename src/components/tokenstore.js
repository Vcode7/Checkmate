
export const setTokenInLocalStorage = (token) => {
    // Ensure we're running in the client-side (browser)
    if (typeof window !== 'undefined') {
      try {
        const existingToken = localStorage.getItem('Token');
  
        if (existingToken) {
          localStorage.removeItem('Token');
        }
  
        localStorage.setItem('Token', token);
      } catch (error) {
        console.error('Error saving token to localStorage:', error);
      }
    }
  };
  
  export const removeTokenFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('Token');
    }
  };
  