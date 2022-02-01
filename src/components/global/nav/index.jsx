import React from 'react';

class Navigation extends React.Component {

    render(){
        return(
            <div>
                <div className='nav'>
                    <div className='nav_left'>
                        <a className='nav_logo'>F</a>
                        <input type="text" placeholder='Search Facebook' />
                    </div>

                    <div className='nav_middle'>
                        <a>H</a>   {/* Push, Home */}
                        <a>C</a>   {/* Connect */}
                        <a>V</a>   {/* View */}
                        <a>M</a>   {/* Marketplace */}
                        <a>G</a>   {/* Gaming */}
                    </div>

                    <div className='nav_right'>
                        <a>Me</a>              {/* Push, Profile */}
                        <a>Menu</a>
                        <a>Messenger</a>
                        <a>Notifications</a>
                        <a>Account</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;