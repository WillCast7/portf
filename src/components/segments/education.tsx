import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from "../modals/EducationModal";

export default function Education(){
    const {t} = useTranslation();
    
    const educationLists = [t('educationTitle0'), t('educationTitle1'), t('educationTitle2'), t('educationTitle3')];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const getInformation = (index: number) =>{
        setModalIndex(index)
        setIsModalOpen(true);
    }

    return(
<div className="w-full h-screen flex items-center justify-center green-background">
    <div className="flex flex-col md:flex-row w-full md:w-2/3 mx-5 md:mx-10 p-7">
        <div className="relative w-full">
            <h1 className="text-6xl md:text-9xl background-green-text absolute font-semibold z-0">{t('educationBg')}</h1>
            <h1 className='relative z-10 mt-9 pl-2 md:pl-9 pt-5 font-bold text-2xl md:text-4xl'>{t('educationTitle')}</h1>
            <div className="p-3 mt-16 text-justify">
                <p>{t('educationDescription')}</p> 
            </div>
        </div>
    </div>

    <div className="flex flex-wrap w-full md:w-1/2 px-5 md:px-7 justify-center items-center mt-5 md:mt-0">
        {educationLists.map((educationItem, index) => (
            <button 
                key={educationItem}
                className="h-full text-center m-3 hover:bg-white hover:text-black text-lg md:text-base"
                onClick={() => getInformation(index)}>
                {educationItem}
            </button>
        ))}
    </div>

    <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} modalIndex={modalIndex} />
</div>
    );
}