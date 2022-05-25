import Layout from '../components/layout'
import Navbar from '../components/navbar'

export default function About() {
    return (
        <section>
            <div className={"text-hugh-black"}>
                <h1 className="text-center">
                    About
                </h1>
            </div>
        </section>
    )
}

About.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    )
}