type Authorization = {
  username: string;
  password: string;
};

export function decodeBasicAuth(authorization: string): Authorization {
  const [username, password] = Buffer.from(authorization, "base64")
    .toString("utf8")
    .split(":");

  return {
    username,
    password,
  };
}
