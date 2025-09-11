import { workerApi } from '../../../entities/employees';
import './filter.css';
import { getNames } from 'country-list';

export function Filter() {
  const countryList = getNames();
  const { data, isLoading, isError } = workerApi.usePositions();
  const { data: conracts } = workerApi.useContracts();
  const { data: genders } = workerApi.useGenders();

  if (isLoading || isError) return <h3>Error</h3>

  return (
    <div className='block_filter px-30'>
      <h1 className='block_filter_text'>Фильтр</h1>

      <section>
        <div className='block_row-1'>
          <div className='citizenship_row'>
            <label htmlFor='citizenship'>Гражданство</label>
            <br />
            <select id='citizenship'>
              <option value="">Выберите страну</option>
              {
                countryList.map((country) => {
                  return (
                    <option key={country} value={country}>{country}</option>
                  )
                })
              }
            </select>
          </div>

          <div className='gender_row'>
            <label htmlFor='gender'>Пол</label>
            <br />
            <select id='gender'>
              <option value="">Без разницы</option>
              {
                genders?.map((i) => {
                  return (
                    <option key={i.id} value={i.slug}>{i.title}</option>
                  )
                })
              }
            </select>
          </div>
        </div>

        <div className='job_title_row'>
          <label htmlFor='job_title'>Должность</label>
          <br />
          <select id='job_title'>
            <option value="">Все должности</option>
            {
              data?.map((position) => {
                return (
                  <option key={position.id} value={position.name}>{position.name}</option>
                )
              })
            }
          </select>
        </div>
      </section>

      <section className='block_agreement'>
        <p>Тип договора</p>
        {
          conracts?.map((item) => {
            return (
              <li key={item.id}>
                <label>
                  <input type="radio" name="contractType" value={item.slug} />
                  {item.title}
                </label>
              </li>
            )
          })
        }
      </section>
      <div className='block_btn'>
        <button className='btn_1'>Применить</button>
        <button className='btn_2'>Очистить</button>
      </div>
    </div>
  )
}