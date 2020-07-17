import React, { useState } from 'react';

import Container from './components/Container/Container';
import Button from './components/Button/Button';
import CheckboxesGroup from './components/CheckboxesGroup/CheckboxesGroup';
import RadioButtonsGroup from './components/RadioButtonsGroup/RadioButtonsGroup';

import MUIThemeProvider from './styles/MUIThemeProvider';
import './App.css';

const App = () => {
  const numberOptions = [
    {
      label: 'One',
      value: 'one',
    },
    {
      label: 'Two',
      value: 'two',
    },
    {
      label: 'Three',
      value: 'three',
    },
  ];

  const [numbers, setNumbers] = useState({
    one: true,
    two: false,
    three: true,
  });

  const [numbersRadio, setNumbersRadio] = useState('two');

  return (
    <MUIThemeProvider type='light'>
      <Container maxWidth='1600px'>
        <Button variant='contained' color='primary' className='buttonPrimary'>
          Primary
        </Button>
        <br />
        <CheckboxesGroup
          checkboxState={numbers}
          setCheckboxState={setNumbers}
          options={numberOptions}
          label={`Mark the odd numbers.`}
          color='primary'
        />
        <RadioButtonsGroup
          radioButtonState={numbersRadio}
          setRadioButtonState={setNumbersRadio}
          options={numberOptions}
          label={`Are o sambha, Kitne aadmi the??.`}
          color='primary'
        />
      </Container>
    </MUIThemeProvider>
  );
};

export default App;
