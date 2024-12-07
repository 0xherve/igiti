import { useEffect, useRef, useState } from 'react';
import { hamburger } from '../assets/icons';
import { Link } from 'react-router-dom';
import { useData } from '../DataContext';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navLinks, store } = useData();
  const sidebarRef = useRef(null);

  // Function to close sidebar when clicking outside
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('button')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex relative">
      {/* Sidebar */}
      <aside 
        ref={sidebarRef}
        className={`h-screen w-[60vw] sm:w-[300px] fixed top-0 left-0 z-50 overflow-y-auto transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-pale-blue`}
      >
        <div className="p-4">
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-4 right-4 text-black text-2xl"
            aria-label="Close menu"
          >
            ×
          </button>
          <nav>
            <ul className="flex flex-col gap-4 mt-12">
              {navLinks && navLinks.length > 0 ? (
                navLinks.map((link) => (
                  <li key={link.id || link.label}>
                    <Link 
                      to={link.href} 
                      className="text-black hover:text-gray-600 py-2"
                      onClick={() => setIsOpen(false)} // Close sidebar on link click
                    >
                      {link.label}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">Loading...</li>
              )}
              {store && (
                <li>
                  <a 
                    href={store.link || 'igiti.myshopify.com'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-fit relative border border-orange-400 px-4 py-2 rounded-full sm:hidden text-center"
                    onClick={() => setIsOpen(false)} // Close sidebar on store link click
                  >
                    {store.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        <button 
          onClick={() => setIsOpen(true)} 
          className="p-4 lg:hidden" 
          aria-label="Open menu"
        >
          <img src={hamburger} alt="Menu" width={36} height={36} />
        </button>
      </main>
    </div>
  );
};

export default MenuBar;