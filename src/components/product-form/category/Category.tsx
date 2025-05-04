import React, { JSX } from 'react';
import { IProductForm } from '../../../types/form.type';
import Dropdown from '../../common/dropdown';
import Label from '../../common/label';
import { PRODUCT_CATEGORIES } from '../../../constant/form-constant';

const Category = (props: IProductForm): JSX.Element => {
  const { data, onChange } = props;
  return (
    <div className="p-6 pt-0">
      <Label
        labelValue="Category"
        htmlFor="title"
        className="text-md font-semibold leading-none tracking-tight"
        required
      />
      <Dropdown
        options={PRODUCT_CATEGORIES}
        value={data.category}
        onChange={(value) => onChange({ category: value })}
        placeholder="Select category"
      />
    </div>
  );
};

export default Category;
