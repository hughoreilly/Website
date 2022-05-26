import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Main from '../components/Main'



export default function About() {
  return (
      <>
          <h1 className>
              About Me
          </h1>

          <div className={"mx-auto w-9/12 py-4"}>
              <p className={"text-center"}>
                  I'm a full stack web developer with a background in insurance.
              </p>
              <p className={"text-center"}>
                  I currently work for <a className={"text-blue-400 ease-in duration-100 hover:text-blue-200"} target={"_blank"} rel={"noopener noreferrer"} href={"https://www.mosaichealth.io/"}>Mosaic Health</a>, a startup health fund offering an alternative to traditional employer health insurance.
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
            </Layout>
    )
}