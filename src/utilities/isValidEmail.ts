const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

const isValidEmail = (email: string): boolean => {
  if (typeof email !== "string" || email.length === 0) {
    return false;
  }
  return emailRegex.test(email);
};

export default isValidEmail;
