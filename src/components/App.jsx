import React from "react";
import {PhonebookApp, HeaderApp, HeaderSectionContacts} from './Apps.styled'
import { ContactForm } from "./PhoneContactForm/ContactForm";
import {Contacts} from './Contacts/Contacts';
import { Filter } from "./UserFilter/Filter";
export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

   formHandleSubmit=data=>{
this.setState((prevState)=>({contacts:[...prevState.contacts,data]}))
}

onUserFilter=(e)=>{
this.setState({filter:e.currentTarget.value})
}

getContactsFiltered=()=>{
  const normalizedFilterName=this.state.filter.toLowerCase()
  return this.state.contacts.filter(el=> el.name.toLowerCase().includes(normalizedFilterName))
}
  render(){
    const contactsList = this.getContactsFiltered();
    return (<PhonebookApp>
      <HeaderApp>Phonebook</HeaderApp>
      <ContactForm 
      onSubmit={this.formHandleSubmit}
      />
      <HeaderSectionContacts>Contacts</HeaderSectionContacts>
      <Filter 
      title='Find contacts by name'
      filterName={this.state.filter}
      onUserFilter={this.onUserFilter}
      />
      <Contacts contactsList={contactsList}/>
    </PhonebookApp>)
  }
}
