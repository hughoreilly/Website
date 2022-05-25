import Layout from '../components/layout'
import Navbar from '../components/navbar'



export default function Home() {
  return (
      <section>
          <div className={"text-hugh-black"}>
              <h1 className="text-center">
                  Homepage
              </h1>
          </div>
      </section>
  )
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    )
}