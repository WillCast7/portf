import { useTranslation } from 'react-i18next';

export default function Hobbies(){
    
    const {t} = useTranslation();

    return(
        <div className="w-full h-screen flex items-center justify-center black-background">
          <div className="w-1/3">
                <h1 className="text-9*l">{t('hobbiesBg')}</h1>
                <h1>{t('hobbiesTitle')}</h1>
            </div>
            <div className="w-1/2 center">
                <span>{t('hobbiesDescription')}</span>
                <br />
                <br />
                <br />
                <span>{t('hobbiesName1')}</span>
                <br />
                <span>{t('hobbiesItem1')}</span>
                <br />
                <br />
                <span>{t('hobbiesName2')}</span>
                <br />
                <span>{t('hobbiesItem2')}</span>
                <br />
                <br />
                <span>{t('hobbiesName3')}</span>
                <br />
                <span>{t('hobbiesItem3')}</span>
                
            </div>
        </div>
    );
}