import { useData } from '../DataContext'; // Import global data context
import { Link, useLocation } from 'react-router-dom';
import { headerLogo } from '../assets/images';
import Button from './Button';
import MenuBar from './MenuBar';

const Navbar = () => {
  const { navLinks, store } = useData(); // Access navLinks from global data context
  const location = useLocation()
  const isIndexRoute = location.pathname === '/';

  return (
    <div className="relative w-full bg-slate-100 opacity-75 shadow-lg">
      <div className={`${isIndexRoute? 'absolute' :'flex mb-24'} z-40 w-full h-24 justify-between`}>
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="">
            <img src={headerLogo} alt="Logo" width={125} height={25} />
          </a>

          {/* Navigation Links */}
          <ul className="hidden sm:flex items-center space-x-8">
            {navLinks?.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="nav-li text-lg text-gray-700 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Button */}
          <Button label={store.label} link={'https://buy.igiti.africa' || store.link} />

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MenuBar />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
