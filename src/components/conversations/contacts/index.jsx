// import React from 'react';
import { contacts } from '../../../data/contacts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUser
} from '@fortawesome/free-solid-svg-icons';

function goToMessenger(id){
    window.location.href = `http://localhost:3000/messenger/${id}`
}

function Contacts(props){
    
    let contacts = props.contacts;
    let contactCards = [];

    contacts.forEach(contact => {
        let firstName = contact.firstName
        let lastName = contact.lastName

        let contactCard = 
            <div 
                onClick={() => goToMessenger(contact.id)} 
                className='conversation-sidebar_contacts_card'>
                <FontAwesomeIcon 
                    className='conversation-sidebar_contacts_card_icon' 
                    icon={faUser} 
                />
                <p className='conversation-sidebar_contacts_card_text'>
                    {firstName} {lastName}
                </p>
            </div>
        
        contactCards.push(contactCard);
    });

    return(
        <div>
            {contactCards}
        </div>
    )
}

export default Contacts