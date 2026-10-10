import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    let id = hash.slice(1);
    try { id = decodeURIComponent(id); } catch { /* Keep malformed fragments literal. */ }
    document.getElementById(id)?.scrollIntoView();
  }, [pathname, hash, key]);

  return null;
}
