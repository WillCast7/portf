import { useTranslation } from "react-i18next";
import myPhoto from '../../assets/final.webp';
export default function Introduction(){
    
    const {t} = useTranslation();

    return(
        <section id="about" className="w-full min-h-screen py-16 md:py-24 px-4 sm:px-8 flex items-center justify-center black-background overflow-hidden relative">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 md:gap-12">
                <div className="relative w-full lg:w-1/3 flex flex-col items-center lg:items-start">
                    <div className="relative w-full flex flex-col items-center lg:items-start">
                        <span className="text-7xl sm:text-8xl md:text-9xl background-text absolute -top-8 -left-2 sm:left-0 font-extrabold select-none pointer-events-none opacity-30 z-0">
                            {t('aboutMeBg')}
                        </span>
                        <h2 className="relative z-10 font-bold text-2xl sm:text-3xl md:text-4xl text-white pt-2 sm:pt-4">
                            {t('aboutMeTitle')}
                        </h2>
                    </div>
                    <div className="mt-8 flex justify-center w-full">
                        <img 
                            src={myPhoto} 
                            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl border-2 border-white/10" 
                            alt="William Castaño" 
                        />
                    </div>
                </div>
                <div className="w-full lg:w-2/3 space-y-4 text-left sm:text-justify text-gray-200">
                    <p className="font-bold text-2xl sm:text-3xl green-text">William Castaño</p>
                    <p className="font-semibold text-base sm:text-lg text-white">{t('aboutMeItem1')}</p>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{t('aboutMeItem2')}</p>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{t('aboutMeResume1')}</p>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{t('aboutMeResume2')}</p>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{t('aboutMeResume3')}</p>
                </div>
            </div>
        </section>
    );
}