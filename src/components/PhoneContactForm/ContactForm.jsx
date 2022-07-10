import React from "react"
import { nanoid } from "nanoid";
import { ContactFormContainer,Button,Form,LabelOfInputName,Input, LabelOfInputPhone } from "./ContactForm.styled"

export class ContactForm extends React.Component{
  state={
    name: '',
    number: '',
  }
  inputNameId=nanoid();
  inputNumberId=nanoid();
  onHandleInput=(e)=>{
    this.setState({[e.currentTarget.name] : e.currentTarget.value})
  }
  
  onHandleSubmit=(e)=>{
    e.preventDefault()
  this.props.onSubmit(this.state)
  this.reset()
  }

  reset=()=>{
    this.setState({
    name:'',
    number:''})}

    render(){return(<ContactFormContainer><Form onSubmit={this.onHandleSubmit}><LabelOfInputName htmlFor={this.inputNameId}>Name</LabelOfInputName>
    <Input
   type="text"
   name="name"
   value={this.state.name}
   onChange={this.onHandleInput}
   id={this.inputNameId}
   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
   required
/>
<LabelOfInputPhone htmlFor={this.inputNumberId}>Number</LabelOfInputPhone>
<Input
  type="tel"
  name="number"
  value={this.state.number}
  onChange={this.onHandleInput}
  id={this.inputNumberId}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<Button type='submit'>Add contact</Button></Form></ContactFormContainer>)
    
}}
