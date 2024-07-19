import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './cardExpl'
import contacts from './contacts'

function contactList(contact){
  return (
    <Card 
      key={contact.id}
      id={contact.id}
      name={contact.name}
      logo={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  )
}
 
function App() {
  console.log(contactList);
  return (
    contacts.map(contactList)
  )
}


export default App
