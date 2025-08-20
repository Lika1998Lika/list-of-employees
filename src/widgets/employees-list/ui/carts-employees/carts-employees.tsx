import Flag from 'react-world-flags';
import { workerApi } from '../../../../entities/employees';
import './carts-employees.css';

export function CartsEmployees() {
  const { data } = workerApi.useEmployeesQuery();


  return (
    <ul className='carts-item'>
      {
        data?.map((item) => {
          return (
            <li key={item.id}>

              <section className='carts-block-empl'>
                <div className='carts-line-1'>
                  <p className='full_name'>{item.full_name}</p>
                  <div className='carts-line-inn'><p>ИНН {item.inn}</p></div>
                  <div className='carts-line-contract'><p>{item.type_contract.title}</p></div>
                  <p className='text-14'>{item.position.name}</p>
                </div>

                <div className='carts-line-2 text-14px'>
                  <Flag code={item.country.slug} width={20} height={14} />
                  <span>{item.country.slug}</span>
                  <p>{item.city}</p>
                  <p>Дата рождения: {item.date_birth}</p>
                  <p>Возраст: {item.age}</p>
                  <p>Пол: {item.gender.title}</p>
                </div>

                <div className='carts-status-docs' style={{ backgroundColor: item.status.tag.color }}>
                  <p className='text-14px'>{item.status.description}</p>
                </div>
              </section>
            </li>
          )
        })
      }
    </ul>
  )
}

