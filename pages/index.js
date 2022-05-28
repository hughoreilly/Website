import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Main from '../components/Main'
import Footer from '../components/footer'



export default function About() {
  return (
      <>
          <h1 className={"text-hugh-blue"}>
              Hugh O&apos;Reilly
          </h1>

          <div className={"mx-auto md:w-9/12 pb-4"}>
              <p className={"text-center pb-4"}>
                  I&apos;m a full stack web developer with a background in insurance.
              </p>
              <p className={"text-center"}>
                  I currently work for <a className={"text-hugh-blue ease-in duration-100 hover:text-blue-900"} target={"_blank"} rel={"noopener noreferrer"} href={"https://www.mosaichealth.io/"}>Mosaic Health</a>, a startup health fund offering an alternative to traditional employer health insurance.
              </p>
          </div>
    </>
  )
}

About.getLayout = function getLayout(page) {
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