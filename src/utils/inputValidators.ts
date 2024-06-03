export const isUUID = (uuid: string): boolean => {
  // const uuidRegex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$');
  const uuidRegex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f][0-9a-f]{3}-[0-9a-f]{12}$');

  return uuidRegex.test(uuid);
};

export const isAccountUUID = (uuid: string): boolean => {
  const numericValue = parseInt(uuid, 10);

  return numericValue >= 1000 && numericValue <= 7999;
};

export const isIPv4 = (ip: string): boolean => {
  const ipRegex = new RegExp('^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$');
  return ipRegex.test(ip);
};

export const isDescriptionTrimmedMinLength = (description: string, minLength: number) => {
  return description?.trim().length >= minLength;
}

export const isCNP = (cnp: string): boolean => {
  const cnpRegex = new RegExp('^[1-9]{1}[0-9]{12}$');
  return cnpRegex.test(cnp);
};

export const isMatricol = (matricol: string): boolean => {
  const matricolRegex = new RegExp('^[0-9]{9}[A-Z]{3}[0-9]{6}$');
  return matricolRegex.test(matricol);
};

// Functia regex nu este corecta
// export const isEmail = (email : string): boolean => {
//   const emailRegex = new RegExp('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i');
//   return emailRegex.test(email);
// };

export const isEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

export const isEmailFaculty = (email: string): boolean => {
  const emailFacultyRegex = /^[A-Z0-9._%+-]+@info\.uaic\.ro$/i;
  return emailFacultyRegex.test(email);
};

export const isRecoveryCode = (recoveryCode: string): boolean => {
  const recoveryCodeRegex = new RegExp('^[0-9]{6}$');
  return recoveryCodeRegex.test(recoveryCode);
}

export const isPhoneNumber = (phoneNumber: string): boolean => {
  const phoneNumberRegex = /[0-9]+/i;
  return phoneNumberRegex.test(phoneNumber);
}
