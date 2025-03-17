import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  width: 200px;

  color: rgb(196, 196, 196);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: capitalize;
`;

export const SelectedValue = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 16px;
  background: rgb(255, 255, 255);
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-color: #fff;
  list-style: none;
  z-index: 1000;
  max-height: 150px;
  overflow-y: auto;
`;

export const OptionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  border: 1px solid rgb(196, 196, 196);
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Arrow = styled.span`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.2s;
`;
