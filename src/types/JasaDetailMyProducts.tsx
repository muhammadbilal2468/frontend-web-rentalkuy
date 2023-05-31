export interface ProviderDetailProducts {
  company_name: string;
  company_number: string;
  company_email: string;
  account_name: string;
  account_number: string;
  address: string;
  role: string;
}

export interface JasaDetailMyProductResponse {
  uid: string;
  name: string;
  price: string;
  image: string;
  url: string;
  description: string;
  categoryId: number;
  providerId: number;
  quantity: string;
  provider: ProviderDetailProducts;
}
