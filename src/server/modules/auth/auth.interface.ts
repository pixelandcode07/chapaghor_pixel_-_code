export type TLoginInput = {
  identifier: string; // ইমেইল অথবা ফোন নম্বর
  password: string;
};

export type TLoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    _id: string;
    name: string;
    email?: string;
    phone?: string;
    role: string;
    avatar?: string;
  };
};