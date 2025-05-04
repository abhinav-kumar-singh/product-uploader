import React, { JSX } from 'react';

import { useEffect, useState } from 'react';
import { INotification } from '../../../types/form.type';

const Notification = (props: INotification): JSX.Element | null => {
  const { message, type, duration = 3000, onClose } = props;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const baseStyle =
    'fixed bottom-4 right-4 max-w-sm w-full px-4 py-3 rounded-md shadow-lg flex items-start justify-between transition-all';
  const successStyle = 'bg-green-100 border border-green-300 text-green-800';
  const errorStyle = 'bg-red-100 border border-red-300 text-red-800';

  const style = `${baseStyle} ${type === 'error' ? errorStyle : successStyle}`;

  return (
    <div className={style}>
      <div className="flex-1 pr-4 text-sm font-medium">{message}</div>
      <button
        className="ml-2 text-xl font-bold leading-none focus:outline-none"
        onClick={() => {
          setVisible(false);
          if (onClose) onClose();
        }}
      >
        ×
      </button>
    </div>
  );
};

export default Notification;
