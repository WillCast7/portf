import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const projectImages = import.meta.glob<{ default: string }>('../../assets/proyects/*.{webp,png,jpg}', { eager: true });

type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    modalIndex: number;
};

const ProjectModal: React.FC<ModalProps> = ({ isOpen, closeModal, modalIndex }) => {
    const {t} = useTranslation();
    const responsive = {
        all: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };

    const rawImages = [
        t('projectImg' + modalIndex + '1'), 
        t('projectImg' + modalIndex + '2'), 
        t('projectImg' + modalIndex + '3')
    ];

    const getProjectImageUrl = (pathOrName: string) => {
        const filename = pathOrName.split('/').pop() || '';
        const key = `../../assets/proyects/${filename}`;
        return projectImages[key]?.default || pathOrName;
    };

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
                className="black-background rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-8 shadow-2xl border border-white/10 relative" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="font-bold text-xl sm:text-2xl text-white">
                            {t('portfolioName' + modalIndex)}
                        </h2>
                        <p className="font-semibold text-sm sm:text-base green-text mt-0.5">
                            {t('portfolioEnterprise' + modalIndex)} &bull; <span className="text-gray-400 font-normal text-xs sm:text-sm">{t('portfolioYears' + modalIndex)}</span>
                        </p>
                    </div>
                    <button 
                        onClick={closeModal} 
                        className="text-gray-400 hover:text-white text-xl font-bold p-1.5 leading-none rounded-lg hover:bg-white/10 transition-colors"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                <div className="w-full my-4 rounded-xl overflow-hidden bg-black/50 border border-white/5">
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        infinite={true}
                        autoPlay={false}
                        keyBoardControl={true}
                        containerClass="pb-6"
                        itemClass="flex items-center justify-center"
                    >
                        {rawImages.map((imagePath, index) => {
                            const src = getProjectImageUrl(imagePath);
                            return (
                                <div key={index} className="w-full flex items-center justify-center p-2">
                                    <img 
                                        src={src} 
                                        alt={`Project screenshot ${index + 1}`} 
                                        className="max-h-60 sm:max-h-80 w-auto max-w-full object-contain rounded-lg"
                                    />
                                </div>
                            );
                        })}
                    </Carousel>
                </div>

                <div className="space-y-4 text-left sm:text-justify text-sm sm:text-base text-gray-200">
                    <p className="leading-relaxed">
                        {t('projectDescription' + modalIndex)}
                    </p>

                    <div className="bg-white/5 p-4 rounded-xl">
                        <p className="text-xs sm:text-sm font-bold green-text mb-1">
                            {t('technologies')}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-300">
                            {t('projectTechnologies' + modalIndex)}
                        </p>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
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

export default ProjectModal;