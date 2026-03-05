import { createContext, useState, type ReactNode } from 'react';
import type { Lang } from './types';
import { en } from './en';
import { ge } from './ge';

const dictionaries = { en, ge } as const;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('loadmind-lang');
    return (saved === 'en' || saved === 'ge') ? saved : 'en';
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('loadmind-lang', newLang);
  };

  const t = (key: string): string => {
    return dictionaries[lang][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
