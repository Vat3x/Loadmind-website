import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const triggerId = `faq-trigger-${index}`;

        return (
          <div key={index} className={`overflow-hidden rounded-2xl border bg-slate-900/70 backdrop-blur-sm transition-all duration-300 ${isOpen ? 'border-blue-500/30' : 'border-slate-800/50'}`} role="listitem">
            <button
              id={triggerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="group flex w-full items-center justify-between p-5 text-left transition-colors duration-200 hover:bg-surface/50"
            >
              <span className={`text-base font-medium pr-4 transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                {item.question}
              </span>
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-primary/10 text-primary rotate-180' : 'text-muted-fg group-hover:text-foreground'}`}>
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`accordion-content ${isOpen ? 'open' : ''}`}
            >
              <div className="accordion-inner">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-fg">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
