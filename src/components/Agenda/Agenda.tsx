import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import festifImage from '../../assets/test_image.jpg';

const animationsFestives = [
  {
    titre: "Bal costumé de l'été",
    date: '12 août 2025 - 20h',
    lieu: 'Salle des fêtes',
    description:
      'Venez déguisés pour une soirée pleine de surprises et de musique !',
    image: festifImage,
  },
  {
    titre: "Feu d'artifice & concert",
    date: '15 août 2025 - 22h',
    lieu: 'Parc municipal',
    description: "Un magnifique feu d'artifice suivi d’un concert live.",
    image: festifImage,
  },
  {
    titre: 'Tournoi de pétanque',
    date: '18 août 2025 - 10h',
    lieu: 'Place du village',
    description:
      "En solo ou en équipe, tentez de gagner le trophée de l'année !",
    image: festifImage,
  },
  {
    titre: "Bal costumé de l'été",
    date: '12 août 2025 - 20h',
    lieu: 'Salle des fêtes',
    description:
      'Venez déguisés pour une soirée pleine de surprises et de musique !',
    image: festifImage,
  },
  {
    titre: "Feu d'artifice & concert",
    date: '15 août 2025 - 22h',
    lieu: 'Parc municipal',
    description: "Un magnifique feu d'artifice suivi d’un concert live.",
    image: festifImage,
  },
  {
    titre: 'Tournoi de pétanque',
    date: '18 août 2025 - 10h',
    lieu: 'Place du village',
    description:
      "En solo ou en équipe, tentez de gagner le trophée de l'année !",
    image: festifImage,
  },
];

export default function AnimationsFestives() {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Header />
      <section className="bg-yellow-50 py-8 lg:py-16 px-3">
        {/* Section intro */}
        <div className="max-w-6xl mx-auto py-12 text-center">
          <motion.h1
            className="text-xl lg:text-5xl font-extrabold text-blue-900 mb-2 mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hidden lg:inline">🎉</span> Les animations festives
            de La Montacutaine
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Des événements pour petits et grands, organisés avec passion par nos
            bénévoles 💙💛. Marchés de producteurs, marché de Noël, soirées
            d’Halloween, repas à thème, fêtes inter-villages, concerts, bals,
            feux d’artifice et tournois sportifs… tout pour faire vibrer notre
            belle commune!
          </motion.p>
        </div>

        {/* Liste des animations */}
        <div
          ref={listRef}
          className="bg-blue-100 py-4 rounded-lg ring-2 ring-blue-900"
        >
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {animationsFestives.map((anim, index) => (
              <motion.div
                key={anim.titre}
                className="bg-yellow-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={anim.image}
                  alt={anim.titre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center bg-white rounded-b-xl">
                  {/* Titre de l'événement */}
                  <h3 className="text-2xl font-extrabold text-blue-900 mb-2">
                    {anim.titre}
                  </h3>

                  {/* Date + Lieu en mode badge */}
                  <div className="flex justify-center flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                      📅 {anim.date}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                      📍 {anim.lieu}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {anim.description}
                  </p>

                  {/* Bouton d'action sympa */}
                  <div className="mt-6">
                    <Link
                      to="/manifestations"
                      className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-semibold py-2 px-5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform"
                    >
                      🎟 En savoir plus & s’inscrire
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
