import { useTranslation } from "react-i18next";

export default function Interests(){
    
    const {t} = useTranslation();

    return(
        <div className="w-full h-screen flex items-center justify-center green-background">
          <div className="w-1/3">
                <h1 className="text-9*l">{t('interestsBg')}</h1>
                <h1>{t('interestsTitle')}</h1>
            </div>
            <div className="w-1/2 center">
                <span>{t('interestsDescription')}</span>
                <br />
                <br />
                <br />
                <span>{t('interestsName1')}</span>
                <br />
                <span>{t('interestsItem1')}</span>
                <br />
                <br />
                <span>{t('interestsName2')}</span>
                <br />
                <span>{t('interestsItem2')}</span>
                <br />
                <br />
                <span>{t('interestsName3')}</span>
                <br />
                <span>{t('interestsItem3')}</span>
                
            </div>
        </div>
    );
}