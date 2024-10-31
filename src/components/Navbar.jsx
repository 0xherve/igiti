// Navbar.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../assets/sanityClient';
import { headerLogo } from '../assets/images';
import Button from './Button';
import MenuBar from './MenuBar';

const Navbar = () => {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    // Fetch the navLinks array from the root-level array in Sanity
    const fetchNavLinks = async () => {
      const query = '*[_type == "navLinks"]{href, label} | order(order asc)'; // Query for navLinks array
      const data = await client.fetch(query);
      // console.log("Fetched navLinks data:", data); // Verify fetched data
      
      if (data) {
        setNavLinks(data);
        // console.log("data fetched")
      } else {
        console.warn("No navLinks data found");
      }
    };

    fetchNavLinks();
  }, []);

  return (
    <nav className='nav max-lg:px-8'>
      <a href="/">
        <img src={headerLogo} alt="Nike" width={130} height={29} />
      </a>
      <ul className='nav-list'>
        {navLinks.map((item) => (
          <li key={item.href}>
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
