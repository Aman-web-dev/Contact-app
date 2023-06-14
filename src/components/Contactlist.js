import React from "react";

import ContactCard from "./ContactCard";

const Contactlist = (props) => {

    console.log(props);

    const renderContactList = props.Contact.map((myContact) => {

        return (
               
            <ContactCard nuts={myContact}/>
   
        )
    })





    return (

        <div className="ui called list">
            {renderContactList}
        </div>



    )
}




export default Contactlist;