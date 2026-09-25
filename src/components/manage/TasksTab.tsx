import { useLanguage } from '../../contexts/LanguageContext';
import { Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Task = { id: string; title: string; priority: 'High' | 'Normal' | 'Low'; completed: boolean };

interface TasksTabProps {
  tasks: Task[];
  handleAddTask: (e: React.FormEvent<HTMLFormElement>) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TasksTab = ({ tasks, handleAddTask, toggleTask, deleteTask }: TasksTabProps) => {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-3 mb-8 bg-white dark:bg-(--card-bg) p-4 rounded-2xl border border-(--border-color) shadow-sm">
        <input name="title" type="text" required placeholder={t('manage.placeholderTask')} className="flex-1 p-3 border border-(--border-color) rounded-xl bg-transparent focus:ring-2 focus:ring-(--color-primary) outline-none" />
        <select name="priority" className="p-3 border border-(--border-color) rounded-xl bg-transparent focus:ring-2 focus:ring-(--color-primary) outline-none dark:bg-(--card-bg)">
          <option value="High">{t('manage.highPriority')}</option>
          <option value="Normal">{t('manage.normalPriority')}</option>
          <option value="Low">{t('manage.lowPriority')}</option>
        </select>
        <button type="submit" className="px-6 py-3 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center">
          <Plus size={20} className="mr-1" /> {t('manage.addTask')}
        </button>
      </form>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-center text-slate-500 py-8">{t('manage.noTasks')}</p>
        ) : (
          <AnimatePresence>
            {tasks.map(task => (
              <motion.div key={task.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className={`flex justify-between items-center p-4 rounded-xl border ${task.completed ? 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 opacity-60' : 'bg-white border-(--border-color) dark:bg-(--card-bg) shadow-sm'}`}>
                <div className="flex items-center gap-3 cursor-pointer flex-1" onClick={() => toggleTask(task.id)}>
                  {task.completed ? <CheckCircle2 className="text-green-500" size={24} /> : <Circle className="text-slate-400" size={24} />}
                  <div>
                    <span className={`text-lg block ${task.completed ? 'line-through' : 'font-medium'}`}>{task.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${task.priority === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30' : task.priority === 'Low' ? 'bg-slate-100 text-slate-700 dark:bg-slate-700' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30'}`}>
                      {task.priority === 'High' ? t('manage.highPriority') : task.priority === 'Low' ? t('manage.lowPriority') : t('manage.normalPriority')}
                    </span>
                  </div>
                </div>
                <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors ml-2">
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

export default TasksTab;
