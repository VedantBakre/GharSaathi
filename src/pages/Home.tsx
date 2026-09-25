import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Smartphone, Home as HomeIcon, ShieldCheck, Zap, ArrowRight, ArrowDown, MessageCircle } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Home = () => {
  const { t } = useLanguage();
  useDocumentTitle();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:[mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="text-lg">🏠 + ✦</span>
              {t('home.welcomeBadge')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">
              {t('home.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/learn"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-(--color-primary) hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
              >
                {t('home.startLearning')}
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link 
                to="/manage"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:border-slate-600 dark:hover:bg-slate-700 transition-colors shadow-md hover:shadow-lg hover:-translate-y-1 transform duration-200"
              >
                {t('home.manageHousehold')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('home.pillarsTitle')}</h2>
            <div className="w-20 h-1 bg-(--color-primary) mx-auto rounded-full"></div>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <Smartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t('home.digitalLife')}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                {t('home.digitalLifeDesc')}
              </p>
              <Link to="/learn" className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline group">
                {t('home.exploreDigital')}
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-6">
                <HomeIcon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t('home.homeLife')}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                {t('home.homeLifeDesc')}
              </p>
              <Link to="/learn" className="text-emerald-600 dark:text-emerald-400 font-medium inline-flex items-center hover:underline group">
                {t('home.exploreHome')}
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Topics Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">{t('home.featuredTopics')}</h2>
              <p className="text-slate-500 dark:text-slate-400">{t('home.featuredSubtitle')}</p>
            </div>
            <Link to="/learn" className="hidden sm:inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium">
              {t('home.viewAll')}
            </Link>
          </div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: t('home.featuredTopic1'), icon: <Zap size={24} />, color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400', link: '/learn/upi-payments' },
              { title: t('home.featuredTopic2'), icon: <ShieldCheck size={24} />, color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400', link: '/safety' },
              { title: t('home.featuredTopic3'), icon: <MessageCircle size={24} />, color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400', link: '/learn/whatsapp-basics' },
            ].map((topic, i) => (
              <Link to={topic.link} key={i}>
                <motion.div variants={itemVariants} className="group bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all cursor-pointer h-full">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${topic.color}`}>
                    {topic.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{topic.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{t('home.topicDescription')}</p>
                  <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                    {t('home.startLesson')} <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/learn" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium">
              {t('home.viewAllTopics')} <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{t('home.philosophy')}</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto gap-4 md:gap-0">
            {(t('home.philosophySteps') as string[]).map((step: string, idx: number, arr: string[]) => (
              <div key={idx} className="contents">
                <div className="flex-1 text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 border-2 border-transparent group-hover:border-blue-500 transition-colors duration-300">
                    <span className="text-2xl font-bold text-slate-400 group-hover:text-blue-500 transition-colors">0{idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{step}</h4>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden md:flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 px-4">
                    <ArrowRight size={32} />
                  </div>
                )}
                {idx < arr.length - 1 && (
                  <div className="md:hidden flex items-center justify-center text-slate-300 dark:text-slate-600 py-2">
                    <ArrowDown size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-(--color-primary) text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t('home.readyToStart')}
          </h2>
          <Link 
            to="/learn"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-(--color-primary) bg-white hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
          >
            {t('home.startLearning')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
