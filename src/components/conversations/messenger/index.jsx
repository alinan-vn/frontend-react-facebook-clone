import React from 'react';

import { contacts } from '../../../data/contacts'

import { catFactsGetCall } from '../../../apiCalls/catFacts/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUser
        } from '@fortawesome/free-solid-svg-icons'

class Messenger extends React.Component {
    constructor(){
        super()
        this.state = {
            // user: {},
            // setMessages: []
        }
    }

    getFact = () => {
        return fetch("https://catfact.ninja/fact")
        .then(r => r.json())
        .then(data => {
            return `<p>${data.catFact}</p>`
        })
    }

    addRandomMessages = () => {

        let messagesArray = []

        // random int from 8 to 14
        let randomAmount = 8 + Math.floor(Math.random() * 7)

        for(randomAmount; randomAmount > 0; randomAmount--){
            if((randomAmount%2) == 0){
                let message = <div className='messenger-fcus_messages_message-received'>
                    <FontAwesomeIcon 
                        className='messenger-fcus_messages_message-received_icon' 
                        icon={faUser} 
                        // size="3x" 
                    />
                    <p 
                        className='messenger-fcus_messages_message-received_text'
                    >
                        Lorem ipsum dolor sit amet.
                    </p>
                </div> 
                messagesArray.push(message)
            } else{
                let message = <div className='messenger-fcus_messages_message-sent'>
                    <p 
                        className='messenger-fcus_messages_message-sent_text'
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div> 
                messagesArray.push(message)
            }
        }

        this.setState({
            ...this.state,
            setMessages: messagesArray
        })
    }

    setUserToState = () => {
        let splitWebAddress = window.location.href.split('/')
        const lengthOfAddressArrayMinusOne = splitWebAddress.length - 1;
        const userId = splitWebAddress[lengthOfAddressArrayMinusOne];
    
        contacts.forEach(contact => {
            if(contact.id == userId){
                this.setState({
                    ...this.state,
                    user: contact
                })
            }
        })        
    }

    componentDidMount(){
        this.setUserToState();
        this.addRandomMessages();
    }

    render(){
        return(
            <div className='messenger-fcus'>

                <div className='messenger-fcus_top-bar'>
                    <FontAwesomeIcon 
                        className='messenger-fcus_top-bar_icon' 
                        icon={faUser} size="3x" 
                    />
                    <p 
                        className='messenger-fcus_top-bar_text'
                    >
                        {this.state.user ? this.state.user.firstName + ' ' + this.state.user.lastName : "loading"}
                    </p>
                </div>

                <div className='messenger-fcus_messages'>
                    { this.state.setMessages ? this.state.setMessages : "loading"}
                </div>

                <div className='messenger-fcus_input-div'>
                    <input 
                        className='messenger-fcus_input-div_input-box'
                        placeholder='Aa'
                    />
                    <button className='messenger-fcus_input-div_button'>Send!</button>
                </div>

            </div>
        )
    }
}

export default Messenger