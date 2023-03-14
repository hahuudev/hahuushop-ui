import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SeoBar from "./SeoBar";

function DefaultLayout({ children }: React.PropsWithChildren<{}>) {
    return (
        <>
            <Header />

            <div className="container">
                <SeoBar />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
}

export default DefaultLayout;
