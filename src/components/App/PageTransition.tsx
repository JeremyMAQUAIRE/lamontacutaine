import { motion } from 'framer-motion';

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }} // la nouvelle page démarre légèrement zoomée
      animate={{ scale: 1, opacity: 1 }} // elle revient à la taille normale
      exit={{ scale: 0.9, opacity: 0 }} // l'ancienne page se dézoome avant de partir
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
