import {useState, useEffect} from 'react'
import { copyrightSign } from '../assets/icons'
import {footerLogo} from '../assets/images'
import Subscribe from '../components/Subscribe'
import {Link} from 'react-router-dom'
import {client, urlFor} from '../assets/sanityClient'

const Footer = () => {
  const [socialMedia, setSocialMedia] = useState([]);
  const [footerLinks, setFooterLinks] = useState([])
  useEffect(()=>{
    const fetchSocials = async ()=>{
      const query = '*[_type=="socials"]'
      const data = await client.fetch(query)
      if (data && data.length > 0){
        setSocialMedia(data)
      } 
      else{
        console.warn("no data found")
      }
    }
    const fetchFooterLinks = async ()=>{
      const query = '*[_type=="footerLinks"] | order( order asc )'
      const data = await client.fetch(query)
      if (data && data.length > 0){
        setFooterLinks(data)
      } 
      else{
        console.warn("no data found")
      }
    }
    fetchSocials()
    fetchFooterLinks()
  }, [])

  return (
    <footer className="padding-x lg:pt-12 py-5 lg:pb-8 bg-black">
      <div className="footer-brand">
        <div className="footer-brand_container">
          <div><a href="/">
            <img src={footerLogo} width={150} height={46}/>
          </a>
          <p className='footer-brand_p'>
            Discover Africa, Piece by Piece
            </p></div>
          
            <div className='flex items-center gap-5 mt-8'>
              {socialMedia.map((icon)=>(
                <div key={icon} className='footer-brand_social'>
                  <a href={icon.link} target='blank'>
                  <img src={urlFor(icon.src).url()} alt={icon.alt}
                  width={24} height={24} />
                  </a>
                </div>
              ))}
            </div>
        </div>
        <div className='footer-info'>
                    {footerLinks.map((section)=>(
                      <div key={section}>
                        <h4 className='footer-info_h4 '>
                        {section.title}</h4>
                        <ul>{section.links.map((link)=>(
                          <li className='footer-info_li'
                          key={link.name}>
                            <Link key={link.name} to={link.link}>{link.name}</Link>
                          </li>
                        ))}</ul>
                      </div>
                    ))}
                  </div>
      </div>
      <div className="footer-last">
        <div className='footer-last_disclaimer'>
        <img src={copyrightSign} alt="Cpyright Sign"
        width={20} height={20} className='rounded-full m-0' />
      <p>Copyright. All Rights Reserved </p>
      </div>
      <Subscribe/>
      </div>
    </footer>
  )
}

export default Footer