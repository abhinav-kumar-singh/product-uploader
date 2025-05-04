import React, { JSX } from 'react';
import { IProductForm } from '../../types/form.type';
import Label from '../common/label';
import Title from './title';
import Category from './category';
import Tags from './tags';

const ProductForm = (props: IProductForm): JSX.Element => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full border-zinc-300 bg-white">
      <div className="flex flex-col space-y-1.5 p-6">
        <Label
          labelValue="Product Information"
          htmlFor="information"
          className="text-2xl font-semibold leading-none tracking-tight"
        />
      </div>
      <Title {...props} />
      <Category {...props} />
      <Tags {...props} />
    </div>
  );
};

export default ProductForm;
