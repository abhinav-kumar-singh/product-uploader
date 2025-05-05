import { IDropdown } from '../../../types/form.type';
import { useEffect, useRef, useState } from 'react';

export const Dropdown = (props: IDropdown) => {
  const { placeholder, className, value, options, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        ref={triggerRef}
        className={`h-10 w-full rounded-md border border-zinc-300 px-3 py-2 text-left text-sm focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          <span>{selectedOption.label}</span>
        ) : (
          <span className="text-muted-foreground">{placeholder}</span>
        )}
      </button>

      {isOpen && (
        <div
          className="z-50 mt-1 absolute w-full rounded-md border border-zinc-300 bg-white text-sm shadow-lg py-1"
          style={{ width: triggerWidth }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="cursor-pointer select-none rounded-sm py-1.5 px-3 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
