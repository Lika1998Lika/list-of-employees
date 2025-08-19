import { workerApi } from '../../../../entities/employees';
import './carts-employees.css';

export function CartsEmployees() {
  const { data } = workerApi.useEmployeesQuery();

  return (
    <ul className='carts-item'>
      {
        data?.map((item) => { return (<li key={item.id}>{item.full_name}</li>) })
      }
    </ul>
  )
}

