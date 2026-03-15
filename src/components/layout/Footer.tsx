import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="md:pr-8">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="LoadMind" className="h-8 w-8" />
              <span className="text-lg font-bold text-foreground">LoadMind</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-fg">
              {t('footer.description')}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">{t('footer.products')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/3d-plan" className="text-sm text-muted-fg hover:text-foreground transition-colors">
                  {t('footer.3dPlan')}
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="text-sm text-muted-fg hover:text-foreground transition-colors">
                  {t('footer.tracking')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-fg hover:text-foreground transition-colors">
                  {t('footer.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-sm text-muted-fg hover:text-foreground transition-colors">
                  {t('footer.api')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-fg hover:text-foreground transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-fg hover:text-foreground transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-fg hover:text-foreground transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-fg hover:text-foreground transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-fg hover:text-foreground transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-fg shrink-0" />
                <a href="mailto:team@loadmind.app" className="text-sm text-muted-fg hover:text-foreground transition-colors">
                  team@loadmind.app
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-fg shrink-0" />
                <span className="text-sm text-muted-fg">{t('footer.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-fg">{t('footer.builtBy')}</p>
          <p className="text-xs text-muted-fg">&copy; 2026 LoadMind</p>
        </div>
      </div>
    </footer>
  );
}
