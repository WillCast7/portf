import { useTranslation } from "react-i18next";

export default function References(){
        
    const {t} = useTranslation();

    return(
        <div className="w-full h-screen flex items-center justify-center black-background bg-slate-100">
          <div className="w-1/3">
                <h1 className="text-9*l">{t('referencesBg')}</h1>
                <h1>{t('referencesTitle')}</h1>
            </div>
            <div className="w-1/2 center">
                <span>{t('referencesDescription')}</span>
                <br />
                <br />
                <br />
                <span>{t('referenceResume1')}</span>
                <br />
                <span>{t('referenceName1')}</span>
                <br />
                <br />
                <span>{t('referenceResume2')}</span>
                <br />
                <span>{t('referenceName2')}</span>
                <br />
                <br />
                <span>{t('referenceResume3')}</span>
                <br />
                <span>{t('referenceName3')}</span>
                
            </div>
        </div>
    );
}