import Container from "@mui/material/Container";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SeoBar from "./SeoBar";

function DefaultLayout({ children }: React.PropsWithChildren<{}>) {
    return (
        <>
            <Header />

            <main className="container ">
                <SeoBar />
                <Container className="max-w-layout">
                    {children}
                </Container>
            </main>
            
            <Footer />
        </>
    );
}

export default DefaultLayout;
