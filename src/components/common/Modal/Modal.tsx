import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
