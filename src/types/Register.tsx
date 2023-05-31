export interface RegisterRequest {
  name: string;
  phone_number: string;
  identity_number: string;
  email: string;
  photo_identity: string;
  password: string;
  confPassword: string;
  perusahaan: string;
  number_jasa: string;
  lokasi: string;
}

export interface RegisterResponse {
  msg: string;
}
