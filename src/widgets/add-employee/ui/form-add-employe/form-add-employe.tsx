import Modal from 'react-modal';
import './style.css';

type Props = {
  closeModal: () => void;
  modalIsOpen: boolean;
};

export function FormAddEmploye(props: Props) {
  const { closeModal, modalIsOpen } = props;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay"
    >
      <form className='modal-form'>
        <h2>Регистрация</h2>
        <label>
          ФИО:
          <input type="text" placeholder='ФИО' />
        </label>

        <label htmlFor="inn">ИНН:
          <input type="text" placeholder='ИНН' />
        </label>

        <label htmlFor="city">Город:
          <input type="text" placeholder='Город' />
        </label>

        <label htmlFor="address">Адрес:
          <input type="text" placeholder='Адрес' />
        </label>

        <label>Дата рождения:
          <input type="date" name="birthdate" />
        </label>
      </form>
    </Modal>
  )
}
