// Тэг сотрудников
export type StaffTagType = {
  id: number;
  title: string;
  slug: string;
  color: string;
};

// Гражданство
export type CountryType = {
  id: number;
  icon: string; // путь к svg файлу
  title: string;
  slug: string;
};

// Должность
export type PositionType = {
  id: number;
  name: string;
};

// Тип договора
export type TypeContract = {
  id: number;
  title: string;
  slug: string;
};

// Пол
export type GenderType = {
  id: number;
  title: string;
  slug: string;
};

// Статус сотрудника
export type StaffStatusType = {
  tag_id: number;
  tag: StaffTagType;
  description: string;
};

// Сотрудник
export type EmployeeType = {
  id: number,
  full_name: string;       // ФИО
  inn: string;             // ИНН
  city: string;
  address: string;         // Адрес
  date_birth: string;      // Дата рождения в формате DD.MM.YYYY
  age: number;             // Возраст
  type_contract: TypeContract; // Объект типа договора
  type_contact_id: number;     // ID типа договора
  gender: GenderType;              // Объект пола
  gender_id: number;           // ID пола
  country: CountryType;            // Объект гражданства
  country_id: number;          // ID гражданства
  position: PositionType;          // Объект должности
  position_id: number;         // ID должности
  status: StaffStatusType;         // Статус сотрудника
};

// export type EmployeesType = {
//   full_name: string;
//   inn: string;
//   address: string;
//   date_birth: string;
//   age: number;
//   type_contract: AgreementType;
//   type_contact_id: AgreementType['id'];
//   gender: GenderType;
//   gender_id: GenderType['id'];
//   country: CountyType;
//   country_id: CountyType['id'];
//   position: PositionType;
//   position_id: PositionType['id'];
//   status: StaffTagType['slug'] 
// }