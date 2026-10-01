import { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
    AiOutlineWhatsApp, 
    AiFillGithub, 
    AiOutlineLinkedin, 
    AiOutlineMail, 
    AiOutlineCheck, 
    AiOutlineCopy,
    AiOutlineArrowUp 
} from "react-icons/ai";
import { HiOutlineSparkles, HiOutlineLocationMarker } from "react-icons/hi";

export default function ContactMe() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';
    const [copied, setCopied] = useState(false);
    const emailAddress = "williamisrael210@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="contact" className="w-full pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0B0F17] relative overflow-hidden border-t border-white/5">
            {/* Ambient lighting */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="w-full max-w-5xl mx-auto relative z-10">
                {/* Main Contact Card */}
                <div className="glass-card p-8 sm:p-12 lg:p-16 rounded-3xl border border-white/10 text-center relative overflow-hidden shadow-2xl mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs sm:text-sm font-semibold mb-6">
                        <HiOutlineSparkles className="text-base" />
                        <span>{currentLang === 'es' ? 'Construyamos algo extraordinario' : "Let's build something extraordinary"}</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-2xl mx-auto">
                        {currentLang === 'es' 
                            ? '¿Listo para potenciar tu equipo con ingeniería de alto nivel?' 
                            : 'Ready to elevate your engineering team with proven expertise?'}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {currentLang === 'es'
                            ? 'Disponible para roles Senior Full Stack, Arquitectura de Software, proyectos distribuidos e integración de Inteligencia Artificial.'
                            : 'Available for Senior Full Stack roles, Software Architecture, distributed systems, and Enterprise AI integration.'}
                    </p>

                    {/* Email Copy Box */}
                    <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 sm:p-2.5 rounded-2xl bg-[#0B0F17]/80 border border-white/10 max-w-md w-full mx-auto mb-8 shadow-inner">
                        <div className="flex items-center gap-2 px-3 text-sm text-gray-300 font-mono w-full sm:w-auto justify-center">
                            <AiOutlineMail className="text-teal-400 text-lg flex-shrink-0" />
                            <span className="truncate">{emailAddress}</span>
                        </div>
                        <button
                            onClick={copyEmail}
                            className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                copied
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}
                        >
                            {copied ? (
                                <>
                                    <AiOutlineCheck className="text-sm" />
                                    <span>{currentLang === 'es' ? '¡Copiado!' : 'Copied!'}</span>
                                </>
                            ) : (
                                <>
                                    <AiOutlineCopy className="text-sm" />
                                    <span>{currentLang === 'es' ? 'Copiar correo' : 'Copy email'}</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Quick Channels Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        <a
                            href="https://wa.me/573182452522"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card-interactive p-4 rounded-2xl flex items-center justify-center gap-3 text-white no-underline group"
                        >
                            <AiOutlineWhatsApp className="text-2xl text-emerald-400 group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <p className="text-xs text-gray-400">WhatsApp</p>
                                <p className="text-sm font-bold text-white group-hover:text-emerald-300">+57 318 245 2522</p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/willcast7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card-interactive p-4 rounded-2xl flex items-center justify-center gap-3 text-white no-underline group"
                        >
                            <AiOutlineLinkedin className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <p className="text-xs text-gray-400">LinkedIn</p>
                                <p className="text-sm font-bold text-white group-hover:text-blue-300">/in/willcast7</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/WillCast7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card-interactive p-4 rounded-2xl flex items-center justify-center gap-3 text-white no-underline group"
                        >
                            <AiFillGithub className="text-2xl text-gray-300 group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <p className="text-xs text-gray-400">GitHub</p>
                                <p className="text-sm font-bold text-white group-hover:text-teal-300">@WillCast7</p>
                            </div>
                        </a>
                    </div>

                    {/* Location indicator */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
                        <HiOutlineLocationMarker className="text-teal-400 text-sm" />
                        <span>Cali, Colombia • {currentLang === 'es' ? 'Trabajo Remoto & Híbrido Global' : 'Remote & Global Hybrid'}</span>
                    </div>
                </div>

                {/* Footer Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-xs">
                            WC
                        </div>
                        <span>&copy; {new Date().getFullYear()} William Castaño. All rights reserved.</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <span>React • TypeScript • Tailwind CSS</span>
                        <button
                            onClick={scrollToTop}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                            aria-label="Scroll to top"
                            title="Volver arriba"
                        >
                            <AiOutlineArrowUp className="text-base" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}