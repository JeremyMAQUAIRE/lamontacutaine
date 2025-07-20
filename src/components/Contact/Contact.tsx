import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ContactForm = () => {
  const InstagramIcon = FaInstagram as React.ElementType;
  const FacebookIcon = FaFacebookF as React.ElementType;
  const MailIcon = HiOutlineMail as React.ElementType;
  const PhoneIcon = HiOutlinePhone as React.ElementType;
  const LocationIcon = HiOutlineLocationMarker as React.ElementType;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSuccess(true);

    // Reset après 3 secondes
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-8vh)] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-yellow-50 px-4 py-8 mt-20 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Bloc Infos Contact */}
          <div className="bg-gradient-to-br from-blue-900 to-yellow-100 text-white p-8 flex flex-col justify-between md:w-1/2">
            <div>
              <h2 className="text-3xl font-bold mb-4">📩 Restons en contact</h2>
              <p className="mb-6 text-white/90">
                Vous avez une question ou une demande? Envoyez-nous un message,
                nous vous répondrons rapidement!
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <MailIcon className="text-xl" />
                  contact@exemple.com
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="text-xl" />
                  +33 6 12 34 56 78
                </li>
                <li className="flex items-center gap-3">
                  <LocationIcon className="text-xl" />
                  123 Rue Principale, 75000 Paris
                </li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition"
              >
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div className="p-8 md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Envoyez-nous un message ✨
            </h3>

            {success && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-center font-medium"
              >
                ✅ Merci! Votre message a bien été envoyé.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nom */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Votre nom
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Votre email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="exemple@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Votre message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Écrivez votre message ici..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                  required
                />
              </div>

              {/* Bouton */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
              >
                Envoyer le message 🚀
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
