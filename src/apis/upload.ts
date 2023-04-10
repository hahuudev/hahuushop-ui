import { request } from "@/configs";

export const uploadFiles = (formData: any) => {
    return request.post("/images/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (data) => {},
    });
};
