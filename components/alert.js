import { useMediaQuery } from 'react-responsive'
import Info from '../assets/alert.svg'
import ContentfulImage from './contentful-image'

export default function Alert({ preview }) {

  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <div
      className="text-white pl-[400px] pr-[400px] pb-[10px]"
    >
      <div className="border-2 border-box pb-[10px] pl-[10px] r-[10px] bg-alertBg">
      <div className={`${isMobile ? 'flex justify-between' : 'flex justify-between'}`}>
      <ContentfulImage
          src={Info}
          alt={"Alert"}
          width={50}
        />
        <div className={`pt-[12px] pr-[10px] pl-[10px] ${isMobile ? 'flex text-alert  justify-center text-sm text-center' : 'flex text-alert justify-center text-sm'}`}>
          You must complete all the information in order to send it
        </div>
      </div>  
      </div>
    </div>
  )
}
