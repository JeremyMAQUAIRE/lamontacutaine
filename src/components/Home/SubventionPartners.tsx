import { motion } from 'framer-motion';
import jeremyDev63 from '../../assets/logo/jeremyDev63.png';
import commune from '../../assets/logo/communeMontaigut.png';

const partners = [
  {
    id: 'jeremy-1',
    name: 'Jérémy Dev 63',
    logo: jeremyDev63,
  },
  {
    id: 'commune-1',
    name: 'Commune de Montaigut-en-Combraille',
    logo: commune,
  },
  {
    id: 'jeremy-2',
    name: 'Jérémy Dev 63',
    logo: jeremyDev63,
  },
  {
    id: 'commune-2',
    name: 'Commune de Montaigut-en-Combraille',
    logo: commune,
  },
  {
    id: 'jeremy-3',
    name: 'Jérémy Dev 63',
    logo: jeremyDev63,
  },
  {
    id: 'commune-3',
    name: 'Commune de Montaigut-en-Combraille',
    logo: commune,
  },
];

const SubventionPartners = () => {
  return (
    <section className="py-5 lg:py-10 px-4 bg-blue-100 overflow-hidden">
      <h2 className="text-xl lg:text-3xl md:text-3xl text-center font-semibold text-blue-900 mb-8">
        Merci pour leur soutien
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center w-max gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          }}
        >
          {[...partners, ...partners].map((partner, i) => (
            <img
              key={`${partner.id}-copy-${i < partners.length ? 'a' : 'b'}`}
              src={partner.logo}
              alt={`Logo ${partner.name}`}
              className="flex-shrink-0 px-2 h-18 lg:h-28 w-auto object-contain mx-8 lg:mx-14"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubventionPartners;
