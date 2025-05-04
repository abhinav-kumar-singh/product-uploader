import React, { JSX, useState } from 'react';
import { IDisplay } from '../../../types/form.type';
// import Button from '../../common/button';
import Preview from './Preview';
import Button from '../../common/button';

const Display = (props: IDisplay): JSX.Element => {
  const { images, onDelete } = props;
  const [imageClicked, setImageClicked] = useState<File | null>(null);
  return (
    <>
      {images.map((image, index) => (
        <div
          key={image.lastModified}
          className="relative border-2 rounded-md 
                border-gray-300 overflow-hidden aspect-square group cursor-pointer"
          onClick={() => {
            setImageClicked(image);
          }}
        >
          <img
            src={URL.createObjectURL(image)}
            alt={`Product image ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <Button
            type="button"
            onClick={() => onDelete(index)}
            variant="outline"
            className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity border-none rounded-full bg-blue-200 shadow-sm hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center cursor-pointer"
          >
            <div className="h-4 w-4 flex items-center justify-center">X</div>
          </Button>
          <div className="bg-black bg-opacity-40 text-white text-xs absolute bottom-0 w-full py-1 px-2 truncate">
            {image.name}
          </div>
        </div>
      ))}

      {imageClicked ? (
        <Preview image={imageClicked} onClose={() => setImageClicked(null)} />
      ) : null}
    </>
  );
};

export default Display;
