import React from 'react';

class Navigation extends React.Component {

    render(){
        return(
            <div>
                <div className='nav'>
                    <div className='nav_left'>
                        <a className='nav_logo nav_left-item'>F</a>
                        <input 
                            className='nav_left-item nav_left-search' 
                            type="text" 
                            placeholder='Search Facebook'
                        />
                    </div>

                    <div className='nav_middle'>
                        <a className='nav_middle-item'>H</a>   {/* Push, Home */}
                        <a className='nav_middle-item'>C</a>   {/* Connect */}
                        <a className='nav_middle-item'>V</a>   {/* View */}
                        <a className='nav_middle-item'>M</a>   {/* Marketplace */}
                        <a className='nav_middle-item'>G</a>   {/* Gaming */}
                    </div>

                    <div className='nav_right'>
                        <a className='nav_right-item'>Me</a>              {/* Push, Profile */}
                        <a className='nav_right-item'>Menu</a>
                        <a className='nav_right-item'>Messenger</a>
                        <a className='nav_right-item'>Notifications</a>
                        <a className='nav_right-item'>Account</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;