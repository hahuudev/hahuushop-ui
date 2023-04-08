import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <Stack height="100px" mt="50rem" p="0 2rem">
            <Stack direction="row" bgcolor="#fafafa"></Stack>

            <Box bgcolor="#F8F8F8" py="4rem">
                <Stack direction="row" justifyContent="space-around">
                    <Stack spacing="1rem">
                        <Link href="/">Điện thoại</Link>
                        <Link href="/">Điện thoại</Link>
                        <Link href="/">Điện thoại</Link>
                    </Stack>
                    <Stack spacing="1rem">
                        <Link href="/">Điện thoại</Link>
                        <Link href="/">Điện thoại</Link>
                        <Link href="/">Điện thoại</Link>
                    </Stack>
                    <Stack spacing="1rem">
                        <Link href="/">Điện thoại</Link>
                        <Link href="/">Điện thoại</Link>
                        <Link href="/">Điện thoại</Link>
                    </Stack>
                </Stack>

                <Typography textAlign="center" mt="4rem" sx={{ fontSize: "1.4rem" }}>
                    Tam Dương - Vĩnh Phúc. Desing & build by developer Hà Hữu 2023.
                </Typography>
            </Box>
        </Stack>
    );
}

export default Footer;
