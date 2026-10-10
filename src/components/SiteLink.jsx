import { Link } from 'react-router';

const homeSections = new Set(['hero', 'products', 'about-us', 'services', 'team', 'sponsors', 'review']);

function linkTarget(href) {
  if (typeof href !== 'string') return null;
  const target = href.trim();
  if (!target) return null;
  const section = target.replace(/^\/?#/, '');
  if (homeSections.has(section)) return `/#${section}`;
  if (target.startsWith('/') || target.startsWith('#')) return target;
  if (/^(https?:|mailto:|tel:)/i.test(target)) return target;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target)) return `mailto:${target}`;
  if (/^\+?[\d\s()-]{7,}$/.test(target)) return `tel:${target.replace(/[^+\d]/g, '')}`;
  if (/^[\w-]+(?:\.[\w-]+)+(?:[/:?#]|$)/.test(target)) return `https://${target}`;
  if (!/\s/.test(target) && !/^[a-z][a-z\d+.-]*:/i.test(target)) return `/${target}`;
  return null;
}

export default function SiteLink({ href, children, target, rel, ...props }) {
  const to = linkTarget(href);
  if (!to) return <span {...props}>{children}</span>;
  return (
    <Link to={to} target={target} rel={target === '_blank' ? 'noopener noreferrer' : rel} {...props}>
      {children}
    </Link>
  );
}
