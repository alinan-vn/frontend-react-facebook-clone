import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Navigation extends React.Component {

    render(){
        return(
            <div className="container-liquid nav-fcus">
                <div class="row">
                    <div className="col">
                        <a className='nav-fcus_left-logo'>F</a>

                        {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                        <FontAwesomeIcon icon={faCoffee} />

                        <input 
                            className='nav-fcus_left-search' 
                            type="text" 
                            placeholder='Search Facebook'
                        />
                    </div>
                    <div className="col">
                        <a className=''>H</a>   {/* Push, Home */}
                        <a className=''>C</a>   {/* Connect */}
                        <a className=''>V</a>   {/* View */}
                        <a className=''>M</a>   {/* Marketplace */}
                        <a className=''>G</a>   {/* Gaming */}
                    </div>
                    <div className="col">
                        <a className=''>Me</a>              {/* Push, Profile */}
                        <a className=''>Menu</a>
                        <a className=''>Messenger</a>
                        <a className=''>Notifications</a>
                        <a className=''>Account</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;