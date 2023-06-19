'use client'
import { useRouter } from 'next/router'
import Imagen from '../../assets/intro.png'
import ContentfulImage from '../../components/contentful-image'
import 'tailwindcss/tailwind.css'
import { useMediaQuery } from 'react-responsive'

export default function Home() {

  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const handleButtonClick = () => {
    router.push(`/diary/calories`);
  }

  return (
    <section
      >
      <ContentfulImage
        src={Imagen}
        alt={"Intro"}
        className="w-screen"
      />
      <div className="flex text-68px font-bold pt-[53px] text-layout justify-center">
        Keep track of your daily calorie limit!
      </div>
      <div className="flex text-12px pt-[24px] pl-[10px] pr-[10px] text-layout justify-center">
        Tell us your maximum daily calorie intake and we will recommend the products that best suit your goals!
      </div>
      <div className={`${isMobile ? 'flex text-12px pt-[24px] pb-[10px] text-layout justify-center' : 'flex text-12px pt-[24px] pb-[52px] text-layout justify-center'}`}>
        <button className="py-2 px-4 border border-blue-700" onClick={handleButtonClick}>
          Start now
        </button>
      </div>
    </section>
  )
}
