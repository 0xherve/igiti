import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { hamburger } from '../assets/icons';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../assets/sanityClient';

const MenuBar = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Fetch the navLinks array from the root-level array in Sanity
    const fetchNavLinks = async () => {
      const query = '*[_type == "navLinks"]{href, label} | order(order asc)'; // Query for navLinks array
      const data = await client.fetch(query);
      if (data) { // Check if data and links array exist
        setNavLinks(data); // Set the links array
      } else {
        console.warn("No navLinks data found");
      }
    };

    fetchNavLinks();
  }, []);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
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
              {navLinks ? (
                navLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className='nav-li w-full'>{link.label}</Link>
                  </li>
                ))
              ) : (
                <p>Loading...</p>
              )}
              <MenuItem>
                <li>
                  <a
                    href="https://igitiecom.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit relative border border-orange-400 px-2 rounded-full"
                  >
                    <button onClick={handleCloseMenu}>Shop Now</button>
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
