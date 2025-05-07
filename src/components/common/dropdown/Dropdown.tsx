import { ChevronsUpDown } from 'lucide-react';
import { IDropdown } from '../../../types/form.type';
import { useEffect, useRef, useState } from 'react';
import Input from '../input';

export const Dropdown = (props: IDropdown) => {
  const { placeholder, className, value, options, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [search,setSearch] = useState("");
  const [filteredOption,setFlteredOption] = useState(options);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
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

  useEffect(()=>{
    if(search){
      const getSearchedOption = filteredOption.filter((option)=>option.label.toLowerCase().includes(search.toLowerCase()));
      setFlteredOption(getSearchedOption);
    }else{
      setFlteredOption(options)
    }
  },[search])

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
          <div className='flex justify-between items-center w-full'><div>{selectedOption.label} </div><ChevronsUpDown className="h-5 w-5"/></div>
        ) : (
          <div className="text-muted-foreground flex justify-between items-center w-full"><div>{placeholder}</div><ChevronsUpDown className="h-5 w-5"/></div>
        )}
      </button>

      {isOpen && (
        <div
          className="z-50 mt-1 absolute w-full rounded-md border border-zinc-300 bg-white text-sm shadow-lg py-1 w-full"
        >
          <Input type='text' name='search'  placeholder='Search Category' value={search} onChange={(e)=>setSearch(e.target.value)}
          className='mx-0 my-0 px-3 w-[calc(100%-1.5rem)]'
          />
          {filteredOption.map((option) => (
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
