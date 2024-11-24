import { useTranslation } from "react-i18next";

export default function Technologies(){
        
    const {t} = useTranslation();
    const emptyArray = Array.from({ length: 28 }, (_, index) => index);

    return(
        <div className="w-full black-background h-screen flex items-center justify-center">
            <div className="flex mx-10 p-7 flex-col md:flex-row">
                <div className="">
                    <h1 className="text-9xl background-text absolute font-semibold z-0">{t('technologiesBg')}</h1>
                    <h1 className="relative z-10 mt-9 pl-9 pt-5 font-bold">{t('technologiesTitle')}</h1>
                    <div className="p-3 mt-16 text-justify">
                        <p>{t('technologiesDescription')}</p>
                    </div>
                </div>
                <div className="flex flex-wrap space-x-1 px-7 pb-6 justify-center mt-5 md:mt-0 ">
                    {emptyArray.map((index) => (
                        <div key={index} className="flex technology-button m-2">
                            <img
                                src={'src/assets/technologies/' + t('technologyIcon' + index)}
                                alt={t('technologyIconName' + index)}
                                className="w-auto h-9 rounded-lg"
                                title={t('technologyIconName' + index)}
                            />
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    );
}