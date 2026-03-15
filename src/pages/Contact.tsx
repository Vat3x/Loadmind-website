import { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();
  const [form, setForm] = useState({ name: '', email: '', subject: 'General', message: '' });

  const subjects = [
    { value: 'General', label: t('contact.form.subject.general') },
    { value: 'Pricing', label: t('contact.form.subject.pricing') },
    { value: 'API', label: t('contact.form.subject.api') },
    { value: 'Partnership', label: t('contact.form.subject.partnership') },
    { value: 'Bug Report', label: t('contact.form.subject.bug') },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:team@loadmind.app?subject=${encodeURIComponent(`[${form.subject}] ${form.name}`)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
  };

  const inputClasses = 'w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-fg focus:border-primary focus:ring-1 focus:ring-primary/30 focus:outline-none transition-all';

  return (
    <>
      <PageHero title={t('contact.hero.title')} />

      <section ref={ref} className="pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* Info */}
            <div className="reveal reveal-delay-1 md:col-span-2">
              <Card>
                <h3 className="mb-4 text-lg font-semibold text-foreground">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:team@loadmind.app" className="text-sm text-muted-fg hover:text-foreground transition-colors">
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
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      className={inputClasses}
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
                      className={inputClasses}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]"
                  >
                    {t('contact.form.submit')}
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
