import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Hugh O'Reilly</title>
            </Head>
            <main>{children}</main>
        </>
    )
}