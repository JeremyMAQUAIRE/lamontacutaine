import { useDispatch } from 'react-redux';
import { Facebook, Instagram, Menu } from 'react-feather';
import {
  Header as SemanticHeader,
  Segment,
  Image,
  Button,
} from 'semantic-ui-react';

import logo from '../../assets/logoFull.webp';
import LoginModal from '../Modal/LoginModal/LoginModal';

import './Header.scss';
import { AppDispatch } from '../store/store';
import { actionToggleIsOpenModalLogin } from '../store/actionscreator';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleOpenModalLogin = () => {
    dispatch(actionToggleIsOpenModalLogin());
  };
  return (
    <>
      <Segment clearing vertical className="header-content">
        <SemanticHeader as="h2" className="header-h2 header-left">
          <button type="button" className="header-menu-button">
            <Menu className="header-menu" />
          </button>
        </SemanticHeader>
        <SemanticHeader as="h2" className="header-h2 header-center">
          <Image src={logo} className="header-logo" />
        </SemanticHeader>
        <SemanticHeader className="header-button header-right">
          <Button
            className="header-button-login"
            onClick={handleOpenModalLogin}
          >
            Se connecter
          </Button>
          <a href="https://www.facebook.com/lamontacutaine" target="_blanck">
            <Facebook className="header-button-socialNetwork" />
          </a>
          <a
            href="https://www.instagram.com/la_montacutaine/?hl=fr"
            target="_blanck"
          >
            <Instagram className="header-button-socialNetwork" />
          </a>
        </SemanticHeader>
      </Segment>
      <LoginModal />
    </>
  );
};

export default Header;
