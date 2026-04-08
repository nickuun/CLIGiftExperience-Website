import { createHashRouter } from 'react-router-dom';
import { SiteShell } from './components/layout/SiteShell';
import { AboutPage } from './pages/AboutPage';
import { DemosPage } from './pages/DemosPage';
import { HomePage } from './pages/HomePage';
import { OrderPage } from './pages/OrderPage';
import { ThankYouPage } from './pages/ThankYouPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <SiteShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'demos', element: <DemosPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'order', element: <OrderPage /> },
      { path: 'thank-you', element: <ThankYouPage /> },
    ],
  },
]);
