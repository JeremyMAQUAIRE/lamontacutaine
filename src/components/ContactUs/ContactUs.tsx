import iconJoinUs from '../../assets/image/contactUs/rejoignez-nous.png';
import iconBoxIdea from '../../assets/image/contactUs/boiteaIdee.png';
import iconDonation from '../../assets/image/contactUs/don.png';
import iconSponsor from '../../assets/image/contactUs/sponsor.png';
import CardContactUs from './CardConctactUs/CardContactUs';

import './ContactUs.scss';

const ContactUs = () => {
  return (
    <div>
      <div className="contactUs-content">
        <CardContactUs
          title="REJOIGNEZ-NOUS !"
          description="Devenir membre de La Montacutaine, c'est la manière la plus concrète de contribuer."
          image={iconJoinUs}
          link="/rejoignez-nous"
        />

        <CardContactUs
          title="BOÎTE À IDÉES..."
          description=" Tu as une idée ? Dépose la ici! On fera au mieux pour la concrétiser."
          image={iconBoxIdea}
          link="/boite-a-idee"
        />

        <CardContactUs
          title="FAITES UN DON !"
          description="Chaque euro compte pour nous aider à proposer toujours mieux."
          image={iconDonation}
          link="https://www.helloasso.com/associations/la-montacutaine/formulaires/1?_gl=1%2a1p5igsc%2a_ga%2aMTIzMDcwNTcwNC4xNjk5NTI2NTE4%2a_ga_TKC826G3G2%2aMTY5OTYwNTQ4NC40LjEuMTY5OTYwODkxMS42MC4wLjA.&_ga=2.186278633.1307840424.1699526518-1230705704.1699526518&_gac=1.117265140.1699538884.Cj0KCQiAo7KqBhDhARIsAKhZ4uhk_QEwCfb7ifNkGobfjO2wra7ZnwDwz-aGF_hHYfS-gRA5c3hr7SMaAvahEALw_wcB"
        />

        <CardContactUs
          title="NOUS SPONSORISER"
          description="Faites un geste en échange de publicité pour votre entreprise."
          image={iconSponsor}
          link="/nous-sponsoriser"
        />
      </div>
    </div>
  );
};

export default ContactUs;
