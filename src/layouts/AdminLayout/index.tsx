import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React from "react";

function AdminLayout({ children }: React.PropsWithChildren<{}>) {
    return (
        <Box>
            <AppBar sx={{ height: "60px", bgcolor: "#26b0d2" }}></AppBar>
            <Stack direction="row" sx={{ position: "relative", top: "60px" }} spacing='20px'>
                <Box width="300px" bgcolor="red"></Box>
                <Box component="main" flex="1">
                    {children}
                </Box>
            </Stack>
        </Box>
    );
}

export default AdminLayout;
