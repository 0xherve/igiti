import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/montserrat/wght.css';
import '@fontsource/palanquin/latin-400.css';
import '@fontsource/palanquin/latin-600.css';
import '@fontsource/palanquin/latin-700.css';
import './index.css';
import MainApp from './MainApp';

createRoot(document.getElementById('root')).render(
  <StrictMode><MainApp /></StrictMode>
);
