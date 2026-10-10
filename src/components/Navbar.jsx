import { useLocation } from 'react-router';
import { useData } from '../DataContext';
import { headerLogo } from '../assets/images';
import Button from './Button';
import Container from './Container';
import MenuBar from './MenuBar';
import SiteLink from './SiteLink';

const Navbar = () => {
  const { navLinks, store } = useData();
  const isHomepage = useLocation().pathname === '/';

  const bar = (
    <nav
      className={`flex items-center justify-between gap-4 rounded-card border border-line bg-white/95 px-4 py-3 sm:gap-8 sm:px-6 ${
        isHomepage ? 'mx-auto max-w-3xl' : ''
      }`}
    >
      <SiteLink href="/" className="shrink-0">
        <img src={headerLogo} alt="Igiti Enterprises" width={64} height={57} className="h-14 w-16 object-contain" />
      </SiteLink>

      <ul className="flex items-center gap-6 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.href}>
            <SiteLink href={item.href} className="font-montserrat font-semibold text-muted hover:text-gray-900">
              {item.label}
            </SiteLink>
          </li>
        ))}
      </ul>

      <div className="max-sm:hidden">
        <Button label={store?.label || 'Shop Now'} link={store?.link || 'https://buy.igiti.africa'} />
      </div>

      <div className="lg:hidden">
        <MenuBar />
      </div>
    </nav>
  );

  if (isHomepage) {
    return <header className="absolute inset-x-4 top-4 z-30 sm:inset-x-12">{bar}</header>;
  }

  return (
    <header className="relative z-30 pb-8">
      <Container className="pt-4">{bar}</Container>
    </header>
  );
};

export default Navbar;
