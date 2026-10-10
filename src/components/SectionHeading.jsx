const SectionHeading = ({ children, description }) => (
  <div className="text-center">
    <h2 className="font-palanquin text-4xl font-bold">{children}</h2>
    {description && <p className="mx-auto mt-3 max-w-xl text-lg text-muted">{description}</p>}
  </div>
);

export default SectionHeading;
