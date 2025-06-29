import { motion } from 'framer-motion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RapportsSection from './RapportSection';

import president from '../../assets/organigramme/damien.png';

const membresBureau = [
  {
    nom: 'Marie Dupont',
    fonction: 'Présidente',
    photo: president,
  },
  {
    nom: 'Luc Martin',
    fonction: 'Trésorier',
    photo: president,
  },
  {
    nom: 'Sophie Bernard',
    fonction: 'Secrétaire',
    photo: president,
  },
  {
    nom: 'Équipe de bénévoles',
    fonction: 'Une quarantaine de membres engagés !',
    photo: president,
  },
  {
    nom: 'Marie Dupont',
    fonction: 'Présidente',
    photo: president,
  },
  {
    nom: 'Luc Martin',
    fonction: 'Trésorier',
    photo: president,
  },
  {
    nom: 'Sophie Bernard',
    fonction: 'Secrétaire',
    photo: president,
  },
  {
    nom: 'Équipe de bénévoles',
    fonction: 'Une quarantaine de membres engagés !',
    photo: president,
  },
];

const AboutUs = () => {
  return (
    <>
      <Header />
      <section
        className="bg-gradient-to-b from-yellow-50 to-white py-16 px-6 top-20 relative"
        id="association"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Titre */}
          <motion.h1
            className="text-4xl font-extrabold text-blue-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🏡 Qui sommes-nous ?
          </motion.h1>

          {/* Texte intro */}
          <motion.p
            className="text-lg text-gray-700 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Fondée en <strong>juillet 2022</strong>,{' '}
            <span className="text-blue-800 font-semibold">La Montacutaine</span>{' '}
            est une joyeuse association de <strong>40 bénévoles</strong> qui
            œuvrent toute l’année pour faire vivre{' '}
            <em>Montaigut-en-Combraille</em> au rythme des événements festifs
            🌟.
            <br />
            Des réunions mensuelles, une assemblée générale annuelle ouverte à
            tous… et surtout, une{' '}
            <strong>envie commune d’animer notre belle commune</strong> 💙💛.
          </motion.p>

          {/* Membres du bureau */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {membresBureau.map((membre, index) => (
              <motion.div
                key={membre.nom}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <img
                  src={membre.photo}
                  alt={membre.nom}
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-300 mb-3"
                />
                <h3 className="text-lg font-bold text-blue-900">
                  {membre.nom}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {membre.fonction}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Photo de groupe en dessous */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-lg aspect-[16/9]">
              <img
                src={president}
                alt="L'équipe de bénévoles de La Montacutaine"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg text-blue-900 font-semibold text-center">
              Une belle équipe de bénévoles pour faire vivre Montaigut 🎉
            </p>
          </motion.div>
        </div>
      </section>
      <RapportsSection />
      <Footer />
    </>
  );
};

export default AboutUs;
