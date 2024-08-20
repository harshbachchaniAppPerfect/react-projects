import "./App.css";
import Card from "./components/card.js";
import Form from "./components/form.js";
import MyForm from "./components/newform.js";
import ShapeEditor from "./components/shape.js";

function App() {
  return (
    <>
      <br />
      <br />
      <br />
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <br />
      <br />
      <br />
      <Card />
      <br />
      <br />
      <br />
      <Form />
      <br />
      <br />
      <br />
      <ShapeEditor />
      <br />
      <br />
      <br />
      <MyForm />
    </>
  );
}

export default App;

/*
import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function Messenger() {

  const [messages,setMessages]=useState(['','','']);
  const [to, setTo] = useState(contacts[0]);
  function addMessage(msg,contact){
    const newarray=[...messages];
    newarray[contact.id]=msg;
    setMessages(newarray)
  }
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.id} contact={to} onAdd={addMessage} message={messages[to.id]} />
    </div>
  )
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

import { useState } from 'react';

export default function Chat({ contact,message,onAdd }) {
  const [text, setText] = useState(message);
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button onClick={()=>onAdd(text,contact)}>Send to {contact.email}</button>
    </section>
  );
}


*/
