import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut, Box, MapPin, Settings } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useAuth } from '@/hooks/useAuth';
import { LanguageToggle } from '@/components/ui/LanguageToggle';


export function StickyHeader() {
  const { t } = useLanguage();
  const { user, loading, signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const hasToggledMenu = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setAccountOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false);
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
    { label: t('nav.3dPlan'), desc: t('nav.3dPlan.desc'), href: '/3d-plan', icon: Box, iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/30 shadow-lg', image: '/product-3d-plan.png' },
    { label: t('nav.tracking'), desc: t('nav.tracking.desc'), href: '/tracking', icon: MapPin, iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/30 shadow-lg', image: '/product-fleet.png' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-border'
          : 'bg-slate-950/20 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
          <img src="/logo.svg" alt="" className="h-7 w-auto" />
          <span className="text-xl font-bold text-foreground">LoadMind</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
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
              className={`absolute left-0 top-full mt-2 w-72 rounded-xl border border-border bg-surface p-2 shadow-xl shadow-background/50 transition-all duration-200 origin-top ${
                productsOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {productLinks.map((link, i) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-start gap-3 rounded-lg px-3 py-3 transition-all duration-150 hover:bg-elevated group ${
                    i > 0 ? 'mt-1' : ''
                  }`}
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${link.iconBg} mt-0.5 transition-transform duration-150 group-hover:scale-110`}>
                    <link.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{link.label}</p>
                    <p className="mt-0.5 text-xs text-muted-fg">{link.desc}</p>
                  </div>
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
          {!loading && (
            user ? (
              <div ref={accountRef} className="relative">
                <button
                  onClick={() => setAccountOpen(!accountOpen)}
                  className="flex items-center rounded-full transition-all duration-200 hover:ring-2 hover:ring-primary/50"
                >
                  {user.user_metadata?.avatar_url ? (
                    <img src={user.user_metadata.avatar_url} alt="" className="h-8 w-8 rounded-full object-cover" />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {(user.user_metadata?.display_name || user.email || '?')[0].toUpperCase()}
                    </div>
                  )}
                </button>
                <div
                  className={`absolute right-0 top-full mt-2 w-40 rounded-lg border border-border bg-surface p-1.5 shadow-xl shadow-background/50 transition-all duration-200 origin-top ${
                    accountOpen
                      ? 'opacity-100 scale-100 pointer-events-auto'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <Link
                    to="/account"
                    onClick={() => setAccountOpen(false)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-fg transition-all duration-150 hover:bg-elevated hover:text-foreground"
                  >
                    <Settings className="h-3.5 w-3.5" />
                    Account
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-fg transition-all duration-150 hover:bg-elevated hover:text-foreground"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    {t('nav.signOut')}
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-surface/50 hover:text-foreground transition-all duration-200">
                {t('nav.logIn')}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            hasToggledMenu.current = true;
            setMobileOpen(!mobileOpen);
          }}
          className="relative h-6 w-6 text-foreground md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <Menu className={`absolute inset-0 h-6 w-6 ${
            mobileOpen
              ? 'burger-out'
              : hasToggledMenu.current ? 'burger-bounce-in' : ''
          }`} />
          <X className={`absolute inset-0 h-6 w-6 ${
            mobileOpen
              ? 'burger-bounce-in'
              : 'burger-out'
          }`} />
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
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t('nav.products')}</p>
            <div className="mt-3 flex flex-col gap-3 pl-1">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-start gap-3 transition-colors hover:text-foreground"
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${link.iconBg}`}>
                    <link.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{link.label}</p>
                    <p className="text-xs text-muted-fg">{link.desc}</p>
                  </div>
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
            {!loading && (
              user ? (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => signOut()}
                    className="rounded-lg p-2 text-muted-fg transition-colors hover:bg-surface hover:text-foreground"
                    title={t('nav.signOut')}
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <Link to="/login" className="text-base text-muted-fg transition-colors hover:text-foreground">
                  {t('nav.logIn')}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
