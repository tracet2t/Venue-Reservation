// Save user data (e.g., after login)
export const saveUser = (user: { name: string; email: string }) => {
  try {
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

// Retrieve user data
export const getUser = (): { name: string; email: string } | null => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};

// Remove user data
export const removeUser = () => {
  try {
    localStorage.removeItem('user');
  } catch (error) {
    console.error('Error removing user data:', error);
  }
};

// Check if the user is authenticated
export const isAuthenticated = (): boolean => {
  try {
    return getUser() !== null; // User is authenticated if data exists
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
};
