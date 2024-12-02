// Navbar.js
import { useData } from '../DataContext'; // Import global data context
import { Link } from 'react-router-dom';
import { headerLogo } from '../assets/images';
import Button from './Button';
import MenuBar from './MenuBar';

const Navbar = () => {
  const { navLinks, store } = useData(); // Access navLinks from global data context
  return (
    <div className="relative hidden sm:block">
      <div className="absolute z-20 inset-x-0 top-4 flex justify-center">
      <div className="bg-slate-100 opacity-85 rounded-2xl shadow-lg px-4 max-w-4xl flex items-center justify-between">
        <nav className="flex items-center justify-between px-4 -my-2 gap-12">
          {/* Logo */}
          <a href="/" className="">
            <img src={headerLogo} alt="Logo" width={125} height={25} />
          </a>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-12">
            {navLinks?.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="nav-li text-xl text-gray-700 hover:text-gray-900">
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
    </div>
    
  );
};

export default Navbar;
