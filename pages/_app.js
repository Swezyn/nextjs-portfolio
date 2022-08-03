import React from 'react';
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
    <>
        <Head>
            <title>Elias Akesson</title>
            <meta name="viewport" content="width=1060px, maximum-scale=1.0" />
            <meta name="description" content="Elias Akesson is a web developer and designer from Sweden. He has a passion for creating beautiful and functional websites." />
        </Head>
        <Component {...pageProps} />
    </>
    );
}