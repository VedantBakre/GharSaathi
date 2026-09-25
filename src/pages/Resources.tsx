import { useLanguage } from '../contexts/LanguageContext';
import { resourcesData } from '../i18n/resources';
import { ExternalLink, Phone, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Resources = () => {
  const { t, language } = useLanguage();
  useDocumentTitle('nav.resources');
  const resources = resourcesData[language] || resourcesData['en'];

  const getIcon = (category: string) => {
    switch (category) {
      case 'emergency': return <Phone size={24} className="text-red-500" />;
      case 'government': return <Shield size={24} className="text-indigo-500" />;
      case 'digital': return <Globe size={24} className="text-blue-500" />;
      default: return <ExternalLink size={24} className="text-slate-500" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'emergency': return t('resources.emergency');
      case 'government': return t('resources.government');
      case 'digital': return t('resources.digital');
      default: return category;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('nav.resources')}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {resources.map((resource, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-(--card-bg) border border-(--border-color) rounded-2xl p-6 hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <ExternalLink size={20} className="text-slate-300 dark:text-slate-600 group-hover:text-(--color-primary) transition-colors" />
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                  {getIcon(resource.category)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {getCategoryLabel(resource.category)}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-(--color-primary) transition-colors">
                    {resource.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {resource.description}
              </p>
              
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-medium text-(--color-primary) hover:underline"
              >
                {resource.url.startsWith('tel:') ? t('resources.callNow') : t('resources.visitWebsite')}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Resources;
