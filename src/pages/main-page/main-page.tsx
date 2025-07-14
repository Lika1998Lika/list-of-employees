import { EmployeesList } from '../../widgets/employees-list';
import { Filter } from '../../widgets/filter';
import './container.css';

export function MainPage() {
  return (
    <div className="container">
      <EmployeesList />
      <Filter />
    </div>
  )
}