import React from 'react';
import Logo from '../components/Logo';
import LanguageToggler from '../components/language-toggler/ui/LanguageToggler';
import { useLanguage } from '../components/language-toggler/context/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { name: t('about'), href: '#about' },
    { name: t('universities'), href: '#universities' },
    { name: t('tests'), href: '#tests' },
    { name: t('media'), href: '#media' },
    { name: t('salaries'), href: '#salaries' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-50 h-16 width-100">

          <Logo />

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#2374EE] font-montserrat font-medium text-sm transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-10">
            <LanguageToggler />
            <button className="bg-[#2374EE] text-white font-montserrat font-medium text-sm px-6 py-2 rounded-3xl hover:bg-[#1b5cbf] transition-colors duration-200">
              {t('login')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;