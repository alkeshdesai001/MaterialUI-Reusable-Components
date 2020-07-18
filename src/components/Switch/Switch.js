import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SwitchComp = ({ switchState, setSwitchState, label, size, color }) => {
  const toggleChecked = () => {
    setSwitchState((prev) => !prev);
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            size={size}
            checked={switchState}
            onChange={toggleChecked}
            color={color}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default SwitchComp;
