import { AxiosResponse } from "axios";
import { request } from "http";
import {
  JasaAddMyProductRequest,
  JasaAddMyProductResponse,
} from "../types/JasaAddMyProducts";
import { JasaDeleteMyProductResponse } from "../types/JasaDeleteMyProducts";
import { JasaDetailMyProductResponse } from "../types/JasaDetailMyProducts";
import {
  JasaEditMyProductRequest,
  JasaEditMyProductResponse,
} from "../types/JasaEditMyProducts";
import { JasaMyProductResponse } from "../types/JasaMyProduct";
import httpRequest from "./api";

export const jasaAddMyProduct = async (
  request: JasaAddMyProductRequest
): Promise<AxiosResponse<JasaAddMyProductResponse>> => {
  return await httpRequest.post("/products", request);
};

export const jasaGetMyProduct = async (
  uid: any
): Promise<AxiosResponse<JasaMyProductResponse[]>> => {
  return await httpRequest.get(`/products/jasa/${uid}`);
};

export const jasaDeleteMyProduct = async (
  uidbarang: any
): Promise<AxiosResponse<JasaDeleteMyProductResponse[]>> => {
  return await httpRequest.delete(`/products/${uidbarang}`);
};

export const jasaEditMyProduct = async (
  request: JasaEditMyProductRequest,
  uidbarang: any
): Promise<AxiosResponse<JasaEditMyProductResponse>> => {
  return await httpRequest.put(`/products/${uidbarang}`);
};
export const jasaDetailMyProduct = async (
  uidbarang: any
): Promise<AxiosResponse<JasaDetailMyProductResponse>> => {
  return await httpRequest.get(`/product/jasa/${uidbarang}`);
};
