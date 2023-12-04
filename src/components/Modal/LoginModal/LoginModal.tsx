import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Modal, Input } from 'semantic-ui-react';
import { AppDispatch, RootState } from '../../store/store';
import { actionToggleIsOpenModalLogin } from '../../store/actionscreator';

import './LoginModal.scss';

const LoginModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const open = useSelector(
    (state: RootState) => state.modalReducer.isOpenModalLogin
  );
  const handleOpenModalLogin = () => {
    dispatch(actionToggleIsOpenModalLogin());
  };

  return (
    <Modal
      size="mini"
      open={open}
      onClose={handleOpenModalLogin}
      className="modalLogin-content"
    >
      <Modal.Header className="modalLogin-header">
        Entrez vos identifiants
      </Modal.Header>
      <Modal.Content className="modalLogin-formContent">
        <Form>
          <Form.Group inline>
            <Form.Field className="modalLogin-field">
              <label htmlFor="#" className="modalLogin-label">
                Votre mail
              </label>
              <Input className="modalLogin-input" />
            </Form.Field>
          </Form.Group>
          <Form.Group inline>
            <Form.Field className="modalLogin-field">
              <label htmlFor="#" className="modalLogin-label">
                Votre mot de passe
              </label>
              <Input className="modalLogin-input" />
            </Form.Field>
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions className="modalLogin-actions">
        <Button className="modalLogin-buttonConnexion">Connexion</Button>
        <Button className="modalLogin-buttonPassword">
          Mot de passe oublié
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default LoginModal;
