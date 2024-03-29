import { getAllCategories } from "@/apis/category";
import { getAllProducts } from "@/apis/products";
import BoxModule from "@/components/BoxModule";
import ProductItem from "@/components/ProductItem";
import SliderHome from "@/components/SliderHome";
import { ICategory, IProduct } from "@/types";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const CategoryBoxStyle = styled(Link)({
    padding: "12px",
    border: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
        opacity: 0.9,
    },
});

type PropsType = {
    products: IProduct[];
    categories: ICategory[];
};

const Home = ({ products, categories }: PropsType) => {
    console.log(categories);
    const config = {
        // autoplay: true,
        delay: 5000,
        speed: 400,
        slidesPerView: 10,
        slidesPerGroup: 5,
        navigation: {
            prevEl: ".swiper-categories-prev",
            nextEl: ".swiper-categories-next",
        },
    };

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Box mt="20px">
                <Grid container>
                    <Grid item md={8.5} sx={{ borderRadius: "10px", overflow: "hidden", border: "1px solid #d4d4d4" }}>
                        <SliderHome />
                    </Grid>

                    <Grid item md={3.5}>
                        <Box ml="20px" sx={{ border: "1px solid #d4d4d4", borderRadius: "10px", overflow: "hidden" }}>
                            <Image
                                alt="h"
                                width={500}
                                height={500}
                                src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/df/9c/e5/7c57ed5071a5a5c5052873e835569ac4.png.webp"
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* Danh mục */}
                <BoxModule>
                    <Swiper {...config} style={{ padding: "2px" }}>
                        {[...categories, ...categories, ...categories].map((category, index) => (
                            <SwiperSlide key={index}>
                                <CategoryBoxStyle href={`/products?category=${category._id}`}>
                                    <Image
                                        width="200"
                                        height={200}
                                        objectFit="cover"
                                        layout="responsive"
                                        alt=""
                                        src="https://salt.tikicdn.com/cache/w1200/media/catalog/producttmp/84/3d/55/f86c2a0c2027505403d32c371b036f44.jpg"
                                    />
                                    <Typography
                                        component="h4"
                                        sx={{ textAlign: "center", fontSize: "1.32rem", color: "black" }}
                                    >
                                        {category.name}
                                    </Typography>
                                </CategoryBoxStyle>
                                <CategoryBoxStyle href={`/products?category=${category._id}`}>
                                    <Image
                                        width="200"
                                        height={200}
                                        objectFit="cover"
                                        layout="responsive"
                                        alt=""
                                        src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"
                                    />
                                    <Typography
                                        component="h4"
                                        sx={{ textAlign: "center", fontSize: "1.32rem", color: "black" }}
                                    >
                                        {category.name}
                                    </Typography>
                                </CategoryBoxStyle>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </BoxModule>

                {/* Product */}
                <BoxModule title="Danh sách sản phẩm">
                    <Grid container p="6px" spacing="8px">
                        {products.map((product, index) => (
                            <Grid key={index} item xs={2}>
                                <ProductItem {...product} />
                            </Grid>
                        ))}
                    </Grid>
                </BoxModule>
            </Box>
        </>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    const [res1, res2] = await Promise.all([getAllProducts(), getAllCategories()]);
    return {
        props: { products: res1.data.products, categories: res2.data.categories },
    };
};

