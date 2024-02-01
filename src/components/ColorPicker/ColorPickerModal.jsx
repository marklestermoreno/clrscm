import React from 'react'
import './ColorPickerModal.css'

const ColorPickerModal = ({ isOpen, onClose, children }) => {

    const closeModal = () => {
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default ColorPickerModal