import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUser, 
    faUserGroup, 
    faUsers, 
    faShop, 
    faTv,
    faClockRotateLeft,
    faBookmark,
    faLayerGroup,
    faNewspaper,
    faCalendarDays,
    faBusinessTime,
    faAngleDown
        } from '@fortawesome/free-solid-svg-icons'


class Sidebar extends React.Component {

    render(){
        return(
            <div className='sidebar-fcus'>
                <ul>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faUser} size="2x" />
                        <p className='sidebar-fcus_item-text'>John Smith</p>
                    </li>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faUserGroup} size="2x" />
                        <p className='sidebar-fcus_item-text'>Find friends</p>
                    </li>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faUsers} size="2x" />
                        <p className='sidebar-fcus_item-text'>Groups</p>
                    </li>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faShop} size="2x" />
                        <p className='sidebar-fcus_item-text'>Marketplace</p>
                    </li>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faTv} size="2x" />
                        <p className='sidebar-fcus_item-text'>Watch</p>
                    </li>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faClockRotateLeft} size="2x" />
                        <p className='sidebar-fcus_item-text'>Memories</p>
                    </li>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faBookmark} size="2x" />
                        <p className='sidebar-fcus_item-text'>Saved</p>
                    </li>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faLayerGroup} size="2x" />
                        <p className='sidebar-fcus_item-text'>Pages</p>
                    </li>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faNewspaper} size="2x" />
                        <p className='sidebar-fcus_item-text'>News</p>
                    </li>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faCalendarDays} size="2x" />
                        <p className='sidebar-fcus_item-text'>Events</p>
                    </li>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faBusinessTime} size="2x" />
                        <p className='sidebar-fcus_item-text'>Most Recent</p>
                    </li>
                    <li className='sidebar-fcus_item'>
                        <FontAwesomeIcon className='sidebar-fcus_item-icon' icon={faAngleDown} size="2x" />
                        <p className='sidebar-fcus_item-text'>See more</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;