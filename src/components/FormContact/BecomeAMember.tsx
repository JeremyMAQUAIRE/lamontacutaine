import { Icon, Item, List } from 'semantic-ui-react';
import president from '../../assets/image/profil/damien.png';

import './FormContact.scss';

const BecomeAMember = () => {
  return (
    <div className="becomeAMember-content">
      <Item.Group relaxed className="becomeAMember-item-group">
        <Item>
          <Item.Image
            size="small"
            src={president}
            circular
            className="becomeAMember-item-image"
          />
          <Item.Content verticalAlign="middle">
            <Item.Header className="becomeAMember-item-header">
              LABRE Damien
            </Item.Header>
            <Item.Description className="becomeAMember-item-decription-job">
              Président
            </Item.Description>
            <Item.Description className="becomeAMember-item-decription-phone">
              06.58.94.58.90
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <div className="becomeAMember-item-decription-info">
        <p>La Montacutaine, c’est :</p>
        <List>
          <List.Item>
            <Icon name="mail forward" />
            une réunion par mois environ
          </List.Item>
          <List.Item>
            <Icon name="mail forward" />
            une dizaine de manifestations par an
          </List.Item>
          <List.Item>
            <Icon name="mail forward" />
            une ambiance conviviale
          </List.Item>
        </List>
        <p>
          Chaque membre fait selon sa disponibilité et la présence n’est jamais
          obligatoire !
        </p>
      </div>
    </div>
  );
};

export default BecomeAMember;
