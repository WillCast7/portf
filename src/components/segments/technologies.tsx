import { useTranslation } from "react-i18next";

const techImages = import.meta.glob<{ default: string }>('../../assets/technologies/*.{png,svg}', { eager: true });

export default function Technologies(){
        
    const {t} = useTranslation();
    const emptyArray = Array.from({ length: 28 }, (_, index) => index);

    const getTechImageUrl = (iconName: string) => {
        const key = `../../assets/technologies/${iconName}`;
        return techImages[key]?.default || '';
    };

    return(
        <section id="technologies" className="w-full min-h-screen py-16 md:py-24 px-4 sm:px-8 black-background flex items-center justify-center overflow-hidden relative">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="relative w-full lg:w-1/2 flex flex-col items-start">
                    <div className="relative w-full">
                        <span className="text-7xl sm:text-8xl md:text-9xl background-text absolute -top-8 -left-2 sm:left-0 font-extrabold select-none pointer-events-none opacity-30 z-0">
                            {t('technologiesBg')}
                        </span>
                        <h2 className="relative z-10 font-bold text-2xl sm:text-3xl md:text-4xl text-white pt-2 sm:pt-4">
                            {t('technologiesTitle')}
                        </h2>
                    </div>
                    <div className="mt-6 text-sm sm:text-base text-gray-300 leading-relaxed text-left sm:text-justify">
                        <p>{t('technologiesDescription')}</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-wrap gap-2.5 sm:gap-3 justify-center items-center">
                    {emptyArray.map((index) => {
                        const iconName = t('technologyIcon' + index);
                        const iconTitle = t('technologyIconName' + index);
                        const imgSrc = getTechImageUrl(iconName);
                        return (
                            <div 
                                key={index} 
                                className="flex items-center justify-center p-2.5 sm:p-3 bg-[#181818] rounded-xl border border-white/10 hover:border-[#2b999a] hover:bg-[#2b999a] transition-all duration-200 hover:scale-110 shadow-md group cursor-pointer"
                                title={iconTitle}
                            >
                                <img
                                    src={imgSrc || `../src/assets/technologies/${iconName}`}
                                    alt={iconTitle}
                                    className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
                                    loading="lazy"
                                />
                            </div> 
                        );
                    })}
                </div>
            </div>
        </section>
    );
}