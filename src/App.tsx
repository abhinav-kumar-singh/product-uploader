import React, { useState } from 'react';
import ImageUploader from './components/image-uploader/ImageUploader';
import useImageUpload from './custom-hook/useImageUpload';
import Button from './components/common/button';
import ProductForm from './components/product-form/ProductForm';
import useProductInfo from './custom-hook/useProductInfo';
import { cn } from './utils/utils';
import Notification from './components/common/notification/Notification';
import { handleSubmit } from './app-utility';
import { INotification } from './types/form.type';
import { Loader } from 'lucide-react';

function App() {
  const [notification, setNotification] = useState<INotification>();

  const { images, handleImageUpload, handleImageDelete, setImages } =
    useImageUpload(setNotification);
  const {
    formState,
    setFormState,
    productData,
    setProductData,
    handleProductDataChange,
  } = useProductInfo();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Product Uploader
        </h1>
        <form
          onSubmit={(e) =>{
            handleSubmit({
              e,
              images,
              setImages,
              productData,
              setProductData,
              setFormState,
              setNotification,
            })
          }
          }
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ProductForm
                data={productData}
                onChange={handleProductDataChange}
              />
            </div>
            <div className="flex-1">
              <ImageUploader
                images={images}
                handleImageUpload={handleImageUpload}
                handleImageDelete={handleImageDelete}
                setNotification={setNotification}
              />
            </div>
          </div>
          <div className="mt-8">
            <Button
              variant="default"
              type="submit"
              className={cn(
                'mt-2 h-10 w-full rounded-md border border-zinc-300 px-3 py-2 font-semibold placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm bg-white cursor-pointer hover:bg-blue-100 hover:text-teal-900',
                formState.isSubmitting || !formState.isValid
                  ? 'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:hover:bg-gray-300 disabled:hover:text-gray-600 disabled:opacity-50 flex justify-center items-center gap-2'
                  : '',
              )}
              disabled={formState.isSubmitting || !formState.isValid}
            >
              {formState.isSubmitting ? (
                <>
                  Saving Product <Loader />
                </>
              ) : (
                'Save Product'
              )}
            </Button>
          </div>
          {notification ? (
            <Notification
              message={notification.message}
              duration={notification.duration}
              type={notification.type}
              onClose={() => setNotification(undefined)}
            />
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default App;
