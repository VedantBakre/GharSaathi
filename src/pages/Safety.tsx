import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { safetyData } from '../i18n/safety';
import { ShieldCheck, ShieldAlert, AlertTriangle, CheckCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Safety = () => {
  const { language, t } = useLanguage();
  useDocumentTitle('nav.safety');
  const safetyContent = safetyData[language] || safetyData['en'];
  const scenarios = safetyContent.scenarios;
  
  const [activeScenario, setActiveScenario] = useState(0);
  const [userChoice, setUserChoice] = useState<'safe' | 'scam' | null>(null);

  const scenario = scenarios[activeScenario];

  const handleChoice = (choice: 'safe' | 'scam') => {
    if (userChoice !== null) return;
    setUserChoice(choice);
  };

  const nextScenario = () => {
    setUserChoice(null);
    setActiveScenario((prev) => (prev + 1) % scenarios.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4">
            <ShieldAlert size={32} />
          </div>
          <h1 className="text-4xl font-bold mb-4">{t('nav.safety')}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('safety.subtitle')}
          </p>
        </div>

        {/* Interactive Scam Identifier */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <AlertTriangle className="mr-2 text-amber-500" />
            {t('safety.scamIdentifier')}
          </h2>
          
          <div className="bg-white dark:bg-(--card-bg) rounded-2xl border border-(--border-color) shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-100 dark:bg-slate-800 border-b border-(--border-color) flex items-center gap-3">
              <MessageSquare className="text-slate-500" size={20} />
              <span className="font-semibold">{scenario.type === 'sms' ? t('safety.newSms') : t('safety.newWhatsapp')}</span>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 md:p-6 mb-8 border border-slate-200 dark:border-slate-700">
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">From: <span className="font-semibold text-slate-700 dark:text-slate-300">{scenario.sender}</span></div>
                <div className="text-lg text-slate-800 dark:text-slate-200 whitespace-pre-wrap">{scenario.message}</div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 text-center">{t('safety.whatDoYouThink')}</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleChoice('safe')}
                    disabled={userChoice !== null}
                    className={`flex-1 py-3 px-6 rounded-xl font-bold border-2 transition-all flex items-center justify-center ${
                      userChoice === 'safe' 
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                        : userChoice !== null 
                          ? 'border-slate-200 bg-slate-50 text-slate-400 dark:border-slate-700 dark:bg-slate-800/50'
                          : 'border-slate-200 bg-white hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <ShieldCheck className="mr-2" size={20} /> {t('safety.safe')}
                  </button>
                  
                  <button
                    onClick={() => handleChoice('scam')}
                    disabled={userChoice !== null}
                    className={`flex-1 py-3 px-6 rounded-xl font-bold border-2 transition-all flex items-center justify-center ${
                      userChoice === 'scam' 
                        ? 'border-red-500 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400' 
                        : userChoice !== null 
                          ? 'border-slate-200 bg-slate-50 text-slate-400 dark:border-slate-700 dark:bg-slate-800/50'
                          : 'border-slate-200 bg-white hover:border-red-500 hover:bg-red-50 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <AlertTriangle className="mr-2" size={20} /> {t('safety.suspicious')}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {userChoice && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className={`rounded-xl p-6 border ${
                      (userChoice === 'scam' && scenario.isScam) || (userChoice === 'safe' && !scenario.isScam)
                        ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                        : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {((userChoice === 'scam' && scenario.isScam) || (userChoice === 'safe' && !scenario.isScam)) ? (
                        <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                      ) : (
                        <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={24} />
                      )}
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          {((userChoice === 'scam' && scenario.isScam) || (userChoice === 'safe' && !scenario.isScam)) 
                            ? t('safety.correct')
                            : t('safety.notQuiteRight')}
                        </h4>
                        <p className="mb-4">{scenario.explanation}</p>
                        
                        {scenario.redFlags.length > 0 && (
                          <div className="mb-4">
                            <h5 className="font-semibold text-sm uppercase tracking-wider text-slate-500 mb-2">{t('safety.redFlags')}</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              {scenario.redFlags.map((flag, idx) => (
                                <li key={idx} className="text-red-700 dark:text-red-400 font-medium">{flag}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <button 
                          onClick={nextScenario}
                          className="mt-4 px-6 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                        >
                          {t('safety.tryAnother')}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </section>

        {/* Safety Topics List */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ShieldCheck className="mr-2 text-emerald-500" />
            {safetyContent.guidelinesTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {safetyContent.guidelines.map((rule, idx) => (
              <div key={idx} className="bg-white dark:bg-(--card-bg) p-5 rounded-xl border border-(--border-color) flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold mb-1">{rule.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Safety;
