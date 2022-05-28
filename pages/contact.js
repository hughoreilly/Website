import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Main from "../components/Main";
import Footer from '../components/footer'

export default function Contact() {

    return (
        <section>
                <h1 className={"text-hugh-blue"}>
                    Contact
                </h1>

            <p className={"text-center"}>If you want to get in touch, drop me a message on LinkedIn:</p>

            <div className={"mt-4 w-full mx-auto flex text-hugh-grey w-full"}>

                <iframe className={"mx-auto "} width={"285"} height={"280"} src={"/LinkedIn"} style={{ background: "url(/LoadingCircle.gif)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "300px"}}>

                </iframe>
            </div>

            <p className={"text-center"}>Or email me at <a className={"text-hugh-blue ease-in duration-100 hover:text-blue-900"} target={"_blank"} rel={"noopener noreferrer"} href={"mailto:hscoreilly@gmail.com"}>hugh@hcoreilly.com</a></p>

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