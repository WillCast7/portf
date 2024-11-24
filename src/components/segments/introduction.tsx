import { useTranslation } from "react-i18next";
import myPhoto from '../../assets/final.webp';
export default function Introduction(){
    
    const {t} = useTranslation();

    return(
        <div className="w-full h-screen flex items-center justify-center black-background">
            <div className="flex flex-col md:flex-row mx-5 md:mx-10 px-7 ">
                <div className="w-full md:w-1/3 flex flex-col items-start">
                    <h1 className="text-6xl md:text-9xl background-text absolute font-semibold z-0">{t('aboutMeBg')}</h1>
                    <h1 className="relative z-10 mt-9 pl-2 md:pl-9 pt-5 font-bold text-2xl md:text-4xl">{t('aboutMeTitle')}</h1>
                    <img src={myPhoto} className="relative z-10 w-auto mt-10 h-48 md:h-96 rounded-lg" alt="Foto de un guapo :3" />
                </div>
                <div className="w-full md:w-3/4 pt-7 mt-8 md:mt-16 space-y-2 text-justify">
                    <p className="font-bold text-xl md:text-3xl green-text">William Castaño</p>
                    <p className="font-semibold text-base md:text-lg">{t('aboutMeItem1')}</p>
                    <p>{t('aboutMeItem2')}</p>
                    <p>{t('aboutMeResume1')}</p>
                    <p>{t('aboutMeResume2')}</p>
                    <p>{t('aboutMeResume3')}</p>
                </div>
            </div>
        </div>
    );
}