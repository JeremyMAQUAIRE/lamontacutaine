import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Modal, Popup } from 'semantic-ui-react';

import './NewletterModal.scss';
import { AppDispatch, RootState } from '../../store/store';
import { actionToggleIsOpenModalNewletter } from '../../store/actionscreator';

const NewletterModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const open = useSelector(
    (state: RootState) => state.modalReducer.isOpenModalNewletter
  );
  const handleOpenModalnewletter = () => {
    dispatch(actionToggleIsOpenModalNewletter());
  };

  return (
    <Modal
      open={open}
      onClose={handleOpenModalnewletter}
      size="tiny"
      className="newletterModal"
    >
      <Modal.Header className="newletterModal-header">
        Restez au courant des prochaines canailleries....
      </Modal.Header>
      <Modal.Content className="newletterModal-content">
        <Form>
          <Form.Field inline>
            <label htmlFor="#" className="newletterModal-label">
              Votre prénom
            </label>
            <input />
          </Form.Field>
          <Form.Field inline>
            <label htmlFor="#" className="newletterModal-label">
              Votre nom
            </label>
            <input />
          </Form.Field>
          <Form.Field inline>
            <label htmlFor="#" className="newletterModal-label">
              Votre mail
            </label>
            <input />
          </Form.Field>
          <Form.Checkbox
            label="J'accepte les termes et conditions générales"
            className="newletterModal-checkbox"
          />
        </Form>
      </Modal.Content>
      <Modal.Actions className="newletterModal-actions">
        <Button
          className="newletterModal-button"
          content="S'incrire à la newsletter"
          labelPosition="right"
          icon="checkmark"
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default NewletterModal;
