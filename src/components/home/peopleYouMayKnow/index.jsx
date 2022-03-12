import React from 'react';

import { contacts } from '../../../data/contacts';
import FacebookProfileImg from  '../../../data/images/facebook-profile.jpeg'



class PeopleYouMayKnow extends React.Component{


    mapContactsCards = () => {
        console.log('mapping contacts', contacts)

        let contactCards = []

        for(let i = 2; i > 0; i--){
            let con = contacts[i]
            const fullName = con.firstName + ' ' + con.lastName

            let divContact = (
                <div 
                    key={con.id} 
                    className='people-you-may-know_card'
                >
                    <img   
                        src={FacebookProfileImg} 
                        className='people-you-may-know_card_image' 
                    />
                    <p className='people-you-may-know_card_text'>{fullName}</p>
                    <button className='people-you-may-know_card_button'>Add Friend</button>
                </div>
            )
            contactCards.push(divContact)
        }
        return contactCards
    }

    render(){
        return(
            <div className='people-you-may-know'>
                { this.mapContactsCards() }
            </div>
        )
    }
}

export default PeopleYouMayKnow;