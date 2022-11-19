import styled from '@emotion/styled';

export const FilterLabelStyles = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const FilterInputStyles = styled.input`
  margin-top: 10px;
  outline: none;
  padding-left: 10px;
  border-radius: 5px;
  border: 2px solid #e9bb03;
  height: 30px;
  background-color: #eef389;
  font-size: 18px;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px grey;
  }
`;
