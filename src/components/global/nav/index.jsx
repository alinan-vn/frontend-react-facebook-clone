import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faF, 
    faHouse, 
    faUserGroup, 
    faTv, 
    faShop, 
    faGamepad, 
    faUser, 
    faBars, 
    faMessage, 
    faBell, 
    faCaretDown 
} from '@fortawesome/free-solid-svg-icons';

class Navigation extends React.Component {

    render(){
        return(
            <div className="container-liquid nav-fcus">
                <div class="row">
                    <div className="col">
                        <FontAwesomeIcon className='nav-fcus_left-logo' icon={faF} />

                        <input 
                            className='nav-fcus_left-search' 
                            type="text" 
                            placeholder='Search Facebook'
                        />
                    </div>
                    <div className="col">
                        <FontAwesomeIcon className='nav-fcus_middle-icon' icon={faHouse} size="2x" />
                        <FontAwesomeIcon className='nav-fcus_middle-icon' icon={faUserGroup} size="2x" />
                        <FontAwesomeIcon className='nav-fcus_middle-icon' icon={faTv} size="2x" />
                        <FontAwesomeIcon className='nav-fcus_middle-icon' icon={faShop} size="2x" />
                        <FontAwesomeIcon className='nav-fcus_middle-icon' icon={faGamepad} size="2x" />
                        
                    </div>
                    <div className="col">
                        <FontAwesomeIcon className='nav-fcus_right-icon' icon={faUser} size="2x" />
                        <FontAwesomeIcon className='nav-fcus_right-icon' icon={faBars} size="2x" />
                        <FontAwesomeIcon className='nav-fcus_right-icon' icon={faMessage} size="2x" />
                        <FontAwesomeIcon className='nav-fcus_right-icon' icon={faBell} size="2x" />
                        <FontAwesomeIcon className='nav-fcus_right-icon' icon={faCaretDown} size="2x" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;