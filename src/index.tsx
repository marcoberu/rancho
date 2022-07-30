import { createRoot } from 'react-dom/client';

import { App } from './components/App';

import './sass/main.scss';

createRoot(document.getElementById('root')!).render(<App />);
