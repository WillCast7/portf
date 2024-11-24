import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../modals/skillModal";

export default function Skills(){
        
    const {t} = useTranslation();
    const skillLists = [t('skillList0'), t('skillList1'), t('skillList2'), t('skillList3'), t('skillList4')];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    
    const getInformation = (index: number) =>{
        setModalIndex(index)
        setIsModalOpen(true);
    }
    
    return(
        <div className="w-full green-background h-screen flex items-center justify-center">
            <div className="flex ml-10 p-7 w-5/6 flex-col md:flex-row">
                <div className="">
                    <h1 className="text-9xl background-green-text absolute font-semibold z-0">{t('skillsBg')}</h1>
                    <h1 className='relative z-10 mt-9 pl-9 pt-5 font-bold'>{t('skillsTitle')}</h1>
                    <div className="w-3/4 p-3 mt-16 space-y-2 text-justify">
                        <span>{t('skillsDescription')}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-2/6 px-7 justify-center items-center mr-10">
                {skillLists.map((skillItem, index) => (
                    <button 
                        key={index}
                        className=" h-full text-center my-3 hover:bg-white hover:text-black"
                        onClick={() => getInformation(index)}>
                        {skillItem}
                    </button>
                ))}
            </div>
            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} modalIndex={modalIndex} />
        </div>
    );
}