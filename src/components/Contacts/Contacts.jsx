import PropTypes from 'prop-types';
import { ContactsList,ContactListItem } from './Contacts.styled';

export const Contacts=({contactsList})=>{
    return (<ContactsList>
        {contactsList.map((contact,i)=>{
            return (<ContactListItem key={i}>{contact.name}: {contact.number}
            </ContactListItem>)})}
    </ContactsList>)
}

Contacts.propTypes={contactsList:PropTypes.array,}