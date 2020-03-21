import { api } from "./api";
import { People } from "@interfaces";

export const getAll = (): Promise<People[]> =>
  api.get("/people").then(({ data: { results } }) => results);

export const getOne = (index: string | undefined): Promise<People> =>
  api.get(`/people/${index}`).then(({ data }) => data);
