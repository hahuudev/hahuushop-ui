import { request } from "@/configs";
import { IProduct } from "@/types";

export const getAllProducts = () => {
    return request.get("/products");
};
export const getProductsByCategoryId = (id: string, option?: string) => {
    return request.get(`/products/category/${id}` +'?_sort=price&_order='+option);
};

export const getProductById = (id: string) => {
    return request.get("/product/" + id);
};
export const getProductBySlug = (slug: string) => {
    return request.get("/products/" + slug);
};

export const newProduct = (data: IProduct) => {
    return request.post("/products", data);
};
export const updateProduct = (data: IProduct) => {
    const { _id, slug, ...product } = data;
    return request.put("/products/" + _id, product);
};

export const deleteProduct = (id: string) => {
    return request.delete("/products/" + id);
};
