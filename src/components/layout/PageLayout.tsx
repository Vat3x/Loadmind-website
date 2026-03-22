import { Outlet } from 'react-router-dom';
import { StickyHeader } from './StickyHeader';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export function PageLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <StickyHeader />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

