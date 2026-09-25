import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { lessonsData } from '../i18n/lessons';
import { getStorage, setStorage } from '../utils/storage';
import { ArrowLeft, CheckCircle2, AlertTriangle, Info, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const LessonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const lessons = lessonsData[language] || lessonsData['en'];
  
  const lesson = lessons.find(l => l.id === id);
  const fallbackLesson = lessonsData['en'].find(l => l.id === id);
  
  const currentLesson = lesson || fallbackLesson;

  // Dynamic page title
  useEffect(() => {
    if (currentLesson) {
      document.title = `${currentLesson.title} — GharSaathi`;
    }
  }, [currentLesson]);

  const [progress, setProgress] = useState<Record<string, boolean>>(() => 
    getStorage('gharsaathi-progress', {})
  );
  
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!currentLesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">{t('lesson.notFound')}</h2>
        <button onClick={() => navigate('/learn')} className="text-(--color-primary) hover:underline">
          {t('lesson.returnToLearn')}
        </button>
      </div>
    );
  }

  const isCompleted = !!progress[currentLesson.id];

  const handleComplete = () => {
    const newProgress = { ...progress, [currentLesson.id]: true };
    setProgress(newProgress);
    setStorage('gharsaathi-progress', newProgress);
  };

  const handleQuizSelect = (optionId: string) => {
    if (showExplanation) return;
    setQuizAnswer(optionId);
    setShowExplanation(true);
    handleComplete();
  };

  const renderSectionIcon = (type?: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="text-amber-500 mt-1 flex-shrink-0" size={24} />;
      case 'success': return <Zap className="text-emerald-500 mt-1 flex-shrink-0" size={24} />;
      default: return <Info className="text-blue-500 mt-1 flex-shrink-0" size={24} />;
    }
  };

  const renderSectionBg = (type?: string) => {
    switch (type) {
      case 'warning': return 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800/50';
      case 'success': return 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800/50';
      default: return 'bg-white border-(--border-color) dark:bg-(--card-bg)';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link to="/learn" className="inline-flex items-center text-slate-500 hover:text-(--color-primary) mb-8 font-medium transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          {t('lesson.backToLessons')}
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-xs font-bold uppercase tracking-wider">
              {currentLesson.category === 'digital' ? t('lesson.digitalLife') : t('lesson.homeLife')}
            </span>
            {isCompleted && (
              <span className="flex items-center text-green-500 text-sm font-bold">
                <CheckCircle2 size={18} className="mr-1" />
                {t('lesson.completed')}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{currentLesson.title}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">{currentLesson.description}</p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {currentLesson.sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (idx + 1) }}
              className={`p-6 rounded-2xl border ${renderSectionBg(section.type)}`}
            >
              <div className="flex gap-4">
                {renderSectionIcon(section.type)}
                <div>
                  <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                  <div className="space-y-2 text-slate-700 dark:text-slate-300">
                    {section.content.map((text, i) => (
                      <p key={i} className="leading-relaxed">{text}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {currentLesson.interactive && currentLesson.interactive.type === 'quiz' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-indigo-900 dark:text-indigo-300">
              {t('lesson.quizTitle')}
            </h3>
            <p className="text-lg mb-6 font-medium">{currentLesson.interactive.question}</p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {currentLesson.interactive.options?.map((opt) => {
                const isSelected = quizAnswer === opt.id;
                let btnClass = "border-2 rounded-xl p-4 text-left font-bold transition-all ";
                
                if (!showExplanation) {
                  btnClass += "border-indigo-200 bg-white dark:bg-slate-800 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/40";
                } else {
                  if (opt.isCorrect) {
                    btnClass += "border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400";
                  } else if (isSelected && !opt.isCorrect) {
                    btnClass += "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400";
                  } else {
                    btnClass += "border-slate-200 bg-slate-50 dark:bg-slate-800/50 opacity-50";
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleQuizSelect(opt.id)}
                    disabled={showExplanation}
                    className={btnClass}
                  >
                    {opt.text}
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-indigo-100 dark:border-indigo-800 shadow-sm"
              >
                <p className="font-medium">{currentLesson.interactive.explanation}</p>
              </motion.div>
            )}
          </motion.div>
        )}

        {!isCompleted && (!currentLesson.interactive || currentLesson.interactive.type !== 'quiz') && (
          <div className="flex justify-center mb-12">
            <button 
              onClick={handleComplete}
              className="flex items-center px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
            >
              <CheckCircle2 className="mr-2" />
              {t('lesson.markComplete')}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default LessonDetail;
