import './tabs-employees.css';

export function TabsEmployees() {
  return (
    <ul className='tabs-item'>
      <li><button className="tabs_all">Весь список</button></li>
      <li><button className="tabs_problem">Проблемные</button></li>
      <li><button className="tabs_critical">Критические</button></li>
      <li><button className="tabs_warning">Есть замечания</button></li>
      <li><button className="tabs_done">Выполнено</button></li>
    </ul>
  )
}
