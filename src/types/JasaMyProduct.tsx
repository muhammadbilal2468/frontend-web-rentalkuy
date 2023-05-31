export interface Provider {
  company_name: string;
  company_email: string;
  company_number: string;
}

export interface JasaMyProductResponse {
  uid: string;
  name: string;
  price: string;
  description: string;
  url: string;
  categoryId: number;
  providerId: number;
  quantity: string;
  provider: string;
}
