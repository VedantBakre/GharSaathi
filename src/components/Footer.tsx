import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-(--card-bg) border-t border-(--border-color) py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-(--color-primary) mb-2">GharSaathi</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {t('tagline')}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 max-w-sm">
              {t('footer.categories')}
            </p>
          </div>
          
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('footer.cefpProject')}
            </p>
            <p className="text-sm font-medium mt-1">
              {t('footer.createdBy')}
            </p>
            <a 
              href="mailto:vedantbakre@gmail.com" 
              className="text-xs text-(--color-primary) hover:underline mt-1 inline-block"
            >
              vedantbakre@gmail.com
            </a>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
              © {new Date().getFullYear()} GharSaathi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
