import * as Select from '@radix-ui/react-select';
import { IDropdown } from '../../../types/form.type';

export const Dropdown = (props: IDropdown) => {
  const { placeholder, className, value, options, onChange } = props;
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className={`h-10 w-full rounded-md border border-zinc-300 px-3 py-2 text-left text-sm focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer ${className}`}
      >
        <Select.Value
          placeholder={placeholder}
          className="placeholder:text-muted-foreground"
        />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="z-50 mt-1 w-full rounded-md border border-zinc-300 bg-white text-sm shadow-lg "
          position="popper"
          side="bottom"
          style={{ width: 'var(--radix-select-trigger-width)' }}
        >
          <Select.Viewport className="py-1">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="cursor-pointer select-none rounded-sm py-1.5 px-3 text-sm focus:bg-gray-100 focus:outline-none"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default Dropdown;
