import './col-1.css';
import { TopBarSearch } from './top-bar-search';

export function EmployeesList() {
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
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <button className='btn-show_more'>Показать еще</button>
    </div>
  )
}
