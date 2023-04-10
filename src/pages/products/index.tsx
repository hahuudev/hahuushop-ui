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
import { GetServerSideProps } from "next";
import { getProductsByCategoryId } from "@/apis/products";
import { IProduct } from "@/types";

function ProductsList({ products }: { products: IProduct[] }) {
    const router = useRouter();
    const id = router.query.category;
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

                        <Stack mt="8px" spacing="4px">
                            <Link href={`/products?category=${id}&price=2000`}>
                                <Typography
                                    component="span"
                                    sx={{ fontSize: "1.4rem", color: "#4b4b4b", "&:hover": { color: "#ff2222" } }}
                                >
                                    - Dưới 2 triệu
                                </Typography>
                            </Link>
                            <Link href={`/products?category=${id}&price=2000%5000`}>
                                <Typography
                                    component="span"
                                    sx={{ fontSize: "1.4rem", color: "#4b4b4b", "&:hover": { color: "#ff2222" } }}
                                >
                                    - Từ 2 - 5 triệu
                                </Typography>
                            </Link>
                            <Link href={`/products?category=${id}&price=5000%10000`}>
                                <Typography
                                    component="span"
                                    sx={{ fontSize: "1.4rem", color: "#4b4b4b", "&:hover": { color: "#ff2222" } }}
                                >
                                    - Từ 5 - 10 triệu
                                </Typography>
                            </Link>
                            <Link href={`/products?category=${id}&price=10000`}>
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
                    <Link href={`/products?category=${id}&sort=_new`} className="btn-active">
                        Phổ biến
                    </Link>
                    <Link href={`/products?category=${id}&sort=_seller`} className="btn-actives">
                        Bán chạy
                    </Link>
                    <Link href={`/products?category=${id}&sort=_new`} className="btn-actives">
                        Hàng mới
                    </Link>
                    <Link href={`/products?category=${id}&sort=desc`} className="btn-actives">
                        Từ thấp đến cao
                    </Link>
                    <Link href={`/products?category=${id}&sort=asc`} className="btn-actives">
                        Từ cao đến thấp
                    </Link>
                </Stack>

                <Box sx={{ mt: "20px" }}>
                    <Stack sx={{ my: "14px" }}>
                        <Typography sx={{ fontSize: "22px" }}>Sản phẩm</Typography>
                    </Stack>

                    <Grid container spacing="4px">
                        {products.map((product: IProduct) => (
                            <Grid key={product._id} item xs={3}>
                                <ProductItem {...product} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(context.query)
    const res = await getProductsByCategoryId(context.query.category as string, context.query.sort as string);
    return {
        props: { products: res.data.products },
    };
};
