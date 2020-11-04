import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import './header.css';

const Header = () => {
    return(
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="person_icon" />
            </IconButton>
            <img className="header_logo"
             src="https://icon2.cleanpng.com/20180617/wji/kisspng-tinder-logo-computer-icons-tinder-5b2617bbc3b1d9.2328705015292230998016.jpg"
             alt=""
             />
            <IconButton>
            <ChatIcon fontSize="large" className="chat_icon" />
            </IconButton>
        </div>
    )
}

export default Header;