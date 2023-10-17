import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';

const el = document.querySelector('#_widgetRoot');
const root = createRoot(el);
root.render(<App />);
