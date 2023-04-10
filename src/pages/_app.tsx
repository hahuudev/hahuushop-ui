import DefaultLayout from "@/layouts/DefaultLayout";
import "@/styles/globals.scss";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import type { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <NextNProgress />
                {getLayout(<Component {...pageProps} />)}
                <ToastContainer />
            </QueryClientProvider>
        </>
    );
}
