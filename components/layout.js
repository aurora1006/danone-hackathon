import Footer from '../components/footer'
import Meta from '../components/meta'
import Menu from '../components/menu'
import 'tailwindcss/tailwind.css';
import ContentfulImage from './contentful-image'
import User from '../assets/user.svg';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="w-screen bg-layout flex justify-end">
        <ContentfulImage
          src={User}
          alt={"Login"}
        />
        <a href="#" className="text-white py-2 px-4">Login/Sign Up</a>
      </div>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}
