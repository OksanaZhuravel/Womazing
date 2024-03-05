
export  const validationRules: Array<{ fields: Array<string>; condition: (value: string) => boolean; errorMessage: string }> = [
      { fields: ['name'], condition: (value) => value.trim() !== '', errorMessage: 'Введите Имя' },
      { fields: ['email'], condition: (value) => value.trim() !== '', errorMessage: 'Введите Email' },
      { fields: ['phone'], condition: (value) => /^\+?[0-9]+$/.test(value), errorMessage: 'Только + и цифры для номера телефона' },
      { fields: ['country'], condition: (value) => value.trim() !== '', errorMessage: 'Введите страну' },
      { fields: ['city'], condition: (value) => value.trim() !== '', errorMessage: 'Введите город' },
      { fields: ['street'], condition: (value) => value.trim() !== '', errorMessage: 'Введите улицу' },
      { fields: ['house'], condition: (value) => value.trim() !== '', errorMessage: 'Введите номер дома' },
      { fields: ['apartment'], condition: (value) => value.trim() !== '', errorMessage: 'Введите номер квартиры' },
    ];
