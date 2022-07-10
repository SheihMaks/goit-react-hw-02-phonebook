import PropTypes from 'prop-types';
import { ContactsList } from './Contacts.styled';

export const contacts=({options})=>{
    return (<ContactsList>
        {options.map(contact=>
            return (<ContactListItem>{contact.name}</ContactListItem>))}
    </ContactsList>)
}