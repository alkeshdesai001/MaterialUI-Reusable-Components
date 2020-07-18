import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = (minWidth) =>
  makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: minWidth ? minWidth : 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }))();

const Dropdown = ({
  selectState,
  setSelectState,
  options,
  label,
  noneAllowed,
  variant,
  minWidth,
}) => {
  const classes = useStyles(minWidth);

  const onChange = (event) => {
    setSelectState(event.target.value);
  };

  return (
    <div>
      <FormControl variant={variant} className={classes.formControl}>
        {label && (
          <InputLabel id='demo-simple-select-outlined-label'>
            {label}
          </InputLabel>
        )}
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={selectState}
          onChange={onChange}
          label={label}
        >
          {noneAllowed && (
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
          )}
          {options.map((o) => (
            <MenuItem key={o.value} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
