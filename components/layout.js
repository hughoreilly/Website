import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.00"/>
                <title>Hugh O'Reilly</title>
            </Head>
            <main className={""}>
                <div className={"sm:w-9/12 mx-auto max-w-7xl"}>
                    {children}
                </div>
            </main>
        </>
    )
}