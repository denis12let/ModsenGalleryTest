import { FC, useState } from 'react';

import { Icons } from '@assets/icons';
import { Option } from 'src/types';

import {
  SelectContainer,
  SelectedValue,
  OptionsList,
  OptionItem,
} from './Select.style';

interface SelectProps {
  options: Option[];
  value: string;
  setValue: (value: string) => void;
}

export const Select: FC<SelectProps> = ({ options, setValue }) => {
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
