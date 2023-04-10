import { request } from "@/configs";

export const searchApi = (q: string) => {
    return request.get("/search?q=" + q);
};
