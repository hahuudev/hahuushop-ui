import { getProductById } from "@/apis/products";
import FormProduct from "@/components/FormProduct";
import AdminLayout from "@/layouts/AdminLayout";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { useQuery } from "react-query";

type Props = {};

const EditProduct = (props: Props) => {
    const router = useRouter();

    const _id = router.query.id;

    const { data, isFetching } = useQuery(["pzs", _id], () => getProductById(_id as string), {
        enabled: !!_id,
    });

    if (isFetching) return <div>Loading</div>;

    return <FormProduct {...data?.data?.product} edit={true} />;
};

EditProduct.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};

export default EditProduct;
