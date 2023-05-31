export interface JasaAddMyProductRequest {
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: string;
  categoryId: string;
}

export interface JasaAddMyProductResponse {
  msg: string;
}
