import React, { JSX } from 'react';
import Label from '../../common/label';
import Input from '../../common/input';
import { IProductForm } from '../../../types/form.type';

const Title = (props: IProductForm): JSX.Element => {
  const { data, onChange } = props;
  return (
    <div className="p-6 pt-0">
      <Label
        labelValue="Product Title"
        htmlFor="title"
        className="text-md font-semibold leading-none tracking-tight my-100"
        required
      />
      <Input
        type="text"
        id="title"
        name="title"
        value={data.title}
        placeholder="Enter product title"
        onChange={(e) => onChange({ title: e.target.value })}
      />
    </div>
  );
};

export default Title;
