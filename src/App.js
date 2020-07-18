import React, { useState } from 'react';
import Hidden from '@material-ui/core/Hidden';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import CheckboxesGroup from './components/CheckboxesGroup/CheckboxesGroup';
import RadioButtonsGroup from './components/RadioButtonsGroup/RadioButtonsGroup';
import Dropdown from './components/Dropdown/Dropdown';
import Switch from './components/Switch/Switch';
import Drawer from './components/Drawer/Drawer';
import DrawerContent from './components/DrawerContent/DrawerContent';

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

  const [age, setAge] = useState('one');

  const [darkMode, setDarkMode] = useState(false);

  const [drawerState, setDrawerState] = useState(false);

  const anchor = 'left';

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerState(open);
  };

  const styles = {
    display: 'flex',
    margin: '1rem 0',
  };

  return (
    <MUIThemeProvider type={darkMode ? 'dark' : 'light'}>
      <AppBar anchor={anchor} toggleDrawer={toggleDrawer} position='static' />
      <Container maxWidth='1600px'>
        <div style={styles} />
        <Switch
          switchState={darkMode}
          setSwitchState={setDarkMode}
          label='DarkMode'
          color='primary'
          // size='small'
        />
        <div style={styles} />
        <Button variant='outlined' color='primary' className='buttonPrimary'>
          Primary
        </Button>
        <div style={styles} />
        <CheckboxesGroup
          checkboxState={numbers}
          setCheckboxState={setNumbers}
          options={numberOptions}
          label={`Mark the odd numbers.`}
          color='primary'
          size='small'
        />
        <div style={styles} />
        <RadioButtonsGroup
          radioButtonState={numbersRadio}
          setRadioButtonState={setNumbersRadio}
          options={numberOptions}
          label={`Are o sambha, Kitne aadmi the??.`}
          color='primary'
          size='small'
        />
        <div style={styles} />
        <Dropdown
          selectState={age}
          setSelectState={setAge}
          options={numberOptions}
          // label={`Age`}
          // variant='outlined'
          // noneAllowed
          // minWidth={100}
        />
        <div style={styles} />
        <h4>Open drawer button is only visible for Small(sm) screen size.</h4>
        <Drawer
          anchor={anchor}
          drawerState={drawerState}
          toggleDrawer={toggleDrawer}
        >
          <DrawerContent toggleDrawer={toggleDrawer} anchor={anchor} />
        </Drawer>
        <Hidden smUp>
          <Button
            variant='outlined'
            color='primary'
            onClick={toggleDrawer(anchor, true)}
          >
            Open Drawer
          </Button>
        </Hidden>
      </Container>
    </MUIThemeProvider>
  );
};

export default App;
