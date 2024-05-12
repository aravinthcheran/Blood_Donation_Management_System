import bcryptjs from "bcryptjs";

// Decode the encrypted password
export const decodePassword = async (password, hash) => {
  return await bcryptjs.compare(password, hash);
};
