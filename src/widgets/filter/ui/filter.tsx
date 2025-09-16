import './filter.css';
import { OptionsFilter } from './options-filter';

export function Filter() {
  return (
    <div className='block_filter px-30'>
      <h1 className='block_filter_text'>Фильтр</h1>

      <OptionsFilter />

      <div className='block_btn'>
        <button className='btn_1'>Применить</button>
        <button className='btn_2'>Очистить</button>
      </div>
    </div>
  )
}