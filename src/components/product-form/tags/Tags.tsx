import React, { JSX } from 'react';
import Label from '../../common/label';
import Input from '../../common/input';
import { IProductForm } from '../../../types/form.type';

const Tags = (props: IProductForm): JSX.Element => {
  const { data, onChange } = props;
  return (
    <div className="p-6 pt-0">
      <Label
        labelValue="Tags (comma separated)"
        htmlFor="tags"
        className="text-md font-semibold leading-none tracking-tight"
      />
      <Input
        type="text"
        id="tags"
        name="tags"
        value={data.tags}
        placeholder="summer,casual,clothes"
        onChange={(e) => onChange({ tags: e.target.value })}
      />
      <Label
        labelValue="Enter tags separated by commas"
        htmlFor="tags"
        className="text-xs font-light text-gray-500"
      />
    </div>
  );
};

export default Tags;
