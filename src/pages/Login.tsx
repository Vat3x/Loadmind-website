import { SEO } from '@/components/SEO';
import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { useAuth } from '@/hooks/useAuth';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';

export default function Login() {
  const { t } = useLanguage();
  const { signIn, signInWithGoogle, signInWithApple } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/';
  const ref = useRevealChildren<HTMLElement>();
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const inputClasses = 'w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-fg focus:border-primary focus:ring-1 focus:ring-primary/30 focus:outline-none transition-all';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const { error: signInError } = await signIn(form.email, form.password);
    if (signInError) {
      setError(t('auth.login.invalidCredentials'));
      setSubmitting(false);
    } else {
      navigate(redirectTo);
    }
  };

  return (
    <>
      <SEO title="Sign In" description="Sign in to LoadMind." noindex />
      <PageHero title={t('auth.login.title')} />

      <section ref={ref} className="pb-20">
        <div className="mx-auto max-w-md px-4">
          <div className="reveal reveal-delay-1">
            <Card>
              <p className="mb-6 text-center text-sm text-muted-fg">{t('auth.login.subtitle')}</p>

              <div className="space-y-3">
                <button
                  onClick={() => signInWithGoogle(redirectTo)}
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-slate-900 transition-all hover:bg-slate-50 active:scale-[0.98]"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  {t('auth.continueWithGoogle')}
                </button>
                <button
                  onClick={() => signInWithApple(redirectTo)}
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-all hover:bg-elevated active:scale-[0.98]"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  {t('auth.continueWithApple')}
                </button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
                <div className="relative flex justify-center"><span className="bg-surface px-3 text-xs text-muted-fg">{t('auth.orDivider')}</span></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
                    {error}
                  </div>
                )}
                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-fg">{t('auth.login.email')}</label>
                  <input
                    type="email"
                    required
                    className={inputClasses}
                    placeholder={t('auth.login.email.placeholder')}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-fg">{t('auth.login.password')}</label>
                  <input
                    type="password"
                    required
                    className={inputClasses}
                    placeholder={t('auth.login.password.placeholder')}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50"
                >
                  {submitting ? t('auth.login.submitting') : t('auth.login.submit')}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-muted-fg">
                {t('auth.login.noAccount')}{' '}
                <Link to="/register" className="text-primary hover:underline">
                  {t('auth.login.signUpLink')}
                </Link>
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
