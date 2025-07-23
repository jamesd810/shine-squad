const phoneRegex = /^\+?[1-9]\d{1,14}$/;

const isValidPhoneNumber = (phoneNumber: number | string): boolean => {
  if (typeof phoneNumber !== "string" || phoneNumber.length === 0) {
    return false;
  }
  return phoneRegex.test(phoneNumber);
};

export default isValidPhoneNumber;
