import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { Button } from '@/components/ui/Button';

export function StickyHeader() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: t('nav.pricing'), href: '/pricing' },
    { label: t('nav.api'), href: '/api' },
    { label: t('nav.faq'), href: '/faq' },
  ];

  const productLinks = [
    { label: t('nav.3dPlan'), href: '/3d-plan' },
    { label: t('nav.tracking'), href: '/tracking' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-foreground">
          LoadMind
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {/* Products Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                productsOpen
                  ? 'bg-surface text-foreground'
                  : 'text-foreground/70 hover:bg-surface/50 hover:text-foreground'
              }`}
            >
              {t('nav.products')}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`absolute left-0 top-full mt-2 w-44 rounded-lg border border-border bg-surface p-1.5 shadow-xl shadow-background/50 transition-all duration-200 origin-top ${
                productsOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted-fg transition-colors hover:bg-elevated hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                location.pathname === link.href
                  ? 'text-foreground bg-surface/50'
                  : 'text-foreground/70 hover:bg-surface/50 hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <Button href="/app" size="sm">
            {t('nav.openApp')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-transparent'
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          {/* Products section */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">{t('nav.products')}</p>
            <div className="mt-2 flex flex-col gap-2 pl-3">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-base text-muted-fg transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-base text-muted-fg transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <LanguageToggle />
            <Button href="/app" size="sm">
              {t('nav.openApp')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
