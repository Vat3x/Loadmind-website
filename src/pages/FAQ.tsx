import { useLanguage } from '@/hooks/useLanguage';
import { PageHero } from '@/components/ui/PageHero';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export default function FAQ() {
  const { t } = useLanguage();

  const categories = [
    {
      titleKey: 'faqPage.general',
      items: [
        { question: t('faqPage.q1'), answer: t('faqPage.a1') },
        { question: t('faqPage.q2'), answer: t('faqPage.a2') },
        { question: t('faqPage.q3'), answer: t('faqPage.a3') },
      ],
    },
    {
      titleKey: 'faqPage.3dplan',
      items: [
        { question: t('faqPage.q4'), answer: t('faqPage.a4') },
        { question: t('faqPage.q5'), answer: t('faqPage.a5') },
        { question: t('faqPage.q6'), answer: t('faqPage.a6') },
        { question: t('faqPage.q7'), answer: t('faqPage.a7') },
        { question: t('faqPage.q8'), answer: t('faqPage.a8') },
      ],
    },
    {
      titleKey: 'faqPage.tracking',
      items: [
        { question: t('faqPage.q9'), answer: t('faqPage.a9') },
        { question: t('faqPage.q10'), answer: t('faqPage.a10') },
      ],
    },
    {
      titleKey: 'faqPage.pricingAccount',
      items: [
        { question: t('faqPage.q11'), answer: t('faqPage.a11') },
        { question: t('faqPage.q12'), answer: t('faqPage.a12') },
      ],
    },
  ];

  return (
    <>
      <PageHero title={t('faq.title')} />

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 space-y-12">
          {categories.map((cat) => (
            <div key={cat.titleKey}>
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                {t(cat.titleKey)}
              </h3>
              <FAQAccordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
