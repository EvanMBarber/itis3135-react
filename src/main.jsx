import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Introduction from './Introduction';
import Contract from './Contract';
import Layout from './Layout';
import './itis3135.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="contract" element={<Contract />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);