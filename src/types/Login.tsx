export interface LoginRequest {
  email: string;
  password: string;
}

export interface ProviderLogin {
  role: string;
  uid: string;
}

export interface LoginResponse {
  uid: string;
  name: string;
  email: string;
  role: string;
  provider: ProviderLogin;
}
