import React,{useState} from 'react';
import './App.css';
import Header from './HeaderNav';


import AddContact from './AddContact';

import ContactCard from './ContactCard';

import Contactlist from './Contactlist';

const App =()=> {

const contact=[


  {
    id:1,
    "name":'Aman',
    "email":'amanzhx1234@gmail.com'
  }
]


const [contacts,setContact]=useState([]);

const addContacthandler=(contact)=>{

  console.log(contact)
}

  return (
    


    <div className='ui container'> 
      
      
<Header/>

<AddContact addContactHandler={addContacthandler}/>


<Contactlist Contact={contact}/>


       </div>

  
  );
}

export default App;
