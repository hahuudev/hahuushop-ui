import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function DefaultLayout({ children }: React.PropsWithChildren<{}>) {
    return (
        <>
            <Header />

            <div className="container">
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
}

export default DefaultLayout;
