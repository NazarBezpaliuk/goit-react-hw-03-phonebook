import styled from '@emotion/styled';

export const FormStyles = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #7ec5f8;
  border-radius: 5px;
  border: 2px solid #e9bb03;
`;

export const LabelStyles = styled.label`
  display: flex;
  flex-direction: column;
`;

export const InputStyles = styled.input`
  padding-left: 10px;
  margin-top: 5px;
  font-size: 16px;
  height: 20px;
  background-color: #eef389;
  border: 2px solid #e9bb03;
  border-radius: 5px;
  outline: none;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px grey;
  }
`;

export const ButtonAdd = styled.button`
  font-size: 18px;
  width: auto;
  height: 30px;
  transition: all 250ms linear;
  background-color: #eef389;
  border-radius: 5px;
  border: 2px solid #e9bb03;
  &:hover {
    background-color: red;
    transform: scale(1.025);
    box-shadow: 0 0 10px 0 red inset, 0 0 10px 4px grey;
    border: 2px solid black;
  }
`;
