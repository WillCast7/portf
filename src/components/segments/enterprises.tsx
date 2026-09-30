import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from "../modals/companyModal";

export default function Enterprises() {
    const { t } = useTranslation();
    const subTitleLists = [t('experienceSubTitle0'), t('experienceSubTitle1'), t('experienceSubTitle2'), t('experienceSubTitle3'), t('experienceSubTitle4'), t('experienceSubTitle5')];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const getInformation = (index: number) => {
        setModalIndex(index)
        setIsModalOpen(true);
    }

    return (
        <section id="experience" className="w-full min-h-screen py-16 md:py-24 px-4 sm:px-8 black-background flex items-center justify-center overflow-hidden relative">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="relative w-full lg:w-1/2 flex flex-col items-start">
                    <div className="relative w-full">
                        <span className="text-7xl sm:text-8xl md:text-9xl background-text absolute -top-8 -left-2 sm:left-0 font-extrabold select-none pointer-events-none opacity-30 z-0">
                            {t('experienceBg')}
                        </span>
                        <h2 className="relative z-10 font-bold text-2xl sm:text-3xl md:text-4xl text-white pt-2 sm:pt-4">
                            {t('experienceTitle')}
                        </h2>
                    </div>
                    <div className="mt-6 text-sm sm:text-base text-gray-300 leading-relaxed text-left sm:text-justify">
                        <p>{t('experienceResume')}</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-stretch sm:items-center">
                    {subTitleLists.map((subtitleItem, index) => (
                        <button
                            key={subtitleItem}
                            className="w-full sm:w-[calc(50%-0.5rem)] text-center py-4 px-5 rounded-xl font-bold bg-[#2b999a] text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg text-sm sm:text-base active:scale-95"
                            onClick={() => getInformation(index)}>
                            {t('experienceSubTitle' + index)}
                        </button>
                    ))}
                </div>
            </div>
            <Modal isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                index={modalIndex}
            />
        </section>
    );
}