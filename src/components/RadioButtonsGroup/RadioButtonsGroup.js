import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const RadioButtonsGroup = ({
  radioButtonState,
  setRadioButtonState,
  options,
  label,
  color,
  size,
}) => {
  const onChange = (e) => {
    setRadioButtonState(e.target.value);
  };
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{label}</FormLabel>
      <RadioGroup onChange={onChange} value={radioButtonState}>
        {options.map((o) => (
          <FormControlLabel
            key={o.value}
            value={o.value}
            control={<Radio color={color ? color : 'default'} size={size} />}
            label={o.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonsGroup;
