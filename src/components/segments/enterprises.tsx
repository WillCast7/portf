import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from "../modals/companyModal";

export default function Enterprises(){
    const {t} = useTranslation();
    const subTitleLists = [t('experienceSubTitle0'), t('experienceSubTitle1'), t('experienceSubTitle2'), t('experienceSubTitle3')];
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const getInformation = (index: number) =>{
        setModalIndex(index)
        setIsModalOpen(true);
    }

    return(
        <div className="w-full black-background h-screen flex items-center justify-center">
            <div className="flex flex-wrap w-2/3 mx-10 p-7">
                <h1 className="text-9xl background-text absolute font-semibold z-0">{t('experienceBg')}</h1>
                <h1 className='relative z-10 mt-9 pl-9 pt-5 font-bold'>{t('experienceTitle')}</h1>
                <div className="w-3/4 p-3 mt-16 space-y-2 text-justify">
                    <span>{t('experienceResume')}</span>
                </div>
            </div>
            <div className="flex flex-wrap w-1/2 px-7 justify-center items-center mr-10">
                {subTitleLists.map((subtitleItem, index) => (
                    <button 
                        key={subtitleItem}
                        className=" h-full text-center m-3 bg-tealish hover:bg-white hover:text-black"
                        onClick={() => getInformation(index)}>
                            {t('experienceSubTitle' + index)}
                    </button>
                ))}
            </div>
            <Modal isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                index={modalIndex}
            />
        </div> 
    );
}