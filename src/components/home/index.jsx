import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCirclePlus
        } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {

    render(){
        return(
            <div className='home-fcus'>
                <div className='home-fcus_create-story'>
                    <FontAwesomeIcon className='home-fcus_create-story_icon' icon={faCirclePlus} size="2x" />
                    <div className='home-fcus_create-story_text'>
                        <p className='home-fcus_create-story_text-top'>Create story</p>
                        <p className='home-fcus_create-story_text-bottom'>Share a photo or write something.</p>
                    </div>    
                </div>
                <div>
                    What's on your mind
                </div>
                <div>
                    Create Room
                </div>
                <div>
                    People you may know
                </div>
                <div>
                    Post Feed
                </div>
            </div>
        )
    }
}

export default Home;