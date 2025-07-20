import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Images
import photoPrincipale from '../../assets/test.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const photosSecondaires = [
  { src: photoPrincipale, alt: 'secondaire 1' },
  { src: photoPrincipale, alt: 'secondaire 2' },
  { src: photoPrincipale, alt: 'secondaire 3' },
];

export default function ManifestationPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const titre = 'Marché de Noël 2025';
  const date = 'Dimanche 10 décembre 2025';
  const heureDebut = '10h00';
  const heureFin = '20h00';
  const lieu = 'Place du village - Montaigut';
  const description = `
    Venez découvrir notre grand Marché de Noël féerique ! 🎄 
    Des artisans locaux, des animations pour les enfants, 
    un stand gourmand et même la venue du Père Noël. 
    Une journée magique pour petits et grands !
  `;

  return (
    <>
      <Header />
      <section className="bg-yellow-50 py-8 px-4 mt-20 md:mt-0 md:min-h-screen md:flex md:items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 md:gap-8 md:items-center">
          {/* Image principale */}
          <motion.div
            className="rounded-xl shadow-lg mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={photoPrincipale}
              alt="principale de l'événement"
              className="w-full h-[250px] sm:h-[320px] md:h-[500px] object-cover ring-2 ring-yellow-300 rounded-lg shadow-md"
            />
          </motion.div>

          {/* Contenu */}
          <motion.div
            className="flex flex-col md:justify-center ring-2 ring-yellow-300 rounded-lg p-6 bg-white shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Titre centré sur mobile */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-900 mb-4 text-center md:text-left">
              {titre}
            </h1>

            {/* Date, horaires et lieu */}
            <div className="mb-6 text-gray-700 text-center md:text-left">
              <p className="text-lg font-semibold mb-2">📅 {date}</p>
              <p className="text-sm text-gray-600 mb-2">
                🕒 De <span className="font-medium">{heureDebut}</span> à{' '}
                <span className="font-medium">{heureFin}</span>
              </p>
              <p className="text-sm text-gray-600">📍 {lieu}</p>
            </div>

            {/* SLIDER pour images secondaires */}
            <div className="mb-6">
              <Swiper
                spaceBetween={15}
                slidesPerView={1.3} // mobile : ~1,3 images visibles
                breakpoints={{
                  640: { slidesPerView: 2 }, // tablettes : 2 images visibles
                  1024: { slidesPerView: 3 }, // desktop : 3 images visibles
                }}
              >
                {photosSecondaires.map((photo) => (
                  <SwiperSlide key={photo.alt} className="flex justify-center">
                    <div className="w-full aspect-video bg-white rounded-lg shadow flex items-center justify-center">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="max-h-40 w-auto object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Description alignée pour lisibilité */}
            <p className="text-gray-700 text-base leading-relaxed mb-6 text-justify">
              {description}
            </p>

            {/* Bouton centré sur mobile */}
            <div className="flex justify-center">
              <Link
                to="/inscription"
                className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition text-center w-full sm:w-auto"
              >
                📝 S’inscrire et payer en ligne
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
