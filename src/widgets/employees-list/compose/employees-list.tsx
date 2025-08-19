import { CartsEmployees } from '../ui/carts-employees/carts-employees';
import { TabsEmployees } from '../ui/tabs-employees/tabs-employees';
import './employees-list.css';

export function EmployeesList() {

  return (
    <>
      <div className='list-employees px-30'>
        <h1>Список сотрудников</h1>
        <TabsEmployees />
        <CartsEmployees />
        <button className='btn-show_more'>Показать еще</button>
      </div>
    </>
  )
}
