import React from 'react';
import { buttonStyles } from './buttonVarients';
import { cn } from '../../../utils/utils';
import { IButton } from '../../../types/form.type';

const Button = (props: IButton) => {
  const {
    type,
    onClick,
    disabled = false,
    children,
    variant,
    size,
    className,
  } = props;

  const classes = cn(
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizes[size as keyof typeof buttonStyles.sizes] ||
      buttonStyles.sizes.md,
    className,
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
