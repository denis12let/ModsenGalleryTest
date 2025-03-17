import { FC, useState } from 'react';
import {
  SelectContainer,
  SelectedValue,
  OptionsList,
  OptionItem,
} from './Select.style';
import { Icons } from '@assets/icons';

export interface Option {
  id: number;
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  setValue: (value: string) => void;
}

export const Select: FC<SelectProps> = ({ options, value, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  const handleSelect = (option: Option) => {
    setValue(option.value);
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectedValue onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <Icons.Arrow color="" />
      </SelectedValue>
      {isOpen && (
        <OptionsList>
          {options.map((option) => (
            <OptionItem key={option.id} onClick={() => handleSelect(option)}>
              {option.label}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectContainer>
  );
};
