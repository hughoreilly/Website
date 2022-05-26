import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.00"/>
                <title>Hugh O'Reilly</title>
            </Head>
            <main>{children}</main>
        </>
    )
}