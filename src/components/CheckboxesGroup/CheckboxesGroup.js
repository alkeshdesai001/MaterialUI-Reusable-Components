import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxesGroup = ({
  checkboxState,
  setCheckboxState,
  options,
  label,
  color,
}) => {
  const onChange = (e) => {
    setCheckboxState({
      ...checkboxState,
      [e.target.name]: e.target.checked,
    });
  };
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{label}</FormLabel>
      <FormGroup onChange={onChange} value={checkboxState}>
        {options.map((o) => (
          <FormControlLabel
            key={o.value}
            control={
              <Checkbox
                name={o.value}
                checked={checkboxState[o.value]}
                color={color ? color : 'default'}
              />
            }
            label={o.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxesGroup;
