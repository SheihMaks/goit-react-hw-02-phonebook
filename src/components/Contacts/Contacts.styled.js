import styled from "styled-components";

export const ContactsList=styled.ol`
display:flex;
flex-direction:column;
padding-right:20px;
list-style: inside;
width:30%;
`

export const ContactListItem=styled.li`
display:flex;
justify-content:space-between;
width:100%;
font-weight:600;
margin-bottom:10px;
`

export const Span=styled.span`
display:inline-block;
`

export const DeleteItemButton =styled.button`
display:inline-block;
padding:auto;
margin-right:40px;`