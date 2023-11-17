import { Menu } from 'react-feather';
import { Header as SemanticHeader, Segment, Image } from 'semantic-ui-react';

import logo from '../../assets/logoFull.webp';

import './Header.scss';

const Header = () => {
  return (
    <Segment clearing vertical className="header-content">
      <SemanticHeader as="h2" className="header-h2">
        <Menu className="header-menu" />
      </SemanticHeader>
      <SemanticHeader as="h2" className="header-h2">
        <Image src={logo} className="header-logo" />
      </SemanticHeader>
    </Segment>
  );
};

export default Header;
