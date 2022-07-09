import React from "react";
import {PhonebookApp, HeaderApp} from './App.styled'

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
