import { hashSync } from "bcryptjs";

const getHashedPwd = (text: string) => {
  const MY_SALTROUNDS = parseInt(process.env.MY_SECRET as string) as number;
  const hash = hashSync(text, MY_SALTROUNDS);
  // setHashedPwd(hash);
  return hash;
};

export default getHashedPwd