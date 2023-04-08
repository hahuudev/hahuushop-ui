export interface IProduct {
    _id: number;
    name: string;
    slug?: string;
    price: number;
    original_price: number;
    description: string;
    images: { base_url: string }[];
}
