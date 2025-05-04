import React, { JSX } from 'react';

import { IContent } from '../../../types/form.type';
import { cn } from '../../../utils/utils';
import Button from '../../common/button';
// import Button from '../../common/button';

const Content = (props: IContent): JSX.Element => {
  const { images, triggerFileInput } = props;
  return (
    <div className="mt-2">
      <p className="text-sm text-gray-500 font-medium">
        Upload up to 3 product images. Supported formats: JPG, PNG, GIF
      </p>
      <Button
        type="button"
        onClick={triggerFileInput}
        disabled={images.length >= 3}
        variant="outline"
        className={cn(
          'mt-2 h-10 w-full rounded-md border border-zinc-300 px-3 py-2 font-semibold placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-sm cursor-pointer hover:bg-blue-100 hover:text-teal-900',
          images.length >= 3
            ? 'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:hover:bg-gray-300 disabled:hover:text-gray-600 disabled:opacity-50'
            : '',
        )}
      >
        <>
          <span className="mr-2 h-4 w-4">+</span>
          Upload Images
        </>
      </Button>
    </div>
  );
};

export default Content;
