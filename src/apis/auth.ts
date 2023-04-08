import { request } from "@/configs";
import { CurrentUserType } from "@/types/user";

export const signin = (data: CurrentUserType) => {
    return request.post("/signin", data);
};
