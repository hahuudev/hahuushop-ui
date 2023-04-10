import { request } from "@/configs";
import { CurrentUserType } from "@/types/user";

export const signin = (data: CurrentUserType) => {
    return request.post("/signin", data);
};
export const signup = (data: CurrentUserType) => {
    return request.post("/signup", data);
};
export const logout = () => {
    const token = JSON.parse(localStorage.getItem("token") as string);

    return request.get("/auth/logout", {
        headers: {
            access_token: "Bearer " + token,
        },
    });
};
export const getCurrentUser = () => {
    const token = JSON.parse(localStorage.getItem("token") as string);

    return request.get("/auth", {
        headers: {
            access_token: "Bearer " + token,
        },
    });
};
