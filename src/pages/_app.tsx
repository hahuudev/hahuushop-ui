import DefaultLayout from "@/layouts/DefaultLayout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ReactElement } from "react";

type NextComponentType = {
    getLayout?: (page: ReactElement) => ReactElement;
};

type NextPageType = NextComponentType & {
    // Add any custom props here
};

type CustomAppProps = AppProps & {
    Component: NextPageType;
};

export default function App({ Component, pageProps }: CustomAppProps) {
    const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

    return getLayout(<Component {...pageProps} />);
}
