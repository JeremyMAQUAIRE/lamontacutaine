import { SVGProps, useState } from 'react';
import { JSX } from 'react/jsx-runtime';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../store/store';
import NotificationSucces from '../Notification/NotificationSucces';
import NotificationFailed from '../Notification/NotificationFailed';
import CreateSubscriptions from '../../api/directus/newsletter_subscriptions/CreateSubscriptions';

const navigation = {
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  const dispatch: AppDispatch = useDispatch();
  const [showNotificationSucces, setShowNotificationSucces] = useState(false);
  const [showNotificationFailed, setShowNotificationFailed] = useState(false);

  const handleSubscription = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.elements.namedItem('email-address') as HTMLInputElement;

    const resultAction = await dispatch(CreateSubscriptions(email.value));

    if (resultAction.payload) {
      setShowNotificationSucces(true);
      setShowNotificationFailed(false);
    } else {
      setShowNotificationFailed(true);
      setShowNotificationSucces(false);
    }
  };

  return (
    <>
      <footer className="bg-blue-900">
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="border-t border-gray-900/10 pt-8 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm/6 font-semibold text-white">
                Abonnez-vous à notre newsletter
              </h3>
              <p className="mt-2 text-xs/6 text-white">
                Des actus pétillantes, des infos exclusives et des bons plans
                dans votre boîte mail ✨
              </p>
            </div>

            <form
              className="mt-6 sm:flex sm:max-w-md lg:mt-0"
              onSubmit={handleSubscription}
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                required
                placeholder="Entrer votre email"
                autoComplete="email"
                className="w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus-visible:outline-indigo-600 sm:w-56 sm:text-sm/6"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                >
                  S&apos;abonner
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex gap-x-6 md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6 text-white" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm/6 text-white md:order-1 md:mt-0">
              © {new Date().getFullYear()} La Montacutaine. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
      <NotificationSucces
        show={showNotificationSucces}
        setShow={setShowNotificationSucces}
        title="Inscription réussie !"
        message="Bienvenue dans l’aventure ! Tu recevras bientôt nos actus, événements et surprises directement dans ta boîte mail. Prépare-toi à vivre des moments inoubliables avec nous !"
      />
      <NotificationFailed
        show={showNotificationFailed}
        setShow={setShowNotificationFailed}
        title="Oups, quelque chose s’est mal passé !"
        message="L’inscription n’a pas pu aboutir. Pas de panique ! Tu peux réessayer dans quelques instants ou nous contacter si le problème persiste. On est là pour t’aider !"
      />
    </>
  );
};

export default Footer;
