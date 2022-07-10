import { LabelFilter } from "./Filter.styled"
import { Input } from "../PhoneContactForm/ContactForm.styled"

export const Filter=({title,onUserFilter,filterName})=>{
    return (<><LabelFilter>{title}</LabelFilter>
    <Input
    type='text' 
    name='filter' 
    onChange={onUserFilter} 
    value={filterName}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required/></>)}