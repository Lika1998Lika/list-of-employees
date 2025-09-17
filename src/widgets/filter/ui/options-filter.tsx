import { workerApi } from '../../../entities/employees';
import type { Option } from '../../../shared/ui-form/types';
import { UiRadioGroup } from '../../../shared/ui-form/ui-radio-group';
import { UiSelect } from '../../../shared/ui-form/ui-select';
import './filter.css';
import { getNames } from 'country-list';

export function OptionsFilter() {
  const { data, isLoading, isError } = workerApi.usePositions();
  const { data: conracts } = workerApi.useContracts();
  const { data: genders } = workerApi.useGenders();

  if (!data || !conracts || !genders) return;
  if (isLoading || isError) return <h3>Error</h3>

  const countryList = getNames().map((item) => ({ id: item, value: item, label: item }))
  const positionsOptions: Option[] = data.map((i) => ({ id: i.id, value: i.id, label: i.name })) ?? [];
  const gendersOptions: Option[] = genders?.map((i) => ({ id: i.id, value: i.slug, label: i.title })) ?? [];
  const contractsOptions: Option[] = conracts?.map((i) => ({ id: i.id, value: i.slug, label: i.title })) ?? [];
  return (
    <>
      <section>
        <div className='block_row-1'>
          <div className='citizenship_row'>
            <UiSelect id='citizenship' label='Гражданство' options={[{ id: '', value: '', label: 'Выберите страну' }, ...countryList]} />
          </div>

          <div className='gender_row'>
            <UiSelect id='gender' label='Пол' options={gendersOptions} />
          </div>
        </div>

        <div className='job_title_row'>
          <UiSelect id='job_title' label='Должность' options={[{ id: '', value: '', label: 'Все должности' }, ...positionsOptions]} />
        </div>
      </section>

      <section className='block_agreement'>
        <p>Тип договора</p>
        <UiRadioGroup options={contractsOptions} />
      </section>
    </>
  )
}