import SiteLink from './SiteLink';

const Button = ({ label, iconURL, link, type = 'button', disabled = false, fullWidth = false, className = '' }) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 font-montserrat text-lg font-medium leading-none text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60 ${fullWidth ? 'w-full' : ''} ${className}`;
  const content = (
    <>
      {label}
      {iconURL && <img src={iconURL} alt="" className="size-5" />}
    </>
  );

  if (link) {
    return (
      <SiteLink href={disabled ? undefined : link} className={classes} aria-disabled={disabled || undefined}>
        {content}
      </SiteLink>
    );
  }

  return <button type={type} disabled={disabled} className={classes}>{content}</button>;
};

export default Button;
