import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import Box from "@mui/system/Box";

interface ProductItemProps {
    slug?: string;
}

function ProductItem({ slug }: ProductItemProps) {
    return (
        <Card
            sx={{
                p: "10px",
                position: "relative",
                zIndex: 2,
                "&:hover": {
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 20px",
                    zIndex: 1,
                    ".image-product": {
                        transform: "translateY(-8px)",
                    },
                },
                ".image-product": {
                    transition: "transform 0.2s linear",
                },
            }}
        >
            <Link href="/h">
                <Image
                    alt="d"
                    className="image-product"
                    src="https://salt.tikicdn.com/cache/750x750/ts/product/0f/08/21/8995e74fd95c47c4ab9ef244a5559176.png.webp"
                    layout="responsive"
                    width={200}
                    height={100}
                />

                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ color: "#ccc" }}>
                    <Typography component="span" sx={{ display: "flex", alignItems: "center", fontSize: "1.2rem" }}>
                        4.9 <StarIcon sx={{ ml: "4px", mt: "-1px", color: "#ece800" }} />
                    </Typography>
                    <span>|</span>
                    <Typography component="span">Đã bán 1000+</Typography>
                </Stack>

                <Typography
                    className="text-vertical vertical-2"
                    component="h3"
                    sx={{ my: "1.2rem", fontSize: "1.3rem", fontWeight: "650", color: "#3b3b3b" }}
                >
                    Apple iPad 10.2-inch (9th Gen) Wi-Fi, 2021
                </Typography>

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ color: "#ff3a47", fontSize: "1.2rem" }}
                >
                    <Typography sx={{ fontSize: "1.4rem" }}>6.889.000 Đ</Typography>
                    <Typography component="span">-23%</Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ position: "absolute", top: 0, left: 0, right: 0 }}
                >
                    <Box
                        sx={{
                            borderTopLeftRadius: "10px",
                            bgcolor: "#39a6fa",
                            display: "flex",
                            p: "4px 10px 0 10px",
                            fontSize: "1.08rem",
                            color: "#fff",
                        }}
                    >
                        Tài trợ
                    </Box>
                    <Box sx={{ m: "4px 10px 0 0 ", bgcolor: "#87ffdb", display: "flex", fontSize: "1rem", p: "0 1px" }}>
                        Yêu thích
                    </Box>
                </Stack>
            </Link>
        </Card>
    );
}

export default ProductItem;
