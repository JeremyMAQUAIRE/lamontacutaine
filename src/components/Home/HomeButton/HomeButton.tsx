import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import AgendaIcon from '../../../assets/image/icon/agenda.png';
import BlogIcon from '../../../assets/image/icon/blog.png';
import JointIcon from '../../../assets/image/icon/joinUs.png';
import ShopIcon from '../../../assets/image/icon/shop.png';

import './HomeButton.scss';

const buttonTitles = [
  {
    id: 0,
    name: 'Agenda',
    icon: AgendaIcon,
    link: '/agenda',
    target: '',
  },
  {
    id: 1,
    name: 'Blog',
    icon: BlogIcon,
    link: '/blog',
    target: '',
  },
  {
    id: 2,
    name: 'Nous rejoindre',
    icon: JointIcon,
    link: '/nous-avons-besoin-de-vous',
    target: '',
  },
  {
    id: 3,
    name: 'Boutique',
    icon: ShopIcon,
    link: 'https://www.helloasso.com/associations/la-montacutaine/boutiques/boutique-de-la-montacutaine?_gl=1%2a1yxipo2%2a_ga%2aMTIzMDcwNTcwNC4xNjk5NTI2NTE4%2a_ga_TKC826G3G2%2aMTY5OTUzMjI1Ni4xLjEuMTY5OTUzNDUzNy41My4wLjA.&_ga=2.166293246.1307840424.1699526518-1230705704.1699526518&_gac=1.188626522.1699532230.Cj0KCQiAo7KqBhDhARIsAKhZ4ujW_Jun7ozSZpnScT2QEHdUyDUXlZLlp_qJfx24OocesfNNVJrZTSsaAit4EALw_wcB',
    target: '_blanck',
  },
];

const HomeButton = () => {
  return (
    <div className="buttonsContainer-content">
      {buttonTitles.map((buttonTitle) => (
        <div key={buttonTitle.id} className="buttonsContainer-one">
          <div className="buttonsContainer-round">
            <Link to={buttonTitle.link} target={buttonTitle.target}>
              <Image
                src={buttonTitle.icon}
                className="buttonsContainer-image"
              />
            </Link>
          </div>
          <div className="buttonsContainer-text"> {buttonTitle.name} </div>
        </div>
      ))}
    </div>
  );
};

export default HomeButton;
