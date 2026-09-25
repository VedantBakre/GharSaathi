import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Home, BookOpen, Shield, Settings, Link as LinkIcon, Menu, X, Sun, Moon, AlertTriangle, AArrowUp, AArrowDown, Type } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { clearAllStorage, getStorage, setStorage } from '../utils/storage';

const FONT_SIZES = [
  { label: 'A-', value: 14 },
  { label: 'A', value: 16 },
  { label: 'A+', value: 18 },
  { label: 'A++', value: 20 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const settingsRef = useRef<HTMLDivElement>(null);

  const [fontSizeIdx, setFontSizeIdx] = useState<number>(() => {
    return getStorage<number>('gharsaathi-fontsize-idx', 1);
  });

  // Apply font size to root element
  useEffect(() => {
    document.documentElement.style.fontSize = `${FONT_SIZES[fontSizeIdx].value}px`;
    setStorage('gharsaathi-fontsize-idx', fontSizeIdx);
  }, [fontSizeIdx]);

  // Close settings dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setShowSettings(false);
      }
    };
    if (showSettings) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSettings]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleResetData = () => {
    if (window.confirm(t('settings.resetData') + '?')) {
      clearAllStorage();
      window.location.reload();
    }
  };

  const increaseFontSize = () => {
    setFontSizeIdx(prev => Math.min(prev + 1, FONT_SIZES.length - 1));
  };

  const decreaseFontSize = () => {
    setFontSizeIdx(prev => Math.max(prev - 1, 0));
  };

  const navLinks = [
    { to: '/', label: t('nav.home'), icon: <Home size={18} /> },
    { to: '/learn', label: t('nav.learn'), icon: <BookOpen size={18} /> },
    { to: '/safety', label: t('nav.safety'), icon: <Shield size={18} /> },
    { to: '/manage', label: t('nav.manage'), icon: <Settings size={18} /> },
    { to: '/resources', label: t('nav.resources'), icon: <LinkIcon size={18} /> },
  ];

  return (
    <nav className="bg-(--card-bg) border-b border-(--border-color) fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-(--color-primary)">
              <span className="text-2xl">🏠</span>
              <span>GharSaathi</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}

            <div className="h-6 w-px bg-(--border-color) mx-2"></div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent border border-(--border-color) rounded-md px-2 py-1 text-sm focus:outline-none focus:border-(--color-primary) dark:bg-(--card-bg)"
            >
              <option value="en">EN</option>
              <option value="hi">हिंदी</option>
              <option value="mr">मराठी</option>
            </select>

            <div className="relative" ref={settingsRef}>
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Settings"
              >
                <Settings size={20} />
              </button>
              {showSettings && (
                <div className="absolute right-0 mt-2 w-56 bg-(--card-bg) border border-(--border-color) rounded-xl shadow-xl py-2 z-50">
                  {/* Font Size Control */}
                  <div className="px-4 py-3 border-b border-(--border-color)">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-3">
                      <Type size={14} />
                      {t('settings.fontSize')}
                    </label>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={decreaseFontSize}
                        disabled={fontSizeIdx === 0}
                        className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Decrease font size"
                      >
                        <AArrowDown size={20} />
                      </button>
                      <div className="flex gap-1">
                        {FONT_SIZES.map((fs, idx) => (
                          <button
                            key={fs.value}
                            onClick={() => setFontSizeIdx(idx)}
                            className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
                              idx === fontSizeIdx
                                ? 'bg-(--color-primary) text-white'
                                : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600'
                            }`}
                          >
                            {fs.label}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={increaseFontSize}
                        disabled={fontSizeIdx === FONT_SIZES.length - 1}
                        className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Increase font size"
                      >
                        <AArrowUp size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Reset Data */}
                  <button
                    onClick={handleResetData}
                    className="flex items-center w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 mt-1"
                  >
                    <AlertTriangle size={16} className="mr-2" />
                    {t('settings.resetData')}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-(--border-color) bg-(--card-bg)">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center justify-between px-3 py-4 border-t border-(--border-color) mt-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-100 dark:bg-slate-800"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-transparent border border-(--border-color) rounded-md px-2 py-1 text-sm focus:outline-none dark:bg-(--card-bg)"
                >
                  <option value="en">EN</option>
                  <option value="hi">हिंदी</option>
                  <option value="mr">मराठी</option>
                </select>
                {/* Mobile font size buttons */}
                <div className="flex items-center gap-1 border border-(--border-color) rounded-lg overflow-hidden">
                  <button onClick={decreaseFontSize} disabled={fontSizeIdx === 0} className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-30">
                    <AArrowDown size={16} />
                  </button>
                  <span className="text-xs font-bold px-1">{FONT_SIZES[fontSizeIdx].label}</span>
                  <button onClick={increaseFontSize} disabled={fontSizeIdx === FONT_SIZES.length - 1} className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-30">
                    <AArrowUp size={16} />
                  </button>
                </div>
              </div>
              <button
                onClick={handleResetData}
                className="text-red-500 text-sm flex items-center"
              >
                <AlertTriangle size={16} className="mr-1" />
                {t('settings.resetData')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
