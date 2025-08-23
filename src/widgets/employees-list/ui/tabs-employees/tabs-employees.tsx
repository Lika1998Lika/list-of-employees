import { workerApi } from '../../../../entities/employees';
import './tabs-employees.css';

export function TabsEmployees() {
  const { data, error } = workerApi.useStaffTags();

  if (!data || error) return;

  return (
    <ul className='tabs-item'>
      {
        data.map((staff) => {
          return (
            <li key={staff.id}>
              <button className={`tabs_${staff.slug}`}>{staff.title}</button>
            </li>
          )
        })
      }
    </ul>
  )
}
