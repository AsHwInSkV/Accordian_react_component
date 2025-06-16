import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import AccordianContextProvider from './Context/AccordianContext.jsx';

createRoot(document.getElementById('root')).render(
  <AccordianContextProvider>
    <App />
  </AccordianContextProvider>
)
