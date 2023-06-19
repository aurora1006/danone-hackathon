'use client'
import 'tailwindcss/tailwind.css'
import Logo from '../assets/logo.png'
import ContentfulImage from './contentful-image'
import Search from '../assets/search.svg'
import { useMediaQuery } from 'react-responsive'

export default function Menu() {

    const isMobile = useMediaQuery({ maxWidth: 767 });
      
    return (
        <section className="bg-menu">
            <div className="table w-screen">
                <div className="table-row ">
                    <div className="table-cell pt-[28.97px] pl-[48px] pb-[28.97px]" >
                        <ContentfulImage
                            src={Logo}
                            alt={"Logo"}
                            width={121}
                        />
                    </div>
                    <div className={`${isMobile ? 'hidden' : 'table-cell flex items-center'}`} >
                        <nav className="container">
                            <a href="/" className="text-menuLbl pl-[25px]">Home</a>
                            <a href="/products/products" className="text-menuLbl pl-[25px]">Products</a>
                            <a href="/diary/calories" className="text-menuLbl pl-[25px]">Diary</a>
                            <a href="#" className="text-menuLbl pl-[25px]">Contact</a>
                        </nav>
                    </div>

                    <div className={`${isMobile ? 'table-cell' : 'hidden'}`} >
                        <div className="dropdown">
                            <ul className="dropdown-menu">
                                <li><a href="/" className="text-menuLbl"></a>Home</li>
                                <li><a href="/products/products" className="text-menuLbl">Products</a></li>
                                <li><a href="/diary/calories" className="text-menuLbl"></a>Diary</li>
                                <li><a href="#" className="text-menuLbl">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="table-cell flex items-center">
                        <ContentfulImage
                            src={Search}
                            alt={"Custom"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
