import './filter.css';

export function Filter() {
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
            </select>
          </div>

          <div className='gender_row'>
            <label htmlFor='gender'>Пол</label>
            <br />
            <select id='gender'>
              <option value="">Без разницы</option>
            </select>
          </div>
        </div>

        <div className='job_title_row'>
          <label htmlFor='job_title'>Должность</label>
          <br />
          <select id='job_title'>
            <option value="">Все должности</option>
          </select>
        </div>
      </section>

      <section className='block_agreement'>
        <p>Тип договора</p>
        <label>
          <input type="radio" name="contractType" value="gph" />
          ГПХ
        </label>
        <label>
          <input type="radio" name="contractType" value="gph" />
          ГПХ
        </label>
        <label>
          <input type="radio" name="contractType" value="gph" />
          ГПХ
        </label>
        <label>
          <input type="radio" name="contractType" value="gph" />
          ГПХ
        </label>
      </section>
      <div className='block_btn'>
        <button className='btn_1'>Применить</button>
        <button className='btn_2'>Очистить</button>
      </div>
    </div>
  )
}