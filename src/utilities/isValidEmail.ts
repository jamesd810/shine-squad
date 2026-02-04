const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email: string): boolean => {
  if (typeof email !== "string" || email.length === 0) {
    return false;
  }
  return emailRegex.test(email);
};

export default isValidEmail;
