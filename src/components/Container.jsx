const Container = ({ as: Tag = 'div', className = '', ...props }) => (
  <Tag className={`mx-auto w-full max-w-page px-6 sm:px-16 ${className}`} {...props} />
);

export default Container;
