import { DocumentTextIcon } from '@heroicons/react/24/outline';

const rapports = [
  {
    title: 'Rapport moral 2023',
    url: '/docs/rapport-moral-2023.pdf',
  },
  {
    title: 'Rapport d’activité 2023',
    url: '/docs/rapport-activite-2023.pdf',
  },
  {
    title: 'Rapport financier 2023',
    url: '/docs/rapport-financier-2023.pdf',
  },
];

const RapportsSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8" id="rapports">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-6">
          📄 Rapports
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Transparence, engagement et bonne humeur&nbsp;! Retrouvez ici tous nos
          rapports officiels pour découvrir notre fonctionnement.
        </p>

        <div className="grid gap-6">
          {rapports.map((rapport) => (
            <a
              key={rapport.title}
              href={rapport.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border rounded-lg p-4 shadow-sm hover:shadow-md transition hover:bg-yellow-100"
            >
              <div className="flex items-center gap-3">
                <DocumentTextIcon className="w-6 h-6 text-blue-700" />
                <span className="text-blue-900 font-medium">
                  {rapport.title}
                </span>
              </div>
              <span className="text-sm text-blue-600">Télécharger</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RapportsSection;
