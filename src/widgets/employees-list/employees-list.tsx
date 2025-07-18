import { workerApi } from '../../entities/employees';
import './col-1.css';
import { TopBarSearch } from './top-bar-search';

export function EmployeesList() {

  const { data } = workerApi.useEmployeesQuery();
  console.log(data)

  return (
    <div className='col_1'>
      <TopBarSearch />
      <div className='list-employees'>
        <h1>Список сотрудников</h1>
        <ul className='tabs-item'>
          <li><button className="tabs_all">Весь список</button></li>
          <li><button className="tabs_problem">Проблемные</button></li>
          <li><button className="tabs_critical">Критические</button></li>
          <li><button className="tabs_warning">Есть замечания</button></li>
          <li><button className="tabs_done">Выполнено</button></li>
        </ul>
        <ul className='cards-item'>
          {
            data?.map((item) => { return (<li key={item.id}>{item.full_name}</li>) })
          }
        </ul>
      </div>
      <button className='btn-show_more'>Показать еще</button>
    </div>
  )
}
