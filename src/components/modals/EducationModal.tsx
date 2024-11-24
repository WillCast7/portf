import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    modalIndex: number;
};

const SkillModal: React.FC<ModalProps> = ({ isOpen, closeModal, modalIndex }) => {
    const {t} = useTranslation();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog bg-black bg-opacity-50">
            <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                <div className="black-background rounded-lg md:max-w-3xl md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
                    <div className="md:flex items-center">
                        <div className="mt-4 md:mt-0 md:ml-6 text-left md:text-left">
                            <h1 className="font-bold text-xl mb-3">
                                {t('educationTitle' + modalIndex)}
                            </h1>
                            <h2 className="font-semibold text-l ml-3 mb-3">
                                {t('educationEnterprise' + modalIndex)}
                            </h2>
                            <p className='font-semibold text-xs ml-3 mb-3'>
                                {t('educationYear' + modalIndex)}
                            </p>
                            <p className="text-xs mt-1 space-y-3 text-justify px-3 mb-3">
                                {t('educationDescription' + modalIndex)}
                            </p>
                        </div>
                    </div>
                    <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                        <button onClick={closeModal} className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-600 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
                            {t('closeButton')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillModal;