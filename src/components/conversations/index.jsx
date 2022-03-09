import React from 'react';

import Contacts from './contacts/index';
import { contacts } from '../../data/contacts'

import { 
    faUser,
    faVideo,
    faSearch,
    faListDots
        } from '@fortawesome/free-solid-svg-icons'

class ConversationsSidebar extends React.Component{

    render(){
        return(
            <div className='conversation-sidebar'>
                <hr className='conversation-sidebar_hr-divider' />
                <div className='conversation-sidebar_contacts'>
                    <p className='conversation-sidebar_contacts_text'>
                        Contacts
                    </p>
                    <div className='conversation-sidebar_contacts_cards'>
                        <Contacts contacts={contacts} />
                    </div>
                </div>
                <hr className='conversation-sidebar_hr-divider' />
                <div className='conversation-sidebar_group-conversations'>
                    <p className='conversation-sidebar_group-conversations_text'>
                        {/* Conversation */}
                    </p>
                    <div className='conversation-sidebar_group-conversations_cards'>
                        {/* Group Conversation Cards */}
                    </div>
                </div>
            </div>
        )
    }
}

export default ConversationsSidebar;

{/* <FontAwesomeIcon 
    className='home-fcus_create-room_icon' 
    icon={faVideo} size="2x" 
/> */}