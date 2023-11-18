import { Menu } from 'react-feather';
import {
  Header as SemanticHeader,
  Segment,
  Image,
  Button,
} from 'semantic-ui-react';

import logo from '../../assets/logoFull.webp';

import './Header.scss';

const Header = () => {
  return (
    <Segment clearing vertical className="header-content">
      <SemanticHeader as="h2" className="header-h2 header-left">
        <Menu className="header-menu" />
      </SemanticHeader>
      <SemanticHeader as="h2" className="header-h2 header-center">
        <Image src={logo} className="header-logo" />
      </SemanticHeader>
      <SemanticHeader className="header-button header-right">
        <Button className="header-button-login">Se connecter</Button>
      </SemanticHeader>
    </Segment>
  );
};

export default Header;
