import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const exceptionRoutes = ['/#about-us'];
    if( !exceptionRoutes.includes(pathname)){
      window.scrollTo(0, 0);}  }, [pathname])
    

  return null;
};

export default ScrollToTop;
