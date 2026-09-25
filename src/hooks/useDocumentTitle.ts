import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Sets the document <title> dynamically based on the current page and language.
 * @param titleKey - The translation key for the page title suffix (e.g. 'nav.learn')
 */
export const useDocumentTitle = (titleKey?: string) => {
  const { t } = useLanguage();

  useEffect(() => {
    const appTitle = t('appTitle') || 'GharSaathi';
    if (titleKey) {
      const pageTitle = t(titleKey);
      document.title = `${pageTitle} — ${appTitle}`;
    } else {
      const tagline = t('tagline') || '';
      document.title = `${appTitle} — ${tagline}`;
    }
  }, [titleKey, t]);
};
