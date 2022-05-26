import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Main from "../components/Main";
import Footer from '../components/footer'

export default function Contact() {
    return (
        <section>
                <h1>
                    Contact
                </h1>

            <div>
                <p>
                    Test sentence
                </p>
            </div>
        </section>
    )
}

Contact.getLayout = function getLayout(page) {
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