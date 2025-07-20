import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const CallToActionMontacutaine = () => {
  return (
    <>
      <Header />
      <section className="bg-yellow-50 py-16 px-6 sm:px-12 md:px-24 text-gray-800 text-center space-y-12 relative top-20 mb-20">
        <h2 className="text-4xl font-extrabold text-primary-700 animate-pulse">
          🎉 Rejoignez l’aventure à La Montacutaine !
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4 hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-blue-700">
              💛 Devenez membre
            </h3>
            <p>
              Rejoindre <strong>La Montacutaine</strong>, c’est participer
              concrètement à la vie du village et à l’organisation d’événements
              inoubliables !
            </p>
            <button
              className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800"
              type="button"
            >
              Je deviens membre
            </button>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4 hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-green-700">
              💶 Faites un don
            </h3>
            <p>
              Chaque euro compte 💫 <br />
              Votre soutien nous aide à proposer toujours mieux !
            </p>
            <a
              href="https://www.helloasso.com/associations/la-montacutaine/formulaires/1?_gl=1%2a9uw9e%2a_gcl_au%2aOTc2MTM5NDAyLjE3NTMwMTgwNzI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
            >
              Je fais un don
            </a>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4 hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-purple-700">
              💡 Boîte à idées
            </h3>
            <p>
              Une idée d’animation ou d’initiative ? Dépose-la ici et on fera
              tout pour la concrétiser ensemble ✨
            </p>
            <button
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
              type="button"
            >
              Je propose une idée
            </button>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4 hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-red-700">
              🤝 Nous sponsoriser
            </h3>
            <p>
              Faites un geste en échange de visibilité pour votre entreprise. Un
              beau partenariat local et festif ! 🥳
            </p>
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
              type="button"
            >
              Je deviens sponsor
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CallToActionMontacutaine;
