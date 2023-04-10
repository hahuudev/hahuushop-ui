import { getCurrentUser } from "@/apis/auth";
import { Stack, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

function AdminLayout({ children }: React.PropsWithChildren<{}>) {
    const { data, isFetching } = useQuery("currentUser", getCurrentUser);
    const router = useRouter();


    useEffect(() => {
        // if (!data) {
        //     router.push("/");
        // }
        if (!isFetching && (!data?.data || data?.data?.user.role !== "admin")) {
            toast.info("Bạn không phải là admin hệ thống", { position: "top-center" });
            router.push("/");
        }
    }, [isFetching, data, router]);

    if (!isFetching && (!data?.data || data?.data?.user.role !== "admin")) {
        return null;
    }
    return (
        <Box>
            <AppBar sx={{ height: "60px", bgcolor: "#26b0d2" }}></AppBar>
            <Stack direction="row" sx={{ position: "relative", top: "60px", minHeight: "80vh" }} spacing="20px">
                <Box width="300px" bgcolor="#ccc">
                    <Link href="/admin">
                        <Typography sx={{ p: "10px 20px", fontSize: "1.4rem" }}>HOME</Typography>
                    </Link>
                    <Link href="/admin/products">
                        <Typography sx={{ p: "10px 20px", fontSize: "1.4rem" }}>Products</Typography>
                    </Link>
                    <Link href="/">
                        <Typography sx={{ p: "10px 20px", fontSize: "1.4rem" }}>Trở về website</Typography>
                    </Link>
                </Box>
                <Box component="main" flex="1">
                    {children}
                </Box>
            </Stack>
        </Box>
    );
}

export default AdminLayout;
