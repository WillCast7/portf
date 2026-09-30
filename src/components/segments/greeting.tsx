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

    console.log(background)
    return (
        <section id="greeting" className="flex items-center justify-center min-h-[100dvh] w-full px-4 py-8 relative overflow-hidden"
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className="w-full max-w-3xl h-auto p-8 sm:p-12 md:p-14 bg-black/30 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10 relative">
                <div className="flex justify-end mb-4">
                    <button onClick={switchLanguage} className="bg-tealish hover:bg-white hover:text-black text-xs sm:text-sm font-semibold px-3 py-1.5 rounded transition-all duration-200">
                        {t('switchLanguajeButton')}
                    </button>
                </div>
                <p className="text-right">
                    <span className="text-lg sm:text-2xl md:text-3xl font-medium">{t('presentationHi')}</span>
                    <br />
                    <span className="text-lg sm:text-2xl md:text-3xl font-medium">{t('presentationIam')}</span>
                    <br />
                    <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                        William <br /> <span className="green-text">Castaño</span>
                    </span>
                    <br />
                    <span className="text-sm sm:text-xl md:text-2xl font-normal mt-2 block">{t('presentationProfession')}</span>
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                    <button onClick={openPdf} className="w-full sm:w-auto flex items-center justify-center bg-tealish hover:bg-white hover:text-black py-2.5 px-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200">
                        <AiOutlineCloudDownload className="mr-2 text-xl" />
                        {t('curriculumVitaeButton')}
                    </button>
                    <div className="flex space-x-5 justify-center items-center">
                        <a href="https://wa.me/573182452522" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#2b999a] transition-colors p-1" aria-label="WhatsApp"><AiOutlineWhatsApp /></a>
                        <a href="https://github.com/WillCast7" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#2b999a] transition-colors p-1" aria-label="GitHub"><AiFillGithub /></a>
                        <a href="https://www.linkedin.com/in/willcast7" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#2b999a] transition-colors p-1" aria-label="LinkedIn"><AiOutlineLinkedin /></a>
                        <a href="mailto:williamisrael210@gmail.com" className="text-2xl text-white hover:text-[#2b999a] transition-colors p-1" aria-label="Email"><AiOutlineMail /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
