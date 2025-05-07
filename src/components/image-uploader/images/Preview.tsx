import React, { JSX } from 'react';
import { IPreview } from '../../../types/form.type';
import { Minimize2 } from 'lucide-react';

const Preview = ({ image, onClose }: IPreview): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-transparent">
      <div className="relative max-w-3xl w-full p-4">
        <img
          src={URL.createObjectURL(image)}
          alt={`Preview of ${image.name}`}
          className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg bg-white"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-md hover:bg-blue-300 focus:ring-blue-500"
        >
          <Minimize2 />
        </button>
      </div>
    </div>
  );
};

export default Preview;
