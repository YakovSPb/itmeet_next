    import React from 'react';
    import Modal from 'react-modal';

    const customOverlayStyle = {
        overlay: {
            zIndex: 10000,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
            width: '600px',
            height: '600px',
            margin: 'auto',
        },
    };

    const CustomModal = ({ isOpen, closeModal, children }) => {
        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                style={customOverlayStyle}
            >
                <span onClick={closeModal} className='modal_close' >
                    <i className="fa fa-close"></i>
                </span>
                {children}
            </Modal>
        );
    };

    export default CustomModal;
