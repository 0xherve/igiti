import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { hamburger } from '../assets/icons';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../DataContext';

const MenuBar = () => {
  const { navLinks, store } = useData(); // Access navLinks and store from DataContext
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle menu close
  const handleCloseMenu = () => {
    setIsOpen(false); // Close the menu by setting isOpen to false
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
            className="absolute right-0 w-36 object-contain gap-16 my-2 origin-top-right rounded-md bg-pale-blue text-sm p-5 z-20 "
          >
            {/* Flex container for nav links */}
            <ul className="flex flex-col gap-1">
              {navLinks && navLinks.length > 0 ? (
                navLinks.map((link) => (
                  <MenuItem key={link.href}>
                    <Link
                      to={link.href}
                      className="nav-li w-auto"
                      onClick={() => {
                        handleCloseMenu(); // Close menu after link is clicked
                      }}
                    >
                      {link.label}
                    </Link>
                  </MenuItem>
                ))
              ) : (
                <p>Loading...</p>
              )}
              {store && (
                <MenuItem>
                <a
                href={store.link || 'igiti.myshopify.com'} // Ensure there's a fallback if store.url is undefined
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit relative border border-orange-400 px-2 rounded-full"
                onClick={() => {
                  handleCloseMenu(); // Close the menu
                }}
              >
                {store.label}
              </a>

                </MenuItem>
              )}
            </ul>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default MenuBar;
