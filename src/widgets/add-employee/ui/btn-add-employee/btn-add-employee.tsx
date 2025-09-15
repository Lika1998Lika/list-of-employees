import { useState } from 'react';
import './btn-add-employee.css';
import { FormAddEmploye } from '../form-add-employe/form-add-employe';

export function BtnAddEmployee() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className='btn-add_employees px-30'>
      <button className='btn_add' onClick={openModal}>Добавить нового сотрудника</button>
      <FormAddEmploye closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </div>
  )
}
