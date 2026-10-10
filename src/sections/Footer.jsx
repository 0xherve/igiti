import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import Container from '../components/Container';
import SiteLink from '../components/SiteLink';
import Subscribe from '../components/Subscribe';
import { urlFor } from '../assets/sanityClient';
import { useData } from '../DataContext';

const contactTarget = (name) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(name) || /^\+?[\d\s()-]{7,}$/.test(name) ? name : undefined;

const Footer = () => {
  const { socialMedia, footerLinks } = useData();

  return (
    <footer className="bg-black py-16 text-white">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col items-start">
            <SiteLink href="/">
              <img alt="Igiti Enterprises" src={footerLogo} width={90} height={80} className="h-20 w-auto" />
            </SiteLink>
            <p className="mt-6 font-montserrat font-bold text-white/80">Discover Africa, Piece by Piece</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {socialMedia.map((icon) => (
                <SiteLink
                  key={icon._id}
                  href={icon.link}
                  target="_blank"
                  className="flex size-12 items-center justify-center rounded-full bg-white"
                >
                  <img src={urlFor(icon.src, 48)?.url()} alt={icon.alt} width={24} height={24} />
                </SiteLink>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-16">
            {footerLinks.map((section) => (
              <div key={section._id || section.title}>
                <h4 className="mb-6 font-montserrat text-xl font-medium">{section.title}</h4>
                <ul className="flex flex-col gap-3">
                  {(section.links || []).map((link) => (
                    <li key={link.name}>
                      <SiteLink
                        href={link.link || contactTarget(link.name)}
                        className="font-montserrat font-medium text-gray-400 hover:text-white"
                      >
                        {link.name}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-montserrat text-white/80">
            <img src={copyrightSign} alt="" width={20} height={20} />
            <p>Copyright. All Rights Reserved</p>
          </div>
          <Subscribe />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
