import React, { JSX } from 'react';
import { ILabel } from '../../../types/form.type';

const Label = (props: ILabel): JSX.Element => {
  const { labelValue, htmlFor, className, required } = props;
  return (
    <label htmlFor={htmlFor} className={className ? ` ${className}` : ''}>
      {labelValue} {required ? <span className="text-red-500">*</span> : ''}
    </label>
  );
};

export default Label;
