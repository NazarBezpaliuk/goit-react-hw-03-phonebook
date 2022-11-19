import styled from '@emotion/styled';

export const ListContacts = styled.ul`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #7ec5f8;
  border-radius: 5px;
  border: 2px solid #e9bb03;
`;

export const ListContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 20px;
  font-style: italic;
`;

export const ButtonDelete = styled.button`
  font-size: 18px;
  width: 100px;
  background-color: #eef389;
  color: black;
  border: 2px solid #e9bb03;
  transition: all 250ms linear;
  :hover,
  :focus {
    background-color: red;
    transform: scale(1.12);
    box-shadow: 0 0 10px 0 red inset, 0 0 10px 4px grey;
    border-color: black;
  }
`;
