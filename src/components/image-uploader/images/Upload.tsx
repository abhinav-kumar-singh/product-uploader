import React, { JSX } from 'react';
import { IUpload } from '../../../types/form.type';
import { cn } from '../../../utils/utils';
import { ImagePlus } from 'lucide-react';

const Upload = (props: IUpload): JSX.Element => {
  const { images, triggerFileInput } = props;
  return (
    <>
      {images.length < 3
        ? Array.from({ length: 3 - images.length }).map((_, index) => (
            <button
              key={`empty-${index}`}
              onClick={triggerFileInput}
              type="button"
              className={cn(
                'border-2 border-dashed border-gray-300 rounded-md',
                'flex flex-col items-center justify-center p-6 aspect-square',
                'hover:border-gray-500 hover:bg-gray-100 transition-colors cursor-pointer',
              )}
            >
              <div className="h-8 w-8 text-gray-400 mb-2"><ImagePlus /></div>
              <span className="text-sm text-gray-400">Add Image</span>
            </button>
          ))
        : null}
    </>
  );
};

export default Upload;
