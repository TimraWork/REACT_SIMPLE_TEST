import { Grow, Modal, Backdrop } from '@mui/material';
import React from 'react';
import './ChartPopup.scss'

const ChartPopup = ({ children, open, onPopupClose, color }) => {
    return (
        <Modal className="popup" open={open} onClose={onPopupClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 600 }}>
            <Grow in={open} timeout={600}>
                <div className = {`popup__inner ${color ? 'popup__inner--' + color : ''}`}>
                    <div className="popup__overflow text_center">
                        <h1>Помощь зала</h1>
                        {children}
                    </div>
                </div>
            </Grow>
      </Modal>
    );
}

export { ChartPopup };