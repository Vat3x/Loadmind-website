import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { useAuth } from '@/hooks/useAuth';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';

export default function Login() {
  const { t } = useLanguage();
  const { signIn } = useAuth();
  const navigate = useNavigate();
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
      navigate('/3d');
    }
  };

  return (
    <>
      <PageHero title={t('auth.login.title')} />

      <section ref={ref} className="pb-20">
        <div className="mx-auto max-w-md px-4">
          <div className="reveal reveal-delay-1">
            <Card>
              <p className="mb-6 text-center text-sm text-muted-fg">{t('auth.login.subtitle')}</p>

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
