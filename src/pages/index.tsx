import SliderHome from "@/components/SliderHome";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Box>
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
                                layout="responsive"
                                src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/df/9c/e5/7c57ed5071a5a5c5052873e835569ac4.png.webp"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
