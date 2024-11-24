import { useTranslation } from "react-i18next";

export default function ContactMe(){
    const {t} = useTranslation();
    return(
        <div className="w-full h-screen black-background items-center justify-center">
            <div className="flex mx-10 p-7">
                <div className="w-1/3">
                    <h1 className="text-9xl background-text absolute font-semibold z-0">{t('contactMeBg')}</h1>
                    <h1 className="relative z-10 mt-9 pl-9 pt-5 font-bold">{t('contactMeTitle')}</h1>
                </div>
                <div className="w-3/4 center mt-16">
                    <p>{t('contactMeResume')}</p>
                </div>
            </div>
            <div className="flex flex-wrap mx-20 p-7 justify-center space-y-12 space-x-12 px-10 pb-10">
            <span>{t('phoneNumber')}</span>
                <br />
                <span>3023424366</span>
                <br />
                <br />
                <span>{t('email')}</span>
                <br />
                <span>williamisrael210@gmail.com</span>
            </div>
        </div>
    );
}