import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';

const API_URL = 'https://admin-panel-be9fc.web.app/api/public/demo-request';

const BUSINESS_TYPES = [
  'Freight Broker',
  'Trucking Company',
  'Logistics Provider (3PL)',
  'Carrier',
  'Shipper',
  'Other',
];

const SHIPMENT_VOLUME_KEYS = [
  'demo.volume.1',
  'demo.volume.2',
  'demo.volume.3',
  'demo.volume.4',
];

export default function Demo() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    shipmentVolume: '',
    mcDot: '',
    preferredTime: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          subject: 'Demo Request',
          message: '',
          phone: form.phone,
          company: form.company,
          businessType: form.businessType,
          shipmentVolume: form.shipmentVolume,
          mcDot: form.mcDot,
          preferredTime: form.preferredTime,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      setError(t('demo.error'));
    } finally {
      setSubmitting(false);
    }
  };

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [key]: e.target.value });

  const inputClasses = 'w-full rounded-lg bg-slate-900 border border-slate-700 px-4 h-12 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors';
  const selectClasses = `${inputClasses} cursor-pointer`;
  const labelClasses = 'mb-1.5 block text-sm font-medium text-slate-300';

  return (
    <>
      <PageHero title={t('demo.title')} />

      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-4">
          <Card>
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-12 text-center">
                <CheckCircle className="h-14 w-14 text-green-500" />
                <h3 className="text-xl font-bold text-foreground">{t('demo.success.title')}</h3>
                <p className="text-sm text-muted-fg">{t('demo.success.desc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="rounded-lg bg-red-900/20 p-3 text-sm text-red-400">{error}</div>
                )}

                {/* First + Last Name */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses}>
                      {t('demo.firstName')} <span className="text-red-400">*</span>
                    </label>
                    <input type="text" required className={inputClasses} value={form.firstName} onChange={update('firstName')} />
                  </div>
                  <div>
                    <label className={labelClasses}>
                      {t('demo.lastName')} <span className="text-red-400">*</span>
                    </label>
                    <input type="text" required className={inputClasses} value={form.lastName} onChange={update('lastName')} />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelClasses}>
                    {t('demo.email')} <span className="text-red-400">*</span>
                  </label>
                  <input type="email" required className={inputClasses} value={form.email} onChange={update('email')} />
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClasses}>
                    {t('demo.phone')} <span className="text-red-400">*</span>
                  </label>
                  <input type="tel" required className={inputClasses} value={form.phone} onChange={update('phone')} />
                </div>

                {/* Company + Business Type */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses}>
                      {t('demo.company')} <span className="text-red-400">*</span>
                    </label>
                    <input type="text" required className={inputClasses} value={form.company} onChange={update('company')} />
                  </div>
                  <div>
                    <label className={labelClasses}>
                      {t('demo.businessType')} <span className="text-red-400">*</span>
                    </label>
                    <select required className={selectClasses} value={form.businessType} onChange={update('businessType')}>
                      <option value="" disabled>{t('demo.select')}</option>
                      {BUSINESS_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Shipment Volume + MC/DOT */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses}>
                      {t('demo.shipmentVolume')} <span className="text-red-400">*</span>
                    </label>
                    <select required className={selectClasses} value={form.shipmentVolume} onChange={update('shipmentVolume')}>
                      <option value="" disabled>{t('demo.select')}</option>
                      {SHIPMENT_VOLUME_KEYS.map((key) => (
                        <option key={key} value={t(key)}>{t(key)}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>
                      {t('demo.mcDot')}
                    </label>
                    <input type="text" className={inputClasses} value={form.mcDot} onChange={update('mcDot')} placeholder={t('demo.optional')} />
                  </div>
                </div>

                {/* Preferred time */}
                <div>
                  <label className={labelClasses}>
                    {t('demo.preferredTime')} <span className="text-red-400">*</span>
                  </label>
                  <textarea required rows={3} className={inputClasses.replace('h-12', 'py-3 h-auto')} value={form.preferredTime} onChange={update('preferredTime')} />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50"
                >
                  {submitting ? '...' : t('demo.submit')}
                </button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </>
  );
}
