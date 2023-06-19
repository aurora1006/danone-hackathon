import Container from './container'
import ContentfulImage from './contentful-image'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import { useMediaQuery } from 'react-responsive'

export default function Footer() {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="table w-screen bg-menu pt-[28.97px] pb-[28.97px]">
          <div className="table-row ">
            <div className="table-cell flex items-center">
              <nav className="container text-menuLbl">
                <a href="#" className={`${isMobile ? 'pl-[8px]' : 'pl-[25px]'}`}>NEWS</a>
                <a href="#" className={`${isMobile ? 'pl-[8px]' : 'pl-[25px]'}`}>PRODUCTS</a>
                <a href="#" className={`${isMobile ? 'pl-[8px]' : 'pl-[25px]'}`}>CONTACT</a>
                <a href="#" className={`${isMobile ? 'pl-[8px]' : 'pl-[25px]'}`}>HELP</a>
              </nav>
            </div>
            <div className={`table-cell ${isMobile ? 'pl-[8px]' : 'flex items-center'}`}>
              <ContentfulImage
                src={Instagram}
                alt={"Instagram"}
              />
            </div>
            <div className={`table-cell ${isMobile ? 'pl-[8px]' : 'flex items-center'}`}>
              <ContentfulImage
                src={Facebook}
                alt={"Facebook"}
              />
            </div>
            <div className={`table-cell ${isMobile ? 'pl-[8px]' : 'flex items-center'}`}>
              <ContentfulImage
                src={Twitter}
                alt={"Twitter"}
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
