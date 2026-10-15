import { useEffect, useRef, useState } from 'react';
import { hamburger } from '../assets/icons';
import SiteLink from './SiteLink';
import { useData } from '../DataContext';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navLinks, store } = useData();
  const sidebarRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleClickOutside = (event) => {
      if (!sidebarRef.current?.contains(event.target) && !triggerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative flex">
      <aside
        id="mobile-navigation"
        ref={sidebarRef}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed left-0 top-0 z-50 h-screen w-[60vw] overflow-y-auto bg-surface transition-all duration-300 ease-in-out sm:w-[300px] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-2xl text-black"
            aria-label="Close menu"
          >
            ×
          </button>
          <nav aria-label="Mobile navigation">
            <ul className="mt-12 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id || link.href || link.label}>
                  <SiteLink href={link.href} className="py-2 text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </SiteLink>
                </li>
              ))}
              <li>
                <SiteLink
                  href="https://play.igiti.africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center rounded-full bg-green-800 px-4 py-3 font-semibold text-white hover:bg-green-900"
                  onClick={() => setIsOpen(false)}
                >
                  Play Igiti
                </SiteLink>
              </li>
              {store && (
                <li>
                  <SiteLink
                    href={store.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-fit rounded-full border border-brand-400 px-4 py-2 text-center sm:hidden"
                    onClick={() => setIsOpen(false)}
                  >
                    {store.label}
                  </SiteLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex-1">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-4 lg:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <img src={hamburger} alt="" width={36} height={36} />
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
