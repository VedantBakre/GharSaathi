import type { ReactNode } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IndianRupee, ShoppingCart, ListTodo } from 'lucide-react';

interface DashboardTabProps {
  totalExpenses: number;
  pendingGroceries: number;
  pendingTasks: number;
  setActiveTab: (tab: string) => void;
}

const DashboardTab = ({ totalExpenses, pendingGroceries, pendingTasks, setActiveTab }: DashboardTabProps) => {
  const { t } = useLanguage();

  const cards: { tab: string; icon: ReactNode; label: string; value: string; color: string }[] = [
    {
      tab: 'expenses',
      icon: <IndianRupee size={24} />,
      label: t('manage.totalSpending'),
      value: `₹${totalExpenses.toLocaleString()}`,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      tab: 'groceries',
      icon: <ShoppingCart size={24} />,
      label: t('manage.pendingGroceries'),
      value: `${pendingGroceries} ${t('manage.items')}`,
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    },
    {
      tab: 'tasks',
      icon: <ListTodo size={24} />,
      label: t('manage.pendingTasks'),
      value: `${pendingTasks} ${t('manage.tasksUnit')}`,
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.tab}
          onClick={() => setActiveTab(card.tab)}
          className="bg-white dark:bg-(--card-bg) p-6 rounded-2xl border border-(--border-color) shadow-sm cursor-pointer hover:-translate-y-1 transition-transform"
        >
          <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4`}>
            {card.icon}
          </div>
          <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{card.label}</h3>
          <p className="text-3xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardTab;
