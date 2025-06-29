import { motion } from 'framer-motion';
import montacutaineImage from '../../assets/logo_reduit_blanc.jpg'; // adapte le chemin si besoin

const Presentation = () => {
  return (
    <div className="relative w-full px-4 py-12 overflow-hidden mt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mx-auto max-w-7xl p-6 rounded-xl border-2 border-blue-900 bg-white/90 shadow-lg backdrop-blur-sm mt-6"
      >
        <div className="relative">
          <img
            src={montacutaineImage}
            alt="Association La Montacutaine"
            className="lg:w-48 lg:h-48 object-cover rounded-md shadow-md border border-blue-300 float-left mr-6 mb-4"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-blue-900 text-base md:text-lg leading-relaxed"
          >
            <p className="mb-4">
              L’association <strong>La Montacutaine</strong>, créée en juillet
              2022 à <strong>Montaigut-en-Combraille</strong>, est devenue en
              peu de temps un véritable moteur de convivialité au cœur des
              Combrailles. Forte d&apos;une quarantaine de bénévoles motivés,
              elle œuvre avec énergie pour animer la vie du village.
            </p>

            <p className="mb-4">
              Son ambition est simple mais essentielle : tisser des liens entre
              les habitants à travers des moments festifs et culturels. Parmi
              ses nombreuses actions, on retrouve des fêtes traditionnelles, des
              concerts en plein air, des marchés artisanaux, des soirées à
              thème, des jeux d&apos;évasion et des cavalcades costumées.
            </p>

            <p className="mb-4">
              Ces événements, toujours organisés dans la bonne humeur,
              rassemblent les habitants de toutes les générations et contribuent
              à renforcer l’identité locale. En parallèle, l’association tient
              une petite boutique solidaire et organise des ventes ponctuelles
              afin de financer ses projets sans dépendre uniquement des
              subventions.
            </p>

            <p className="mb-4">
              Les réunions mensuelles permettent aux membres de faire le point,
              d’échanger des idées et de préparer les futures animations. Elles
              sont ouvertes, collaboratives, et laissent la place à la
              créativité de chacun.
            </p>

            <p className="mb-4">
              Grâce à son action constante, <strong>La Montacutaine</strong> a
              redonné une âme festive et chaleureuse à Montaigut-en-Combraille.
              Son impact se ressent dans le quotidien du village: les gens se
              croisent plus souvent, échangent davantage et participent à la vie
              collective.
            </p>

            <p className="mb-4">
              En misant sur l’inclusion, la participation et la joie de vivre,
              La Montacutaine est bien plus qu’une structure événementielle :
              c’est un trait d’union humain, festif et local qui mérite d’être
              salué.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Presentation;
