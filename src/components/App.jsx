import React from "react";
import {PhonebookApp, HeaderApp} from './Apps.styled'

export class App extends React.Component {
  state = {
    contacts: [],
    name: ''
  }
  render(){
    return (<PhonebookApp>
      <HeaderApp>Phonebook</HeaderApp>
    </PhonebookApp>)
  }
}
