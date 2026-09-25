import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getStorage, setStorage } from '../utils/storage';
import { LayoutDashboard, IndianRupee, ShoppingCart, CheckSquare } from 'lucide-react';
import DashboardTab from '../components/manage/DashboardTab';
import ExpensesTab from '../components/manage/ExpensesTab';
import GroceriesTab from '../components/manage/GroceriesTab';
import TasksTab from '../components/manage/TasksTab';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

// Types
type Expense = { id: string; amount: number; category: string; date: string; note: string };
type Grocery = { id: string; name: string; completed: boolean };
type Task = { id: string; title: string; priority: 'High' | 'Normal' | 'Low'; completed: boolean };

const Manage = () => {
  const { t } = useLanguage();
  useDocumentTitle('nav.manage');
  const [activeTab, setActiveTab] = useState('dashboard');

  // State
  const [expenses, setExpenses] = useState<Expense[]>(() => getStorage('gharsaathi-expenses', []));
  const [groceries, setGroceries] = useState<Grocery[]>(() => getStorage('gharsaathi-groceries', []));
  const [tasks, setTasks] = useState<Task[]>(() => getStorage('gharsaathi-tasks', []));

  // Sync with localStorage
  useEffect(() => { setStorage('gharsaathi-expenses', expenses); }, [expenses]);
  useEffect(() => { setStorage('gharsaathi-groceries', groceries); }, [groceries]);
  useEffect(() => { setStorage('gharsaathi-tasks', tasks); }, [tasks]);

  // Derived state
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const pendingGroceries = groceries.filter(g => !g.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;

  // Handlers for Expenses
  const handleAddExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const amount = Number((form.elements.namedItem('amount') as HTMLInputElement).value);
    const category = (form.elements.namedItem('category') as HTMLSelectElement).value;
    const note = (form.elements.namedItem('note') as HTMLInputElement).value;
    
    if (amount > 0) {
      setExpenses([{ id: Date.now().toString(), amount, category, date: new Date().toISOString().split('T')[0], note }, ...expenses]);
      form.reset();
    }
  };

  const deleteExpense = (id: string) => setExpenses(expenses.filter(e => e.id !== id));

  // Handlers for Groceries
  const handleAddGrocery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    if (name.trim()) {
      setGroceries([{ id: Date.now().toString(), name: name.trim(), completed: false }, ...groceries]);
      form.reset();
    }
  };

  const toggleGrocery = (id: string) => {
    setGroceries(groceries.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
  };

  const deleteGrocery = (id: string) => setGroceries(groceries.filter(g => g.id !== id));

  // Handlers for Tasks
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const priority = (form.elements.namedItem('priority') as HTMLSelectElement).value as Task['priority'];
    if (title.trim()) {
      setTasks([{ id: Date.now().toString(), title: title.trim(), priority, completed: false }, ...tasks]);
      form.reset();
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: string) => setTasks(tasks.filter(task => task.id !== id));

  const tabs = [
    { id: 'dashboard', label: t('manage.dashboard'), icon: <LayoutDashboard size={18} /> },
    { id: 'expenses', label: t('manage.expenses'), icon: <IndianRupee size={18} /> },
    { id: 'groceries', label: t('manage.groceries'), icon: <ShoppingCart size={18} /> },
    { id: 'tasks', label: t('manage.tasks'), icon: <CheckSquare size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">{t('nav.manage')}</h1>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto space-x-2 mb-8 pb-2 scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold whitespace-nowrap transition-colors ${
                activeTab === tab.id 
                  ? 'bg-(--color-primary) text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-(--border-color) hover:bg-slate-50 dark:bg-(--card-bg) dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'dashboard' && (
            <DashboardTab
              totalExpenses={totalExpenses}
              pendingGroceries={pendingGroceries}
              pendingTasks={pendingTasks}
              setActiveTab={setActiveTab}
            />
          )}
          {activeTab === 'expenses' && (
            <ExpensesTab
              expenses={expenses}
              handleAddExpense={handleAddExpense}
              deleteExpense={deleteExpense}
            />
          )}
          {activeTab === 'groceries' && (
            <GroceriesTab
              groceries={groceries}
              handleAddGrocery={handleAddGrocery}
              toggleGrocery={toggleGrocery}
              deleteGrocery={deleteGrocery}
            />
          )}
          {activeTab === 'tasks' && (
            <TasksTab
              tasks={tasks}
              handleAddTask={handleAddTask}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          )}
        </div>

      </div>
    </div>
  );
};

export default Manage;
