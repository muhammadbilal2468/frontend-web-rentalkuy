import { AxiosResponse } from "axios";
import { AdminDeleteJasaResponse } from "../types/AdminDeleteJasa";
import { AdminDeleteUserResponse } from "../types/AdminDeleteUser";
import { AdminDetailJasaResponse } from "../types/AdminDetailJasa";
import { AdminDetailUserResponse } from "../types/AdminDetailUser";
import { JasaResponse } from "../types/Jasa";
import { UserResponse } from "../types/User";
import httpRequest from "./api";

export const getUser = async (): Promise<AxiosResponse<UserResponse>> => {
  return await httpRequest.get("/me");
};

export const deleteUser = async (
  uiduser: any
): Promise<AxiosResponse<AdminDeleteUserResponse>> => {
  return await httpRequest.delete(`/delete/user/${uiduser}`);
};

export const detailUser = async (
  uiduser: any
): Promise<AxiosResponse<AdminDetailUserResponse>> => {
  return await httpRequest.get(`/user/${uiduser}`);
};

// ----

export const getJasa = async (
  uid: any
): Promise<AxiosResponse<JasaResponse>> => {
  return await httpRequest.get(`/mejasa/${uid}`);
};

export const deleteJasa = async (
  uidjasa: any
): Promise<AxiosResponse<AdminDeleteJasaResponse>> => {
  return await httpRequest.delete(`/delete/jasa/${uidjasa}`);
};

export const detailJasa = async (
  uidjasa: any
): Promise<AxiosResponse<AdminDetailJasaResponse>> => {
  return await httpRequest.get(`/jasa/${uidjasa}`);
};
