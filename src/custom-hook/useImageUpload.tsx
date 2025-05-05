import { useState } from 'react';
import { IMAGE_UPLOAD_LIMIT } from '../constant/form-constant';
import { INotification, IUseImageUploadReturn } from '../types/form.type';

const useImageUpload = (
  setNotification: React.Dispatch<
    React.SetStateAction<INotification | undefined>
  >,
): IUseImageUploadReturn => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (files: File[]) => {
    const updatedImages = [...images];
    if (updatedImages.length < IMAGE_UPLOAD_LIMIT) {
      for (let i = 0; i < files.length; i++) {
        if (updatedImages.length < IMAGE_UPLOAD_LIMIT) {
          updatedImages.push(files[i]);
        }
      }
      setImages(updatedImages);
    } else {
      setNotification({
        type: 'error',
        message: `You can only upload ${IMAGE_UPLOAD_LIMIT} images.`,
      });
    }
  };

  const handleImageDelete = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return { images, handleImageUpload, handleImageDelete, setImages };
};

export default useImageUpload;
