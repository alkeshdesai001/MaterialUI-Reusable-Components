import React from 'react';
import Button from '@material-ui/core/Button';

// import cls from '../Shared/Classes';

// import classes from './Button.module.scss';

const ButtonComp = ({ children, variant, disabled, color, onClick }) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

// const ButtonComp = ({
//   children,
//   color,
//   variant,
//   disabled,
//   onClick,
//   className,
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={cls(
//         classes.button,
//         classes[variant],
//         classes[color],
//         className
//       )}
//     >
//       {children}
//     </button>
//   );
// };

export default ButtonComp;
