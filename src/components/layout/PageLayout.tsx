import { Outlet } from 'react-router-dom';
import { StickyHeader } from './StickyHeader';
import { Footer } from './Footer';

export function PageLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
