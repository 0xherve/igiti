import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants'
import { Fragment } from 'react';
import { Link } from 'react-scroll';
import Button from './Button';

const MenuBar = () => {
  return (
    <div className="">
      <Menu as="div" className="relative">
        <MenuButton >
          <img src={hamburger} alt="hamburger" width={45} height={45} />
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
          <MenuItems className="absolute right-0 w-48 gap-8 mt-2 origin-top-right rounded-md border border-white/5 bg-pale-blue text-sm/6 p-5 z-20">
            <MenuItem>
            <ul>
            {navLinks.map((item=>(
              <li key={item.label} >
                <Link to={item.href} className='nav-li'>{item.label}</Link>
              </li>
            )))}
          </ul>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default MenuBar;