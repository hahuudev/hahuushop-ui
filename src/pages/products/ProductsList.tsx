import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductItem from "@/components/ProductItem";
import Pagination from "@mui/material/Pagination";

function ProductsList() {
    const router = useRouter();
    console.log(router.query.category);
    return (
        <Grid container spacing="12px" mt="20px">
            <Grid item lg={3}>
                <Box>
                    <Stack component="h4" direction="row" alignItems="center" sx={{ fontSize: "1.9rem" }}>
                        <AlignVerticalCenterIcon sx={{ mr: "1rem", fontSize: "2rem" }} />
                        Bộ lọc tìm kiếm
                    </Stack>

                    <Box sx={{ mt: "1rem" }}>
                        <Typography component="h4" sx={{ fontSize: "1.6rem", fontWeight: "450" }}>
                            Tìm theo khoảng giá
                        </Typography>

                        <Stack mt="8px" spacing='4px'>
                            <Link href="/">
                                <Typography
                                    component="span"
                                    sx={{ fontSize: "1.4rem", color: "#4b4b4b", "&:hover": { color: "#ff2222" } }}
                                >
                                    - Dưới 2 triệu
                                </Typography>
                            </Link>
                            <Link href="/">
                                <Typography
                                    component="span"
                                    sx={{ fontSize: "1.4rem", color: "#4b4b4b", "&:hover": { color: "#ff2222" } }}
                                >
                                    - Từ 2 - 5 triệu
                                </Typography>
                            </Link>
                            <Link href="/">
                                <Typography
                                    component="span"
                                    sx={{ fontSize: "1.4rem", color: "#4b4b4b", "&:hover": { color: "#ff2222" } }}
                                >
                                    - Từ 5 - 10 triệu
                                </Typography>
                            </Link>
                            <Link href="/">
                                <Typography
                                    component="span"
                                    sx={{ fontSize: "1.4rem", color: "#4b4b4b", "&:hover": { color: "#ff2222" } }}
                                >
                                    - Trên 10 triệu
                                </Typography>
                            </Link>
                        </Stack>
                    </Box>
                </Box>
            </Grid>

            <Grid item lg={9}>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing="30px"
                    sx={{ a: { fontSize: "1.66rem", "&:hover": { color: "#6b6b6b" } } }}
                >
                    <Link href="/" className="btn-active">
                        Phổ biến
                    </Link>
                    <Link href="/" className="btn-actives">
                        Bán chạy
                    </Link>
                    <Link href="/" className="btn-actives">
                        Hàng mới
                    </Link>
                    <Link href="/" className="btn-actives">
                        Từ thấp đến cao
                    </Link>
                    <Link href="/" className="btn-actives">
                        Từ cao đến thấp
                    </Link>
                </Stack>

                <Box sx={{ mt: "20px" }}>
                    <Stack sx={{ my: "14px" }}>
                        <Typography sx={{ fontSize: "22px" }}>Sản phẩm</Typography>
                    </Stack>

                    <Grid container spacing="4px">
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((product) => (
                            <Grid key={product} item xs={3}>
                                <ProductItem />
                            </Grid>
                        ))}
                    </Grid>

                    <Stack alignItems="center" justifyContent="center">
                        <Pagination count={10} page={20} sx={{ fontSize: "40px" }} />
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ProductsList;
