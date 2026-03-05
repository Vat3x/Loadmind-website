import { useLanguage } from '@/hooks/useLanguage';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export function FAQSection() {
  const { t } = useLanguage();

  const items = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl gradient-text">
          {t('faq.title')}
        </h2>
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}
