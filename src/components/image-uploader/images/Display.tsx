import React, { JSX, useState } from 'react';
import { IDisplay } from '../../../types/form.type';
import Button from '../../common/button';
import Preview from './Preview';
import { X } from 'lucide-react';

const Display = (props: IDisplay): JSX.Element => {
  const { images, handleImageDelete } = props;
  const [imageClicked, setImageClicked] = useState<File | null>(null);

  const handleDragEvent = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      {images.map((image, index) => (
        <div
          key={`${image.name}-${image.lastModified}-${index}`}
          className="relative border-2 rounded-md border-gray-300 overflow-hidden aspect-square group cursor-pointer"
          onClick={() => setImageClicked(image)}
          onDragEnter={handleDragEvent}
          onDragLeave={handleDragEvent}
          onDragOver={handleDragEvent}
        >
          <img
            src={URL.createObjectURL(image)}
            alt={`Product image ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <Button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleImageDelete(index);
            }}
            variant="outline"
            className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity border-none rounded-full bg-blue-200 shadow-sm hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center cursor-pointer"
          >
            <div className="h-4 w-4 flex items-center justify-center">
              <X />
            </div>
          </Button>
          <div className="bg-black bg-opacity-40 text-white text-xs absolute bottom-0 w-full py-1 px-2 truncate">
            {image.name}
          </div>
        </div>
      ))}

      {imageClicked && (
        <Preview image={imageClicked} onClose={() => setImageClicked(null)} />
      )}
    </>
  );
};

export default Display;
