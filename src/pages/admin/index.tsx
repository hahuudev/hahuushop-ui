import React, { ReactNode } from "react";
import { NextPageWithLayout } from "../_app";
import AdminLayout from "@/layouts/AdminLayout";

type Props = {};

const AdminPage: NextPageWithLayout = (props: Props) => {
    return <div>AdminPage</div>;
};

export default AdminPage;
AdminPage.getLayout = (page: ReactNode) => {
    return <AdminLayout>{page}</AdminLayout>;
};
