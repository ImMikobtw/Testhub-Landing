import React from 'react';
import Logo from '../components/Logo';
import { useLanguage } from '../components/language-toggler/context/LanguageContext';

import Phone from './assets/phone.png';
import Mail from './assets/mail.png';
import Tiktok from './assets/tiktok.png'

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { name: t('about'), href: '#about' },
    { name: t('universities'), href: '#universities' },
    { name: t('tests'), href: '#tests' },
    { name: t('media'), href: '#media' },
    { name: t('salaries'), href: '#salaries' },
  ];

  return (
    <footer className="bg-[#1A2B48] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-sm font-montserrat text-gray-300">
              ©2025. «Testhub.kz», официальный сайт.
            </p>
          </div>

          {/* Навигация */}
          <nav className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-8 mt-6 md:mt-0">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white font-montserrat font-medium text-sm transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-montserrat font-medium text-gray-300">
                Контакты
              </p>
              <a
                href="tel:+77001234567"
                className="flex flex-row items-center gap-2 cursor-default text-sm font-montserrat text-gray-300 hover:text-white transition-colors duration-200"
              >
                <img src={ Phone } />
                +7 (706) 668-69-81
              </a>
              <a
                href="mailto:info@testhub.kz"
                className="flex flex-row items-center gap-2 cursor-default text-sm font-montserrat text-gray-300 hover:text-white transition-colors duration-200"
              >
                <img src={ Mail } />
                Testhubkz@gmail.com
              </a>
              <a
                href="https://www.tiktok.com/@testhub.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 cursor-default text-sm font-montserrat text-gray-300 hover:text-white transition-colors duration-200"
              >
                <img src={ Tiktok } />
                @testhub.kz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;