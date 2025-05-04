import { IHandleSubmit } from './types/form.type';
import { isValidInput } from './utils/form-validation';

export const handleSubmit = async (props: IHandleSubmit) => {
  const {
    e,
    images,
    setImages,
    productData,
    setProductData,
    setFormState,
    setNotification,
  } = props;
  e.preventDefault();

  if (!isValidInput(productData.title)) {
    setNotification({
      message: 'Please enter a valid title',
      type: 'error',
    });
    return;
  } else if (!isValidInput(productData.category)) {
    setNotification({
      message: 'Please select a valid category',
      type: 'error',
    });
    return;
  } else if (!images.length) {
    setNotification({
      message: 'Please upload at least one image',
      type: 'error',
    });
    return;
  } else if (productData.tags && !isValidInput(productData.tags)) {
    setNotification({
      message: 'Please enter a valid tags',
      type: 'error',
    });
    return;
  }

  setFormState((prev) => ({ ...prev, isSubmitting: true }));

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log({
    product: productData,
    images: images.map((img) => ({
      name: img.name,
      type: img.type,
      size: img.size,
    })),
  });

  setNotification({
    message: 'Product uploaded successfully!',
    type: 'success',
    duration: 1000,
  });

  setFormState({ isSubmitting: false, isValid: false });
  setProductData({ title: '', category: '', tags: '' });
  setImages([]);
};
