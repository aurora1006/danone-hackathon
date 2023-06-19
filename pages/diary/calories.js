import Container from '../../components/container'
import Layout from '../../components/layout'
import Head from 'next/head'
import { useMediaQuery } from 'react-responsive'
import Alert from '../../components/alert'

export default function Test({ preview }) {

  const isMobile = useMediaQuery({ maxWidth: 767 })
  const dasharray = 1000
  const dashoffset = 1000

  // const mostrarInputBtn = document.getElementById("mostrar-input-br");
  // const inputContainer = document.getElementById("input-container-br");
  
  const handleButtonClick = () => {
    
  }

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Calories`}</title>
        </Head>
        <Container>
          <section>
            <div className="flex justify-center items-center pt-[42px] pb-[14px]">

              <div className="w-4/5 max-w-screen-lg border border-borderTbl">

                <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center font-semibold' : 'flex text-layout pt-[52px] justify-center font-semibold text-xl'}`}>
                  <h1>Set your maximum calorie limit here!</h1>
                </div>

                <div className={`pt-[12px] ${isMobile ? 'flex text-layout  justify-center text-sm pl-[10px] pr-[10px] text-center' : 'flex text-layout justify-center text-sm'}`}>
                  Answer the following question in order to have your food information
                </div>

                <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center font-semibold' : 'flex justify-between pt-[25px] pl-[270px] pr-[270px]'}`}>
                  <div className="w-1/3 flex justify-center items-center">
                    <div className="grid grid-row-2">
                      <div className="flex text-layout justify-center text-xs ">1.291</div>
                      <div className="flex text-layout justify-center text-xs ">Consumed</div>
                    </div>
                  </div>
                  <div className="w-1/3 flex justify-center text-xl items-center w-20 h-20 rounded-full border-2 border-circle">
                    <div className="grid grid-row-2">
                      <div className="flex text-layout font-semibold justify-center">892</div>
                      <div className="flex text-layout justify-center text-xs">Remaining</div>
                    </div>
                  </div>
                  <div className="w-1/3 flex justify-center items-center">
                    <div className="grid grid-row-2">
                      <div className="flex text-layout justify-center text-xs ">244</div>
                      <div className="flex text-layout justify-center text-xs ">Burned</div>
                    </div>
                  </div>
                </div>
                
                <div className={`${isMobile ? 'flex justify-center items-center pt-[12px] pb-[124px]' : 'flex justify-center items-center pt-[42px]'}`}>
                  <div className="border-2 border-box pb-[10px]">
                    <div className={`${isMobile ? 'flex justify-between pt-[10px] pl-[150px] pr-[150px]' : 'flex justify-between pl-[100px] pr-[100px]'}`}>
                      <div className="flex items-center justify-center">
                        <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center font-semibold' : 'flex justify-between pt-[25px]'}`}>
                        <div className=" flex justify-center items-center">
                          <div className="grid grid-row-2 pr-[30px]">
                            <div className="flex text-layout justify-center text-xs ">Breakfast</div>
                            <div className="flex text-layout justify-center text-xs pb-[10px]">56/630 kcal</div>
                            <div id="input-container" className="hidden mt-4">
                              <input type="text" placeholder="Kcal" className="border border-gray-300 px-4 py-2 rounded"/>
                            </div>
                            <button id="mostrar-input-br" className="py-2 px-4 bg-addKcalBtn text-white rounded-lg" onClick={handleButtonClick}>
                              Add Kcal
                            </button>
                          </div>
                        </div>
                        </div>

                        {/* <svg className="transform -rotate-90 w-72 h-72">
                          <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="10" fill="transparent"
                            class="text-gray-700" />
                          <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="10" stroke-dasharray={`${dasharray}`}
                            stroke-dashoffset={`${dashoffset}`}
                            fill="transparent"
                            class="text-blue-500 " />
                        </svg> */}
                      </div>
                      <div className="flex items-center justify-center">
                        <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center font-semibold' : 'flex justify-between pt-[25px]'}`}>
                        <div className=" flex justify-center items-center">
                          <div className="grid grid-row-2 pl-[30px]">
                            <div className="flex text-layout justify-center text-xs ">Lunch</div>
                            <div className="flex text-layout justify-center text-xs pb-[10px]">30/670 kcal</div>
                            <button className="py-2 px-4 bg-addKcalBtn text-white rounded-lg">
                              Add Kcal
                            </button>
                          </div>
                        </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                <div className={`${isMobile ? 'flex justify-center items-center pt-[12px] pb-[124px]' : 'flex justify-center items-center pt-[42px] pb-[30px]'}`}>
                  <div className="border-2 border-box pb-[10px]">
                    <div className={`${isMobile ? 'flex justify-between pt-[10px] pl-[150px] pr-[150px]' : 'flex justify-between pl-[100px] pr-[100px]'}`}>
                      <div className="flex items-center justify-center">
                        <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center font-semibold' : 'flex justify-between pt-[25px]'}`}>
                        <div className=" flex justify-center items-center">
                          <div className="grid grid-row-2 pr-[30px]">
                            <div className="flex text-layout justify-center text-xs ">Dinner</div>
                            <div className="flex text-layout justify-center text-xs pb-[10px]">370/520 kcal</div>
                            <button className="py-2 px-4 bg-addKcalBtn text-white rounded-lg">
                              Add Kcal
                            </button>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className={`${isMobile ? 'flex text-layout pt-[12px] justify-center font-semibold' : 'flex justify-between pt-[25px]'}`}>
                        <div className=" flex justify-center items-center">
                          <div className="grid grid-row-2 pl-[30px]">
                            <div className="flex text-layout justify-center text-xs ">Snacks</div>
                            <div className="flex text-layout justify-center text-xs pb-[10px]">20/30 kcal</div>
                            <button className="py-2 px-4 bg-addKcalBtn text-white rounded-lg">
                              Add Kcal
                            </button>
                          </div>
                        </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                <div>
                  <Alert/>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}
