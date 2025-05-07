import React, { JSX, useCallback, useRef, useState } from 'react';
import { IIMageUploader } from '../../types/form.type';
import Label from '../common/label';
import Display from './images/Display';
import Upload from './images/Upload';
import Content from './images/Content';

const ImageUploader = (props: IIMageUploader): JSX.Element => {
  const { images, handleImageUpload, handleImageDelete,setNotification } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      handleFiles(filesArray);
      e.target.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleFiles = useCallback(
    (files: File[]) => {
      const imageFiles = files.filter((file) => file.type.startsWith('image/'));
      const OtherFiles = files.filter((file) => !file.type.startsWith('image/'));
      if (imageFiles.length > 0) {
        handleImageUpload(imageFiles);
      }
      if(OtherFiles.length > 0){
        setNotification({
          type:'error',
          message:'please upload only JPG, PNG, GIF file type'
        })
      }
    },
    [handleImageUpload],
  );

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      dragCounter.current = 0;

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const filesArray = Array.from(e.dataTransfer.files);
        handleFiles(filesArray);
      }
    },
    [handleFiles],
  );

  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm h-full border-zinc-300 bg-white relative`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isDragging ? (
        <div className="absolute inset-0 bg-blue-50 bg-opacity-70 flex items-center justify-center z-10 pointer-events-none">
          <div className="text-xl font-medium text-blue-600 p-4 border-2 border-dashed border-blue-400 rounded-lg bg-white">
            Drop images here
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col space-y-1.5 p-6">
            <Label
              labelValue="Product Images"
              htmlFor="images"
              className="text-2xl font-semibold leading-none tracking-tight"
              required={!images?.length}
            />
          </div>

          <div className="p-6 pt-0">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Display
                  images={images}
                  handleImageDelete={handleImageDelete}
                />
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
        </>
      )}
    </div>
  );
};

export default ImageUploader;
