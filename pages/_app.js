import "../public/global.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>gustavo-sm</title>
                <link rel="icon" href="../public/favicon.ico" sizes="any" />    
            </Head>
            <Component {...pageProps} />
        </>

    );
}    