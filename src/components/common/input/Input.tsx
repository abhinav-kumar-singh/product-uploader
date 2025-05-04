import React, { JSX } from 'react';
import { IInput } from '../../../types/form.type';
import { cn } from '../../../utils/utils';

const Input = (props: IInput): JSX.Element => {
  const { placeholder, className, value, type, id, name, required, onChange } =
    props;
  return (
    <input
      type={type}
      required={required}
      onChange={onChange}
      value={value}
      id={id}
      name={name}
      placeholder={placeholder ?? 'Enter text'}
      className={cn(
        'h-10 w-full rounded-md border border-zinc-300 px-3 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm mt-1',
        className,
      )}
    />
  );
};

export default Input;
