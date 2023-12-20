import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full bg-white'>
        <nav className='flex justify-between items-center max-container'>
          <a href="/">
                <img src={headerLogo} alt="Nike" 
                width={130} height={29} className='mr-3'/>
          </a>
          <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
            {navLinks.map((item=>(
              <li key={item.label} >
                <a href={item.href} className='font-montserrat 
                leading-normal text-md font-bold text-slate-gray'>{item.label}</a>
              </li>
            )))}
          </ul>
          <div className='hidden max-md:block'>
            <img src={hamburger} alt="hamburger" width={25} height={25}/>
          </div>
        </nav>
    </header>
  )
}

export default Navbar