import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Main from "../components/Main";
import Footer from '../components/footer'


export default function Portfolio() {
    return (
        <section>
                <h1>
                    Showing Off
                </h1>

            <div>
                <p>
                    Test sentence
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