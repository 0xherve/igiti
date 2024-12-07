import { useData } from '../DataContext';
import { Link, useLocation } from 'react-router-dom';
import { headerLogo } from '../assets/images';
import Button from './Button';
import MenuBar from './MenuBar';

const Navbar = () => {
  const { navLinks, store } = useData();
  const location = useLocation();

  // Check if we're on the homepage
  const isHomepage = location.pathname === '/';

  return (
    <div className={`z-20 ${isHomepage ? 'absolute inset-x-0 top-4 mx-12' : 'flex flex-col w-full justify-between items-center'}`}>
      <div className={`bg-slate-100 mb-8 opacity-85 rounded-2xl shadow-lg ${isHomepage ? 'mx-auto max-w-3xl' : 'w-full'}`}>
        <nav className={`flex items-center justify-between -my-2 gap-12 ${isHomepage? 'px-4': 'px-[10%]'} `}>
          {/* Logo */}
          <a href="/" className="max-sm:max-w-24">
            <img src={headerLogo} alt="Logo" width={125} height={25} />
          </a>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-12 max-lg:hidden">
            {navLinks?.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="nav-li text-xl text-gray-700 hover:text-gray-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className='p-0 m-0 max-sm:hidden'>
            <Button label={store.label} link={store.link || 'https://buy.igiti.africa'} />
          </div>

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