import Layout from '../components/layout'
import Navbar from '../components/navbar'


export default function Blog() {
    return (
        <section>
            <div className={"text-hugh-black"}>
                <h1 className="text-center">
                    Blog
                </h1>
            </div>
        </section>
    )
}

Blog.getLayout = function getLayout(page) {
    return (
            <Layout>
                <Navbar />
                {page}
            </Layout>
    )
}