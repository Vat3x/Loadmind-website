import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { AuthProvider } from '@/auth/AuthContext';
import { PageLayout } from '@/components/layout/PageLayout';
import Landing from '@/pages/Landing';
import Pricing from '@/pages/Pricing';
import FAQ from '@/pages/FAQ';
import Product3DPlan from '@/pages/Product3DPlan';
import ProductTracking from '@/pages/ProductTracking';
import ApiIntegrations from '@/pages/ApiIntegrations';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import Support from '@/pages/Support';
import Demo from '@/pages/Demo';
import NotFound from '@/pages/NotFound';
import App3D from '@/pages/App3D';
import AppTracking from '@/pages/AppTracking';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import AuthCallback from '@/pages/AuthCallback';
import CheckoutReturn from '@/pages/CheckoutReturn';

const router = createBrowserRouter([
  { path: '/3d', element: <App3D /> },
  { path: '/tracker', element: <AppTracking /> },
  {
    element: <PageLayout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/3d-plan', element: <Product3DPlan /> },
      { path: '/tracking', element: <ProductTracking /> },
      { path: '/pricing', element: <Pricing /> },
      { path: '/api', element: <ApiIntegrations /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/demo', element: <Demo /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/auth/callback', element: <AuthCallback /> },
      { path: '/checkout/return', element: <CheckoutReturn /> },
      { path: '/terms', element: <Terms /> },
      { path: '/privacy', element: <Privacy /> },
      { path: '/support', element: <Support /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
