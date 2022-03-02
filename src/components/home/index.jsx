import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCirclePlus,
    faUser,
    faVideo,
    faPhotoFilm,
    faFaceSmileBeam
        } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {

    render(){
        return(
            <div className='home-fcus'>
                <div className='home-fcus_create-story'>
                    <FontAwesomeIcon 
                        className='home-fcus_create-story_icon' 
                        icon={faCirclePlus} size="2x" 
                    />
                    <div className='home-fcus_create-story_text'>
                        <p className='home-fcus_create-story_text-top'>
                            Create story
                        </p>
                        <p className='home-fcus_create-story_text-bottom'>
                            Share a photo or write something.
                        </p>
                    </div>    
                </div>

                <div className='home-fcus_whats-on-your-mind'>
                    <div className='home-fcus_whats-on-your-mind_top'>
                        <FontAwesomeIcon 
                            className='home-fcus_whats-on-your-mind_top_icon' 
                            icon={faUser} size="2x" 
                        />
                        <input 
                            className='home-fcus_whats-on-your-mind_top_input'
                            placeholder="What's on your mind, USER?" 
                        />
                    </div>

                    <hr className='home-fcus_whats-on-your-mind_mid-hr' />

                    {/* bootstrap css magic (to divide into three even horizontal containers) divs classes have container-liquid, row, and col */}
                    <div className='container-liquid home-fcus_whats-on-your-mind_bottom'>
                        <div className='row'>  
                            <p className='col home-fcus_whats-on-your-mind_bottom'>
                                <FontAwesomeIcon 
                                    className='home-fcus_whats-on-your-mind_bottom_icon' 
                                    icon={faVideo} size="2x" 
                                />
                                <p>Live Video</p>
                            </p>
                            <p className='col home-fcus_whats-on-your-mind_bottom'>
                                <FontAwesomeIcon 
                                    className='home-fcus_whats-on-your-mind_bottom_icon' 
                                    icon={faPhotoFilm} size="2x" 
                                />
                                <p>Photo/Video</p>
                            </p>
                            <p className='col home-fcus_whats-on-your-mind_bottom'>
                                <FontAwesomeIcon 
                                    className='home-fcus_whats-on-your-mind_bottom_icon' 
                                    icon={faFaceSmileBeam} size="2x" 
                                />
                                <p>Feeling/activity</p>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='home-fcus_create-room'>
                    <button className='home-fcus_create-room_btn'>
                        <FontAwesomeIcon 
                            className='home-fcus_create-room_icon' 
                            icon={faVideo} size="2x" 
                        />
                        <p className='home-fcus_create-room_text'>
                            Create Room
                        </p>
                    </button>
                </div>

                <div className='home-fcus_people-you-may-know'>
                    <p className='home-fcus_people-you-may-know_text'>
                        People you may know
                    </p>
                    <div className='home-fcus_people-you-may-know_cards'>
                        Cards (will be implemented later)
                    </div>
                </div>

                <div className='home-fcus_feed'>
                    <p className='home-fcus_feed_title'>
                        Feed
                    </p>
                    <div className='home-fcus_feed_cards'>
                        Cards/Feed (will be implemented later)
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;