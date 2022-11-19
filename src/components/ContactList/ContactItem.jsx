import PropTypes from 'prop-types';
import { ButtonDelete, ListContactsItem } from './ContactList.styled';

export const ContactItem = ({ onDeleteContact, id, name, number }) => {
  return (
    <ListContactsItem key={id}>
      {name.toUpperCase()} : {number}
      <ButtonDelete
        type="button"
        onClick={() => onDeleteContact(id)}
        dataid={id}
      >
        Delete
      </ButtonDelete>
    </ListContactsItem>
  );
};

ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
