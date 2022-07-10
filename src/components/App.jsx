import React from "react";
import {PhonebookApp, HeaderApp, HeaderSectionContacts} from './Apps.styled'
import { ContactForm } from "./PhoneContactForm/ContactForm";

export class App extends React.Component {
  state = {
    contacts: [],
  }
  
  formHandleSubmit=data=>{
this.setState({contacts:[data]})
}

  render(){
    console.log(this.state)
    return (<PhonebookApp>
      <HeaderApp>Phonebook</HeaderApp>
      <ContactForm 
      onSubmit={this.formHandleSubmit}/>
      <HeaderSectionContacts>Contacts</HeaderSectionContacts>
    </PhonebookApp>)
  }
}
