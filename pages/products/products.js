import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllProducts } from '../../lib/api'
import ContentfulImage from '../../components/contentful-image'
import { useMediaQuery } from 'react-responsive'

export default function Products({ preview, allProducts }) {
  
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const handleButtonClick = () => {
    //Función para obtener detalle de producto
  }

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Products`}</title>
        </Head>
        <section >
          <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center font-semibold' : 'flex justify-between pt-[25px] pl-[270px] pr-[270px]'}`}>
            <div className="w-1/3 flex justify-center items-center">
              <div className="grid grid-row-2">
              <ContentfulImage
                  src={`${allProducts[0].coverImage.url}`}
                  alt={"Intro"}
                  width={250}
                  height={250}
                />
                <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center  pb-[10px]' : 'flex text-layout pt-[52px] justify-center font-semibold pb-[10px]'}`}>
                {`${allProducts[0].title}`}
                </div>
                <button id="mostrar-input-br" className="py-2 px-4 border-2 border-box text-layout rounded-lg" onClick={handleButtonClick}>
                  Show detail
                </button>
              </div>
            </div>
            <div className="w-1/3 flex justify-center items-center">
              <div className="grid grid-row-2">
              <ContentfulImage
                  src={`${allProducts[1].coverImage.url}`}
                  alt={"Intro"}
                  width={250}
                  height={250}
                />
                <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center  pb-[10px]' : 'flex text-layout pt-[52px] justify-center font-semibold pb-[10px]'}`}>
                {`${allProducts[1].title}`}
                </div>
                <button id="mostrar-input-br" className="py-2 px-4 border-2 border-box text-layout rounded-lg" onClick={handleButtonClick}>
                  Show detail
                </button>
              </div>
            </div>
          </div>
          <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center font-semibold' : 'flex justify-between pt-[25px] pl-[270px] pr-[270px] pb-[50px]'}`}>
            <div className="w-1/3 flex justify-center items-center">
              <div className="grid grid-row-2">
              <ContentfulImage
                  src={`${allProducts[2].coverImage.url}`}
                  alt={"Intro"}
                  width={250}
                  height={250}
                />
                <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center  pb-[10px]' : 'flex text-layout pt-[52px] justify-center font-semibold pb-[10px]'}`}>
                {`${allProducts[2].title}`}
                </div>
                <button id="mostrar-input-br" className="py-2 px-4 border-2 border-box text-layout rounded-lg" onClick={handleButtonClick}>
                  Show detail
                </button>
              </div>
            </div>
            <div className="w-1/3 flex justify-center items-center">
            <div className="grid grid-row-2">
            <ContentfulImage
                  src={`${allProducts[3].coverImage.url}`}
                  alt={"Intro"}
                  width={250}
                  height={250}
                />
                <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center  pb-[10px]' : 'flex text-layout pt-[52px] justify-center font-semibold pb-[10px]'}`}>
                {`${allProducts[3].title}`}
                </div>
                <button id="mostrar-input-br" className="py-2 px-4 border-2 border-box text-layout rounded-lg" onClick={handleButtonClick}>
                  Show detail
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  //Api para obtener productos desde GraphQL∫
  const allProducts = (await getAllProducts(false)) ?? []
  return {
    props: { allProducts },
  }

}