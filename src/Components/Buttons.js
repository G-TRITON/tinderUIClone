import React from 'react';
import './buttons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavouriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

const Buttons = () => {
    return(
        <div className="container">
        <div className="buttons">
            <IconButton className="button_repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="button_left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="button_star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="button_right">
                <FavouriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="button_flash">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
        </div>
    );
}

export default Buttons;