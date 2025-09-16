import Modal from 'react-modal';
import './style.css';
import { OptionsFilter } from '../../../filter';
//import { workerApi } from '../../../../entities/employees';

type Props = {
  closeModal: () => void;
  modalIsOpen: boolean;
};

export function FormAddEmploye(props: Props) {
  const { closeModal, modalIsOpen } = props;
  // const { data, isLoading, isError } = workerApi.usePositions();
  // const { data: conracts } = workerApi.useContracts();
  // const { data: genders } = workerApi.useGenders();
  //if (isLoading || isError) return <h3>Error</h3>

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

        <OptionsFilter />
      </form>
    </Modal>
  )
}
