import React, { JSX, useRef } from 'react';
import { IIMageUploader } from '../../types/form.type';
import Label from '../common/label';
import Display from './images/Display';
import Upload from './images/Upload';
import Content from './images/Content';

const ImageUploader = (props: IIMageUploader): JSX.Element => {
  const { images, onUpload, onDelete } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      onUpload(filesArray);

      e.target.value = '';
    }
  };
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full border-zinc-300 bg-white">
      <div className="flex flex-col space-y-1.5 p-6">
        <Label
          labelValue="Product Images"
          htmlFor="images"
          className="text-2xl font-semibold leading-none tracking-tight"
        />
      </div>

      <div className="p-6 pt-0">
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Display images={images} onDelete={onDelete} />
            <Upload images={images} triggerFileInput={triggerFileInput} />
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            multiple={images.length < 2}
            className="hidden"
          />
          <Content images={images} triggerFileInput={triggerFileInput} />
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
