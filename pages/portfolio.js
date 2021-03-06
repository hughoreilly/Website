import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Main from "../components/Main";
import Footer from '../components/footer'


export default function Portfolio() {
    return (
        <section>
                <h1 className={"text-hugh-blue"}>
                    Showing Off
                </h1>

            <div>
                <p className={"text-center"}>
                    This page is in progress.
                </p>
            </div>
        </section>
    )
}

Portfolio.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            <Main>
                {page}
            </Main>
            <Footer />
        </Layout>
    )
}