import { useTranslation } from 'react-i18next';
import background from '../../assets/banner.webp';
import hvEng from '../../assets/documents/eng.pdf';
import hvEsp from '../../assets/documents/esp.pdf';
import { useState } from 'react';
import { AiOutlineWhatsApp, AiFillGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineCloudDownload } from "react-icons/ai";

export default function Greeting() {
    const [lang, setLang] = useState('es');
    const { t, i18n } = useTranslation();

    const switchLanguage = () => {
        const newLang = lang === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
        setLang(newLang);
    };

    const openPdf = () => {
        lang === 'es' ? window.open(hvEsp, '_blank') : window.open(hvEng, '_blank');
    };

    return (
        <div className="flex items-center justify-center h-screen w-full"
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className="w-lg h-auto p-6 md:p-10 bg-black bg-opacity-60 rounded-2xl">
                <button onClick={switchLanguage} className='top-4 right-4 bg-tealish hover:bg-white hover:text-black p-2 rounded'>
                    {t('switchLanguajeButton')}
                </button>
                <p className='text-right'>
                    <span className='text-xl md:text-3xl'>{t('presentationHi')}</span>
                    <br />
                    <span className='text-xl md:text-3xl'>{t('presentationIam')}</span>
                    <br />
                    <span className='text-4xl md:text-7xl font-extrabold'>
                        William <br /> <span className="green-text">Castaño</span>
                    </span>
                    <br />
                    <span className='text-lg md:text-2xl'>{t('presentationProfession')}</span>
                </p>
                <div className='mt-5 flex flex-col md:flex-row justify-between items-center'>
                    <button onClick={openPdf} className="btn text-center lg-round flex items-center justify-start mr-5 hover:bg-white hover:text-black p-2 rounded">
                        <AiOutlineCloudDownload className='my-auto mr-2 text-xl' />
                        {t('curriculumVitaeButton')}
                    </button>
                    <div className='flex space-x-4 mt-4 md:mt-0'>
                        <a href="https://wa.me/573182452522" className='text-xl text-white no-underline'><AiOutlineWhatsApp /></a>
                        <a href="https://github.com/WillCast7" className='text-xl text-white no-underline'><AiFillGithub /></a>
                        <a href="https://www.linkedin.com/in/willcast7" className='text-xl text-white no-underline'><AiOutlineLinkedin /></a>
                        <a href="mailto:williamisrael210@gmail.com" className='text-xl text-white no-underline'><AiOutlineMail /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}