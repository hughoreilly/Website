import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.00"/>
                <title>Hugh O&apos;Reilly</title>
                <link rel={"icon"} type="image/png" href="/WebsiteFavicon.png"/>
            </Head>
            <main className={""}>
                <div className={"w-11/12 sm:w-9/12 mx-auto max-w-7xl"}>
                    {children}
                </div>
            </main>
        </>
    )
}