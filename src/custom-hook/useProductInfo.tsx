import { useState } from 'react';
import { IFormState, IProductData } from '../types/form.type';
import { isValidInput } from '../utils/form-validation';

const useProductInfo = () => {
  const [productData, setProductData] = useState<IProductData>({
    title: '',
    category: '',
    tags: '',
  });
  const [formState, setFormState] = useState<IFormState>({
    isSubmitting: false,
    isValid: false,
  });

  const handleProductDataChange = (data: Partial<IProductData>) => {
    console.log('🚀 ~ handleProductDataChange ~ data:', Object.values(data)[0]);
    const updatedData = { ...productData, ...data };
    setProductData(updatedData);

    const isValid = isValidInput(Object.values(data)[0]) ? true : false;

    setFormState((prev) => ({ ...prev, isValid: isValid }));
  };

  return {
    formState,
    setFormState,
    productData,
    setProductData,
    handleProductDataChange,
  };
};

export default useProductInfo;
