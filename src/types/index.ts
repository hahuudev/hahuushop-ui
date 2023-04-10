export interface IProduct {
    _id?: number;
    name: string;
    slug?: string;
    price: number;
    original_price: number;
    description: string;
    images: { url: string }[];
    categoryId?: string;
}
export interface ICategory {
    _id?: number;
    name: string;
}
