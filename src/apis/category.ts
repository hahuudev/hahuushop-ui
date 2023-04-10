import { request } from "@/configs";

export const getAllCategories = () => {
   return request.get("/categories");
};
