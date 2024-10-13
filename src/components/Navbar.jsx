import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center relative w-full padding-x gap-5'>
          <a href="/">
                <img src={headerLogo} alt="Nike" 
                width={130} height={29} />
          </a>
          <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
            {navLinks.map((item=>(
              <li key={item.label} >
                <a href={item.href} className='font-montserrat 
                leading-normal text-md font-bold text-slate-gray'>{item.label}</a>
              </li>
            )))}
          </ul>
          <Button label="Shop Now" className="flex flex-1 max-lg:hidden"/>
          <div className='hidden max-md:block'>
            <img src={hamburger} alt="hamburger" width={25} height={25}/>
          </div>
    </nav>
  )
}

export default Navbar