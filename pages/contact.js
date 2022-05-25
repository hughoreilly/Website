import Layout from '../components/layout'
import Navbar from '../components/navbar'

export default function Contact() {
    return (
        <section>
            <div className={"text-hugh-black"}>
                <h1 className="text-center">
                    Contact
                </h1>
            </div>
        </section>
    )
}

Contact.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    )
}