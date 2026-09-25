import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Home, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const NotFound = () => {
  const { t } = useLanguage();
  useDocumentTitle('notFound.title');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 mb-6">
          <AlertCircle size={40} />
        </div>
        <h1 className="text-6xl font-extrabold text-slate-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-slate-700 dark:text-slate-300">
          {t('notFound.title')}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          {t('notFound.message')}
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg"
        >
          <Home size={18} className="mr-2" />
          {t('notFound.goHome')}
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
