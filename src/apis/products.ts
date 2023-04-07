import { request } from "@/configs";

export const getAllProducts = () => {
    return request.get("/products");
};

export const getProductById = (id: string) => {
    return request.get("/products/" + id);
};
export const getProductBySlug = (slug: string) => {
    return request.get("/products/" + slug);
};

export const deleteProduct = (id: string) => {
    return request.delete("/products/" + id);
};
