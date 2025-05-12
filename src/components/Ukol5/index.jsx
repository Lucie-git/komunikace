import { useState } from 'react';
import { InputField } from './InputField';

/*
 Zadání: Vyřešte tento úkol podobně jako předchozí, pouze s tím rozdílem, že tentokrát budete mít
  dvě pole, do kterých uživatel může psát jméno a příjmení. Výsledné jméno a příjmení se mají
  zobrazit pod nadpisem oddělené mezerou. Budete tedy potřebovat dva stavy, každý pro jedno pole.
*/

export const Ukol5 = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const handleFirstName = (inputValue) => {
    setFirstName(inputValue);
  };
  const handleSecondName = (inputValue) => {
    setSecondName(inputValue);
  };
  return (
    <>
      <p>
        Jméno: {firstName} {secondName}
      </p>
      <InputField label="Jméno" type="text" onValueChange={handleFirstName} value={firstName} />

      <InputField
        label="Příjmení"
        type="text"
        onValueChange={handleSecondName}
        value={secondName}
      />
    </>
  );
};
