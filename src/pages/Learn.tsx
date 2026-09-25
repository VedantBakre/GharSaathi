import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { lessonsData } from '../i18n/lessons';
import type { LessonContent } from '../i18n/lessons';
import { Smartphone, Zap, Home as HomeIcon, Shield, CheckCircle2, MessageCircle, Map, Mail, LayoutGrid, Droplet, Wallet, Trophy } from 'lucide-react';
import { getStorage } from '../utils/storage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { motion } from 'framer-motion';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'smartphone': return <Smartphone size={24} />;
    case 'zap': return <Zap size={24} />;
    case 'shield': return <Shield size={24} />;
    case 'home': return <HomeIcon size={24} />;
    case 'message-circle': return <MessageCircle size={24} />;
    case 'map': return <Map size={24} />;
    case 'mail': return <Mail size={24} />;
    case 'layout-grid': return <LayoutGrid size={24} />;
    case 'droplet': return <Droplet size={24} />;
    case 'wallet': return <Wallet size={24} />;
    default: return <Smartphone size={24} />;
  }
};

const Learn = () => {
  const { language, t } = useLanguage();
  useDocumentTitle('nav.learn');
  
  const lessons = lessonsData[language] || lessonsData['en'];
  const progress = getStorage<Record<string, boolean>>('gharsaathi-progress', {});

  const digitalLessons = lessons.filter(l => l.category === 'digital');
  const householdLessons = lessons.filter(l => l.category === 'household');

  // Progress stats
  const totalLessons = lessons.length;
  const completedLessons = lessons.filter(l => !!progress[l.id]).length;
  const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const renderLessonCard = (lesson: LessonContent) => {
    const isCompleted = !!progress[lesson.id];

    return (
      <Link 
        to={`/learn/${lesson.id}`} 
        key={lesson.id}
        className="block bg-white dark:bg-(--card-bg) border border-(--border-color) rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 rounded-xl flex items-center justify-center">
            {getIcon(lesson.icon)}
          </div>
          {isCompleted && (
            <div className="flex items-center text-green-500 text-sm font-medium">
              <CheckCircle2 size={16} className="mr-1" />
              {t('learn.done')}
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{lesson.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">{lesson.description}</p>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('nav.learn')}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            {t('learn.selectTopic')}
          </p>
        </div>

        {/* Progress Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 bg-white dark:bg-(--card-bg) border border-(--border-color) rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Trophy size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{t('learn.progress')}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {completedLessons} {t('learn.ofTotal')} {totalLessons} {t('learn.lessonsCompleted')}
                </p>
              </div>
            </div>
            <div className="text-3xl font-extrabold text-(--color-primary)">
              {progressPercent}%
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"
            />
          </div>

          {/* Individual lesson dots */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {lessons.map((lesson) => (
              <Link
                key={lesson.id}
                to={`/learn/${lesson.id}`}
                title={lesson.title}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-110 ${
                  progress[lesson.id]
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400'
                    : 'bg-slate-100 text-slate-400 dark:bg-slate-700 dark:text-slate-500'
                }`}
              >
                {progress[lesson.id] ? '✓' : '·'}
              </Link>
            ))}
          </div>

          {completedLessons === totalLessons && totalLessons > 0 && (
            <p className="text-center mt-4 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
              {t('learn.allCompleted')}
            </p>
          )}
        </motion.div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b border-(--border-color) pb-4">
            <Smartphone className="text-blue-500" size={28} />
            <h2 className="text-2xl font-bold">{t('home.digitalLife')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalLessons.map(renderLessonCard)}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-(--border-color) pb-4">
            <HomeIcon className="text-emerald-500" size={28} />
            <h2 className="text-2xl font-bold">{t('home.homeLife')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {householdLessons.map(renderLessonCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
