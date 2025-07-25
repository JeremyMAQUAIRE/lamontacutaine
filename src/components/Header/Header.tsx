import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

import logoReduit from '../../assets/logo.png';

const submenu = [
  { name: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
  { name: 'Nous avons besoin de vous', href: '/nous-avons-besoin-de-vous' },
  { name: 'Notre Agenda', href: '/agenda' },
  { name: 'Notre Boutique', href: '/boutique' }, // sera remplacé par un <a>
  { name: 'Contactez nous', href: '/contact' },
];

// URL externe pour la boutique
const boutiqueUrl =
  'https://www.helloasso.com/associations/la-montacutaine/boutiques/boutique-de-la-montacutaine?_gl=1%2a122nxfp%2a_gcl_au%2aOTc2MTM5NDAyLjE3NTMwMTgwNzIuMTIwMzQ3ODQ5LjE3NTMwMzEyNjIuMTc1MzAzMTI2Mg..';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowLogo(true), 100);
  }, []);

  // Fonction utilitaire pour gérer les liens (interne vs externe)
  const renderMenuLink = (item: { name: string; href: string }) => {
    const isBoutique = item.name === 'Notre Boutique';

    if (isBoutique) {
      return (
        <a
          key={item.name}
          href={boutiqueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-lg font-semibold px-3 py-2 rounded-lg text-blue-900 hover:bg-yellow-100 hover:text-blue-900 transition"
        >
          {item.name}
        </a>
      );
    }

    return (
      <Link
        key={item.name}
        to={item.href}
        className={`block text-lg font-semibold px-3 py-2 rounded-lg transition ${
          location.pathname === item.href
            ? 'bg-yellow-100 text-yellow-900'
            : 'text-blue-900 hover:bg-yellow-100 hover:text-blue-900'
        }`}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="bg-gradient-to-r from-blue-300 to-blue-900 shadow-md z-50 fixed w-full top-0 left-0 transition-all duration-500">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center h-20 ">
          <a
            href="/"
            className={`transition-all duration-1000 transform ${
              showLogo
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <img src={logoReduit} alt="Logo" className="w-40" />
          </a>
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center gap-x-10">
          {/* Popover pour sous-menu */}
          <Popover className="relative">
            <PopoverButton className="flex items-center text-white text-lg font-medium group px-6 py-2">
              Notre association
              <ChevronDownIcon className="ml-1 h-5 w-5" />
            </PopoverButton>
            <PopoverPanel className="absolute left-0 mt-3 w-90 bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-4 z-50">
              {submenu.map(renderMenuLink)}
            </PopoverPanel>
          </Popover>

          {/* Bouton connexion */}
          <a
            href="/"
            className="ml-4 rounded-xl bg-yellow-500 px-5 py-2 text-blue-900 font-bold hover:bg-yellow-400 transition-all shadow-md"
          >
            Se connecter &rarr;
          </a>
        </div>

        {/* Menu mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            type="button"
            className="p-2.5 text-white hover:bg-blue-800 rounded-md transition"
          >
            <Bars3Icon className="h-10 w-10 text-yellow-600" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex flex-col items-end">
          <div className="w-4/5 max-w-sm h-full bg-white p-6 rounded-l-xl shadow-2xl">
            <div className="flex items-center justify-between">
              <img
                src={logoReduit}
                alt="Logo"
                className="h-10 w-auto rounded-full"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                type="button"
                className="text-gray-600 hover:text-red-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {submenu.map(renderMenuLink)}
              <a
                href="/"
                className="mt-6 block w-full text-center rounded-xl bg-yellow-500 px-4 py-2 font-bold text-blue-900 hover:bg-yellow-400"
              >
                Se connecter
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
