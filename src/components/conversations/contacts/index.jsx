// import React from 'react';
import { contacts } from '../../../data/contacts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUser
} from '@fortawesome/free-solid-svg-icons';

function Contacts(props){
    
    let contacts = props.contacts;
    let contactCards = [];

    contacts.forEach(contact => {

        let contactCard = 
            <div className='conversation-sidebar_contacts_card'>
                <FontAwesomeIcon 
                    className='conversation-sidebar_contacts_card_icon' 
                    icon={faUser} 
                />
                <p className='conversation-sidebar_contacts_card_text'>
                    {contact.firstName} {contact.lastName}
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