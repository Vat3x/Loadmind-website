import { useState } from 'react';
import { Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { Card } from '@/components/ui/Card';

const API_URL = 'https://admin-panel-be9fc.web.app/api/public/demo-request';

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();
  const [form, setForm] = useState({ name: '', email: '', subject: 'General', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const subjects = [
    { value: 'General', label: t('contact.form.subject.general') },
    { value: 'Pricing', label: t('contact.form.subject.pricing') },
    { value: 'API', label: t('contact.form.subject.api') },
    { value: 'Partnership', label: t('contact.form.subject.partnership') },
    { value: 'Bug Report', label: t('contact.form.subject.bug') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send message');
      setSubmitted(true);
      setForm({ name: '', email: '', subject: 'General', message: '' });
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses = 'w-full h-12 rounded-lg bg-slate-900 border border-slate-700 px-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-all';
  const selectClasses = inputClasses + ' cursor-pointer';

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-16 text-center">
        {/* Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden">
          <img src="/logo.svg" alt="" className="h-[28rem] w-[28rem] opacity-[0.04]" />
        </div>
        {/* Glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-600/8 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-bold md:text-5xl text-white">{t('contact.hero.title')}</h1>
          <p className="mt-4 text-slate-400">{t('contact.hero.subtitle')}</p>
        </div>
      </section>

      <section ref={ref} className="relative pb-20">
        {/* Bottom glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/3 h-[400px] w-[600px] rounded-full bg-blue-600/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* Info */}
            <div className="reveal reveal-delay-1 md:col-span-2">
              <Card>
                <h3 className="mb-4 text-lg font-semibold text-foreground">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:team@load-mind.com" className="text-sm text-muted-fg hover:text-foreground transition-colors">
                      {t('contact.info.email')}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-fg">{t('contact.info.location')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-fg">{t('contact.responseTime')}</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Form */}
            <div className="reveal reveal-delay-2 md:col-span-3">
              <Card>
                {submitted ? (
                  <div className="flex flex-col items-center gap-3 py-8 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                    <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
                    <p className="text-sm text-muted-fg">We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-sm text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                        {error}
                      </div>
                    )}
                    <div>
                      <label className="mb-1 block text-xs font-medium text-muted-fg">{t('contact.form.name')}</label>
                      <input
                        type="text"
                        required
                        className={inputClasses}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-muted-fg">{t('contact.form.email')}</label>
                      <input
                        type="email"
                        required
                        className={inputClasses}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-muted-fg">{t('contact.form.subject')}</label>
                      <select
                        className={selectClasses}
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      >
                        {subjects.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-muted-fg">{t('contact.form.message')}</label>
                      <textarea
                        required
                        rows={5}
                        className={inputClasses.replace('h-12', 'h-auto py-3')}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50"
                    >
                      {submitting ? 'Sending...' : t('contact.form.submit')}
                    </button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
