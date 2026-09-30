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
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/60 p-4 sm:p-6" onClick={closeModal}>
            <div 
                className="black-background rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-white/10 relative" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-3">
                    <h2 className="font-bold text-xl sm:text-2xl text-white pr-4">
                        {t('educationTitle' + modalIndex)}
                    </h2>
                    <button 
                        onClick={closeModal} 
                        className="text-gray-400 hover:text-white text-xl font-bold p-1.5 leading-none rounded-lg hover:bg-white/10 transition-colors"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>
                
                <h3 className="font-semibold text-base sm:text-lg green-text mb-2">
                    {t('educationEnterprise' + modalIndex)}
                </h3>
                <p className="font-medium text-xs sm:text-sm text-gray-400 mb-4">
                    {t('educationYear' + modalIndex)}
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-left sm:text-justify mb-6">
                    {t('educationDescription' + modalIndex)}
                </p>

                <div className="flex justify-end">
                    <button 
                        onClick={closeModal} 
                        className="w-full sm:w-auto px-6 py-2.5 bg-gray-700 hover:bg-[#2b999a] text-white rounded-xl font-semibold text-sm transition-all duration-200"
                    >
                        {t('closeButton')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SkillModal;