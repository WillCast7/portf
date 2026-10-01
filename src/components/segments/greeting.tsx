import { useTranslation } from 'react-i18next';
import hvEng from '../../assets/documents/eng.pdf';
import hvEsp from '../../assets/documents/esp.pdf';
import { AiOutlineWhatsApp, AiFillGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineCloudDownload, AiOutlineArrowDown } from "react-icons/ai";
import { HiOutlineCode, HiOutlineDatabase, HiOutlineSparkles, HiOutlineBriefcase } from "react-icons/hi";

export default function Greeting() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

    const openPdf = () => {
        window.open(currentLang === 'es' ? hvEsp : hvEng, '_blank');
    };

    return (
        <section
            id="greeting"
            className="relative min-h-[100dvh] w-full flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0F17]"
        >
            {/* Ambient lighting effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight sm:leading-none mb-6">
                    William <span className="bg-gradient-to-r from-[#2DD4BF] via-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent">Castaño</span>
                </h1>

                {/* Subtitle / Role */}
                <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-200 mb-6 flex items-center justify-center gap-2">
                    <HiOutlineSparkles className="text-teal-400" />
                    <span>{t('presentationProfession')}</span>
                </p>

                {/* Executive Value Proposition */}
                <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-10 text-center">
                    {currentLang === 'es'
                        ? 'Diseño, construyo y escalo arquitecturas empresariales robustas, microservicios de alto rendimiento y soluciones impulsadas por Inteligencia Artificial (RAG & LLMs). Respaldo cada ecosistema con más de 11 años de dominio en bases de datos y 6 años liderando el ciclo completo de desarrollo de software.'
                        : 'I design, build, and scale robust enterprise architectures, high-performance microservices, and AI-driven solutions (RAG & LLMs). I back every ecosystem with over 11 years of database expertise and 6+ years leading the full software development lifecycle.'}
                </p>

                {/* Metric Stat Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-10">
                    <div className="glass-card-interactive p-4 rounded-2xl flex flex-col items-center text-center">
                        <HiOutlineDatabase className="text-2xl text-teal-400 mb-1" />
                        <span className="text-2xl sm:text-3xl font-extrabold text-white">+11</span>
                        <span className="text-xs text-gray-300 font-medium">
                            {currentLang === 'es' ? 'Años en SQL & BD' : 'Years SQL & Data'}
                        </span>
                    </div>

                    <div className="glass-card-interactive p-4 rounded-2xl flex flex-col items-center text-center">
                        <HiOutlineCode className="text-2xl text-teal-400 mb-1" />
                        <span className="text-2xl sm:text-3xl font-extrabold text-white">+6</span>
                        <span className="text-xs text-gray-300 font-medium">
                            {currentLang === 'es' ? 'Años en Desarrollo' : 'Years Software Dev'}
                        </span>
                    </div>

                    <div className="glass-card-interactive p-4 rounded-2xl flex flex-col items-center text-center">
                        <HiOutlineBriefcase className="text-2xl text-teal-400 mb-1" />
                        <span className="text-2xl sm:text-3xl font-extrabold text-white">15+</span>
                        <span className="text-xs text-gray-300 font-medium">
                            {currentLang === 'es' ? 'Proyectos Entregados' : 'Delivered Projects'}
                        </span>
                    </div>

                    <div className="glass-card-interactive p-4 rounded-2xl flex flex-col items-center text-center">
                        <HiOutlineSparkles className="text-2xl text-teal-400 mb-1" />
                        <span className="text-2xl sm:text-3xl font-extrabold text-white">B2</span>
                        <span className="text-xs text-gray-300 font-medium">
                            {currentLang === 'es' ? 'Inglés Profesional' : 'English Proficiency'}
                        </span>
                    </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
                    <a
                        href="#projects"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#14B8A6] hover:to-[#2DD4BF] text-white font-bold text-sm sm:text-base shadow-lg shadow-teal-500/25 transition-all hover:scale-105 active:scale-95 no-underline flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <span>{currentLang === 'es' ? 'Explorar Proyectos' : 'Explore Projects'}</span>
                        <AiOutlineArrowDown className="text-lg" />
                    </a>

                    <button
                        onClick={openPdf}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm sm:text-base border border-white/10 hover:border-teal-400/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <AiOutlineCloudDownload className="text-xl text-teal-400" />
                        <span>{t('curriculumVitaeButton')}</span>
                    </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 text-gray-300">
                    <a
                        href="https://www.linkedin.com/in/willcast7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400 hover:text-teal-300 hover:scale-110 transition-all text-xl no-underline"
                        aria-label="LinkedIn"
                    >
                        <AiOutlineLinkedin />
                    </a>
                    <a
                        href="https://github.com/WillCast7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400 hover:text-teal-300 hover:scale-110 transition-all text-xl no-underline"
                        aria-label="GitHub"
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        href="https://wa.me/573023424366"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400 hover:text-teal-300 hover:scale-110 transition-all text-xl no-underline"
                        aria-label="WhatsApp"
                    >
                        <AiOutlineWhatsApp />
                    </a>
                    <a
                        href="mailto:williamisrael210@gmail.com"
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400 hover:text-teal-300 hover:scale-110 transition-all text-xl no-underline"
                        aria-label="Email"
                    >
                        <AiOutlineMail />
                    </a>
                </div>

            </div>
        </section>
    );
}
