import { useLanguage } from '../../contexts/LanguageContext';
import { Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Grocery = { id: string; name: string; completed: boolean };

interface GroceriesTabProps {
  groceries: Grocery[];
  handleAddGrocery: (e: React.FormEvent<HTMLFormElement>) => void;
  toggleGrocery: (id: string) => void;
  deleteGrocery: (id: string) => void;
}

const GroceriesTab = ({ groceries, handleAddGrocery, toggleGrocery, deleteGrocery }: GroceriesTabProps) => {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleAddGrocery} className="flex gap-2 mb-8">
        <input name="name" type="text" required placeholder={t('manage.placeholderGrocery')} className="flex-1 p-3 border border-(--border-color) rounded-xl bg-white dark:bg-(--card-bg) focus:ring-2 focus:ring-(--color-primary) outline-none" />
        <button type="submit" className="px-6 py-3 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-blue-600 transition-colors flex items-center">
          <Plus size={20} className="sm:mr-1" /> <span className="hidden sm:inline">{t('manage.addItem')}</span>
        </button>
      </form>

      <div className="space-y-3">
        {groceries.length === 0 ? (
          <p className="text-center text-slate-500 py-8">{t('manage.noGroceries')}</p>
        ) : (
          <AnimatePresence>
            {groceries.map(g => (
              <motion.div key={g.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className={`flex justify-between items-center p-4 rounded-xl border ${g.completed ? 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 opacity-60' : 'bg-white border-(--border-color) dark:bg-(--card-bg) shadow-sm'}`}>
                <div className="flex items-center gap-3 cursor-pointer flex-1" onClick={() => toggleGrocery(g.id)}>
                  {g.completed ? <CheckCircle2 className="text-green-500" size={24} /> : <Circle className="text-slate-400" size={24} />}
                  <span className={`text-lg ${g.completed ? 'line-through' : 'font-medium'}`}>{g.name}</span>
                </div>
                <button onClick={() => deleteGrocery(g.id)} className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors ml-2">
                  <Trash2 size={18} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default GroceriesTab;
