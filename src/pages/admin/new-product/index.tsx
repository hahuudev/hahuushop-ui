// import FormProduct from "@/components/FormProduct";
import AdminLayout from "@/layouts/AdminLayout";
import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

type Props = {};

const FormProduct = dynamic(() => import("@/components/FormProduct"), {
    ssr: false,
});

const NewProduct = (props: Props) => {
    return <FormProduct />;
};

export default NewProduct;

NewProduct.getLayout = (page: ReactNode) => {
    return <AdminLayout>{page}</AdminLayout>;
};
