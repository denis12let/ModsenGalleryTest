import { FC, useState } from 'react';
import {
  SelectContainer,
  SelectedValue,
  Arrow,
  OptionsList,
  OptionItem,
} from './Select.style';
import { Icons } from '@assets/icons';

interface SelectProps {
  options: string[];
  onSelect: (value: string) => void;
}

const Select: FC<SelectProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
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
            <OptionItem key={option} onClick={() => handleSelect(option)}>
              {option}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectContainer>
  );
};

export default Select;
