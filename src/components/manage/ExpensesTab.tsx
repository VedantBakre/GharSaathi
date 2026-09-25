import { useLanguage } from '../../contexts/LanguageContext';
import { Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Expense = { id: string; amount: number; category: string; date: string; note: string };

interface ExpensesTabProps {
  expenses: Expense[];
  handleAddExpense: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteExpense: (id: string) => void;
}

const ExpensesTab = ({ expenses, handleAddExpense, deleteExpense }: ExpensesTabProps) => {
  const { t } = useLanguage();

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <form onSubmit={handleAddExpense} className="bg-white dark:bg-(--card-bg) p-6 rounded-2xl border border-(--border-color) shadow-sm sticky top-24">
          <h3 className="text-xl font-bold mb-4">{t('manage.addExpense')}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">{t('manage.amount')} (₹)</label>
              <input name="amount" type="number" required min="1" className="w-full p-3 border border-(--border-color) rounded-lg bg-transparent focus:ring-2 focus:ring-(--color-primary) outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('manage.category')}</label>
              <select name="category" className="w-full p-3 border border-(--border-color) rounded-lg bg-transparent focus:ring-2 focus:ring-(--color-primary) outline-none dark:bg-(--card-bg)">
                <option value="Food">{t('manage.foodGroceries')}</option>
                <option value="Electricity">{t('manage.electricityCat')}</option>
                <option value="Water">{t('manage.waterCat')}</option>
                <option value="Transport">{t('manage.transportCat')}</option>
                <option value="Bills">{t('manage.otherBills')}</option>
                <option value="Other">{t('manage.otherCat')}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('manage.note')} ({t('manage.optional')})</label>
              <input name="note" type="text" className="w-full p-3 border border-(--border-color) rounded-lg bg-transparent focus:ring-2 focus:ring-(--color-primary) outline-none" />
            </div>
            <button type="submit" className="w-full py-3 bg-(--color-primary) text-white font-bold rounded-lg hover:bg-blue-600 transition-colors flex justify-center items-center">
              <Plus size={20} className="mr-1" /> {t('manage.add')}
            </button>
          </div>
        </form>
      </div>
      <div className="md:col-span-2 space-y-4">
        {expenses.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-(--card-bg) rounded-2xl border border-(--border-color)">
            <p className="text-slate-500">{t('manage.noExpenses')}</p>
          </div>
        ) : (
          <AnimatePresence>
            {expenses.map(exp => (
              <motion.div key={exp.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -10 }} className="flex justify-between items-center p-4 bg-white dark:bg-(--card-bg) rounded-xl border border-(--border-color) shadow-sm">
                <div>
                  <h4 className="font-bold text-lg">{exp.category}</h4>
                  <p className="text-sm text-slate-500">{exp.date} {exp.note && `• ${exp.note}`}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-lg">₹{exp.amount}</span>
                  <button onClick={() => deleteExpense(exp.id)} className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default ExpensesTab;
