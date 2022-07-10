import PropTypes from 'prop-types';
import { ContactsList,ContactListItem, DeleteItemButton, Span } from './Contacts.styled';

export const Contacts=({contactsList,deleteItem})=>{
    return (<ContactsList>
        {contactsList.map((contact,i)=>{
            return (<ContactListItem key={i}><Span>{contact.name}: {contact.number}</Span>
            <DeleteItemButton type='button' onClick={deleteItem} id={contact.name}>Delete</DeleteItemButton >
            </ContactListItem>)})}
    </ContactsList>)
}

Contacts.propTypes={contactsList:PropTypes.array,}