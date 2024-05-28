export const isUUID = (uuid: string): boolean => {
  // const uuidRegex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$');
  const uuidRegex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f][0-9a-f]{3}-[0-9a-f]{12}$');

  return uuidRegex.test(uuid);
};

export const isIPv4 = (ip: string): boolean => {
  const ipRegex = new RegExp('^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$');
  return ipRegex.test(ip);
};

export const isMatricol = (matricol: string): boolean => {
  const matricolRegex = new RegExp('^[0-9]{9}[A-Z]{3}[0-9]{6}$');
  return matricolRegex.test(matricol);
};


export const isEmail = (email : string): boolean => {
  const emailRegex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i');
  return emailRegex.test(email);
};


