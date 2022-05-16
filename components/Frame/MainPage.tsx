import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head'

type Props = {
    children: ReactNode;
}

const MainPage = ({children}: Props) => {
    return (
        <div>
            <div>
                <Head>
                    <title>Coral</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {
                    children
                }
            </div>
        </div>
    )
}

export default MainPage