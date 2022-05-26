import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Main from "../components/Main";

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
        </Layout>
    )
}