
import { BtnAddEmployee } from '../../../widgets/add-employee/ui/btn-add-employee/btn-add-employee';
import { EmployeesList } from '../../../widgets/employees-list';
import { Filter } from '../../../widgets/filter';
import { TopBarSearch } from '../../../widgets/top-bar-search';
import './container.css';

export function MainPage() {
  return (
    <div className="container">
      <section className="col-1">
        <TopBarSearch />
        <EmployeesList />
      </section>
      <section className="col-2">
        <BtnAddEmployee />
        <Filter />
      </section>
    </div>
  )
}