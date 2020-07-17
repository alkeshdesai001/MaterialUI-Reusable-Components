import React from 'react';
import Button from '@material-ui/core/Button';

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
//     <div>
//       <Button
//         variant={variant}
//         color={color}
//         onClick={onClick}
//         disabled={disabled}
//       >
//         {children}
//       </Button>
//       <button
//         onClick={onClick}
//         disabled={disabled}
//         className={[
//           classes.button,
//           classes[variant],
//           classes[color],
//           className,
//         ].join(' ')}
//       >
//         {children}
//       </button>
//     </div>
//   );
// };

export default ButtonComp;
