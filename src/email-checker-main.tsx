import React from 'react';
    import { createRoot } from 'react-dom/client';
    import EmailChecker from './email-checker';
    import './index.css';
    
    createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <EmailChecker />
      </React.StrictMode>
    );
