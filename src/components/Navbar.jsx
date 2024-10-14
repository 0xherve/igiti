import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import Button from './Button'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='nav'>
          <a href="/">
                <img src={headerLogo} alt="Nike" 
                width={130} height={29} />
          </a>
          <ul className='nav-list'>
            {navLinks.map((item=>(
              <li key={item.label} >
                <Link to={item.href} className='nav-li'>{item.label}</Link>
              </li>
            )))}
            <li className='right-12 absolute'><Button label="Shop Now" /></li>
          </ul>
        
          <div className='hidden max-md:block'>
            <img src={hamburger} alt="hamburger" width={25} height={25}/>
          </div>
    </nav>
  )
}

export default Navbar