import { copyrightSign } from '../assets/icons'
import {footerLogo} from '../assets/images'
import {footerLinks, socialMedia} from '../constants'
import {Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start
      gap-24 flex-wrap max-md:flex-col max-md:ml-5">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46}/>
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat
          text-white-400 font-bold '>
            Discover Africa, Piece by Piece
            </p>
            <div className='flex items-center gap-5 mt-8'>
              {socialMedia.map((icon)=>(
                <div key={icon} className='flex justify-center items-center
                w-12 h-12 bg-white rounded-full '>
                  <img src={icon.src} alt={icon.alt}
                  width={24} height={24 } />
                </div>
              ))}
            </div>
        </div>
        <div className='flex flex-1 justify-center max-md:gap-12
                  gap-10 flex-wrap'>
                    {footerLinks.map((section)=>(
                      <div key={section}>
                        <h4 className='text-white 
                        font-montserrat text-2xl leading-normal
                        font-medium mb-6 '>
                        {section.title}</h4>
                        <ul>{section.links.map((link)=>(
                          <li className='mt-3 text-gray-400 font-medium 
                          font font-montserrat text-base leading-normal
                          hover:text-slate-gray cursor-pointer'
                          key={link.name}>
                            <Link key={link.name} to={link.link}>{link.name}</Link>
                          </li>
                        ))}</ul>
                      </div>
                    ))}
                  </div>
      </div>
      <div className="flex justify-between 
      text-white-400 mt-24 max-sm:flex-col
      max-sm:items-center">
        <div className='flex flex-1 justify-start items-center
        gap-2 font-montserrat cursor-pointer'>
        <img src={copyrightSign} alt="Cpyright Sign"
        width={20} height={20} className='rounded-full m-0' />
      <p>Copyright. All Rights Reserved </p>
      </div>
      <p className='font-montserrat cursor-pointer'> 
      Terms And Conditions</p>
      </div>
    </footer>
  )
}

export default Footer