import './top-bar-search.css'

export function TopBarSearch() {
  return (
    <div className='bar-search-form px-30'>
      <form method='get'>
        <input
          className='search-input'
          type='search'
          placeholder='Поиск сотрудника'
          name='search'
        />
      </form>
      <p className='search-text-example'>Например: Иванов Иван</p>
    </div>
  )
}