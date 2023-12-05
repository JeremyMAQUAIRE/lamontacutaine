import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'semantic-ui-react';

import eventGif from '../../../assets/image/gif/icons8-heures-supplémentaires.gif';
import settingGif from '../../../assets/image/gif/icons8-paramètres.gif';
import contactGif from '../../../assets/image/gif/icons8-poser-une-question.gif';
import helpGif from '../../../assets/image/gif/icons8-confiance.gif';
import whoGif from '../../../assets/image/gif/icons8-question.gif';
import shopGif from '../../../assets/image/gif/icons8-caddie.gif';
import photoGif from '../../../assets/image/gif/icons8-photo.gif';
import blogGif from '../../../assets/image/gif/icons8-conversation.gif';

import './MenuModal.scss';
import { AppDispatch, RootState } from '../../store/store';
import {
  actionChangeFormChoice,
  actionToggleIsOpenModalMenu,
  actionToggleIsOpenModalMenuLogin,
} from '../../store/actionscreator';

const MenuModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const isConnected = useSelector(
    (state: RootState) => state.userReducer.isConnected
  );
  const open = useSelector(
    (state: RootState) => state.modalReducer.isOpenModalMenu
  );
  const handleOpenModalMenu = () => {
    dispatch(actionToggleIsOpenModalMenu());
  };
  const handleOpenModalMenuLogin = () => {
    dispatch(actionToggleIsOpenModalMenuLogin());
  };
  const handleOpenModalForm = () => {
    dispatch(actionToggleIsOpenModalMenu());
    dispatch(actionChangeFormChoice('joinUs'));
  };

  return (
    <Modal open={open} onClose={handleOpenModalMenu} className="modalMenu">
      <nav className="modalMenu-nav">
        <div className="ui vertical menu">
          <NavLink
            className="item modalMenu-item"
            to="/qui-sommes-nous"
            onClick={handleOpenModalMenu}
          >
            <div className="modalMenu-containerItem">
              <img src={whoGif} alt="gif" className="modalMenu-iconGif" />
              <div className="header modalMenu-header">Qui sommes-nous?</div>
            </div>
          </NavLink>
          <NavLink
            className="item modalMenu-item"
            to="/agenda"
            onClick={handleOpenModalMenu}
          >
            <div className="modalMenu-containerItem">
              <img src={eventGif} alt="gif" className="modalMenu-iconGif" />
              <div className="header modalMenu-header">
                Agenda : pour ne rien manquer
              </div>
            </div>
          </NavLink>
          <NavLink
            className="item modalMenu-item"
            to="/nous-rejoindre"
            onClick={handleOpenModalMenu}
          >
            <div className="modalMenu-containerItem">
              <img src={helpGif} alt="gif" className="modalMenu-iconGif" />
              <div className="header modalMenu-header">
                Nous avons besoin de vous
              </div>
            </div>
          </NavLink>
          <NavLink
            className="item modalMenu-item"
            to="/blog"
            onClick={handleOpenModalMenu}
          >
            <div className="modalMenu-containerItem">
              <img src={blogGif} alt="gif" className="modalMenu-iconGif" />
              <div className="header modalMenu-header">Blog</div>
            </div>
          </NavLink>
          <NavLink
            className="item modalMenu-item"
            to="/galerie"
            onClick={handleOpenModalMenu}
          >
            <div className="modalMenu-containerItem">
              <img src={photoGif} alt="gif" className="modalMenu-iconGif" />
              <div className="header modalMenu-header">
                Galeries photo/presse
              </div>
            </div>
          </NavLink>
          <NavLink
            className="item modalMenu-item"
            to="https://www.helloasso.com/associations/la-montacutaine/boutiques/boutique-de-la-montacutaine?_gl=1%2a1yxipo2%2a_ga%2aMTIzMDcwNTcwNC4xNjk5NTI2NTE4%2a_ga_TKC826G3G2%2aMTY5OTUzMjI1Ni4xLjEuMTY5OTUzNDUzNy41My4wLjA.&_ga=2.166293246.1307840424.1699526518-1230705704.1699526518&_gac=1.188626522.1699532230.Cj0KCQiAo7KqBhDhARIsAKhZ4ujW_Jun7ozSZpnScT2QEHdUyDUXlZLlp_qJfx24OocesfNNVJrZTSsaAit4EALw_wcB"
            target="_blanck"
            onClick={handleOpenModalMenu}
          >
            <div className="modalMenu-containerItem">
              <img src={shopGif} alt="gif" className="modalMenu-iconGif" />
              <div className="header modalMenu-header">Boutique</div>
            </div>
          </NavLink>
          <NavLink
            className="item modalMenu-item"
            to="/contactez-nous"
            onClick={handleOpenModalForm}
          >
            <div className="modalMenu-containerItem">
              <img src={contactGif} alt="gif" className="modalMenu-iconGif" />
              <div className="header modalMenu-header">Contactez-nous</div>
            </div>
          </NavLink>
          {!isConnected && (
            <NavLink
              className="item modalMenu-item"
              to=""
              onClick={handleOpenModalMenuLogin}
            >
              <div className="modalMenu-containerItem">
                <img src={settingGif} alt="gif" className="modalMenu-iconGif" />
                <div className="header modalMenu-header">Se connecter</div>
              </div>
            </NavLink>
          )}
          {isConnected && (
            <NavLink
              className="item modalMenu-item"
              to="/espace-membre"
              onClick={handleOpenModalMenu}
            >
              <div className="modalMenu-containerItem">
                <img src={settingGif} alt="gif" className="modalMenu-iconGif" />
                <div className="header modalMenu-header">Espace membre</div>
              </div>
            </NavLink>
          )}
        </div>
      </nav>
    </Modal>
  );
};

export default MenuModal;
