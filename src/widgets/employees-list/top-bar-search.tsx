import './col-1.css';

export function TopBarSearch() {
  return (
    <div className='bar-search-form'>
      <form method='get'>
        <input
          className='search-input'
          type='search'
          placeholder='Поиск сотрудника'
        />
      </form>
      <p className='search-text-example'>Например: Иванов Иван</p>
    </div>
  )
}