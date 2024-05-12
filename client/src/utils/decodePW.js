import bcryptjs from "bcryptjs";

// Decode the encrypted password
export const decodePW = async (password, hash) => {
  return await bcryptjs.compare(password, hash);
};
