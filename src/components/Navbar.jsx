// Navbar.js
import { useData } from '../DataContext'; // Import global data context
import { Link } from 'react-router-dom';
import { headerLogo } from '../assets/images';
import Button from './Button';
import MenuBar from './MenuBar';

const Navbar = () => {
  const { navLinks, store } = useData(); // Access navLinks from global data context
  console.log(store)
  return (
    <nav className='nav max-lg:px-8'>
      <a href="/">
        <img src={headerLogo} alt="Logo" width={130} height={29} />
      </a>
      <ul className='nav-list'>
        {navLinks?.map((item) => (
          <li key={item.href}>
            <Link to={item.href} className='nav-li text-xl'>
              {item.label}
            </Link>
          </li>
        ))}
        <li className='right-12 absolute'>
          <Button label={store.label} link={`${store.link} || https://igiti.myshopify.com/`} />
        </li>
      </ul>

      <div className='hidden max-lg:block'>
        <MenuBar />
      </div>
    </nav>
  );
};

export default Navbar;
