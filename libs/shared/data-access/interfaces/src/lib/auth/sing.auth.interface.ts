export interface ISingAuthPayload {
  username: string;
  password: string;
}

export interface ISingAuthResponse {
  accessToken: string;
  expiresIn: number;
  id: number;
}
