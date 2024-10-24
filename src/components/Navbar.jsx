import { Link } from 'react-router-dom';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import Button from './Button';
import MenuBar from './MenuBar';

const Navbar = () => {
  return (
    <nav className='nav max-lg:px-8'>
      <a href="/">
        <img src={headerLogo} alt="Nike" width={130} height={29} />
      </a>
      <ul className='nav-list'>
        {navLinks.map((item) => (
          <li key={item.label}>
            {/* Use Link from react-router-dom for dynamic navigation */}
            <Link to={item.href} className='nav-li text-xl'>
              {item.label}
            </Link>
          </li>
        ))}
        <li className='right-12 absolute'>
          <Button label="Shop Now" link='https://igitiecom.netlify.app/' />
        </li>
      </ul>

      <div className='hidden max-lg:block'>
        <MenuBar />
      </div>
    </nav>
  );
};

export default Navbar;