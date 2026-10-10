import SiteLink from './SiteLink';

export const cardClass = 'rounded-card border border-line bg-white';

const Card = ({ href, className = '', ...props }) => {
  const classes = `${cardClass} ${className}`;
  if (href) return <SiteLink href={href} className={classes} {...props} />;
  return <div className={classes} {...props} />;
};

export default Card;
