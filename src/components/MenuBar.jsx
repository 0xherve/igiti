import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { hamburger } from '../assets/icons';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../DataContext';

const MenuBar = () => {
  const { footerLinks, store } = useData(); // Access footerLinks from DataContext
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Menu as="div" className="relative">
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          <img src={hamburger} alt="hamburger" width={36} height={36} />
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition duration-75 ease-in"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems
            static
            className={`absolute items-center right-0 w-36 object-contain gap-16 my-2 origin-top-right rounded-md bg-pale-blue text-sm p-5 z-20 ${isOpen ? 'block' : 'hidden'}`}
          >
            <ul>
              {footerLinks && footerLinks.length > 0 ? (
                footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="nav-li w-full" onClick={handleCloseMenu}>
                      {link.label}
                    </Link>
                  </li>
                ))
              ) : (
                <p>Loading...</p>
              )}
              <MenuItem>
                <li>
                  <a
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit relative border border-orange-400 px-2 rounded-full"
                  >
                    <button onClick={handleCloseMenu}>{store.label}</button>
                  </a>
                </li>
              </MenuItem>
            </ul>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default MenuBar;
