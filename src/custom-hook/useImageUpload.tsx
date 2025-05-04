import { useState } from 'react';
import { IMAGE_UPLOAD_LIMIT } from '../constant/form-constant';
import { IUseImageUploadReturn } from '../types/form.type';

const useImageUpload = (): IUseImageUploadReturn => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (files: File[]) => {
    const updatedImages = [...images];
    for (let i = 0; i < files.length; i++) {
      if (updatedImages.length < IMAGE_UPLOAD_LIMIT) {
        updatedImages.push(files[i]);
      }
    }
    setImages(updatedImages);
  };

  const handleImageDelete = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return { images, handleImageUpload, handleImageDelete, setImages };
};

export default useImageUpload;
