import { useTranslation } from "react-i18next";
import myPhoto from '../../assets/final.webp';
import { HiOutlineServer, HiOutlineDatabase, HiOutlineSparkles } from "react-icons/hi";
import { AiOutlineTrophy } from "react-icons/ai";

export default function Introduction() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

    return (
        <section id="about" className="w-full min-h-screen py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F17] relative overflow-hidden">
            {/* Ambient subtle light */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-14">
                    <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold mb-2 block">
                        // {t('aboutMeTitle')}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {currentLang === 'es' ? 'Ingeniería, Arquitectura & Enfoque a Resultados' : 'Engineering, Architecture & Business Impact'}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Stylized Profile Card */}
                    <div className="lg:col-span-4 flex flex-col items-center">
                        <div className="glass-card p-6 rounded-3xl w-full flex flex-col items-center text-center shadow-xl border border-white/10 relative group">
                            {/* Photo with glow effect */}
                            <div className="relative mb-5">
                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-30 group-hover:opacity-70 blur-md transition duration-300" />
                                <img
                                    src={myPhoto}
                                    className="relative w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-2xl border-2 border-white/20 shadow-2xl"
                                    alt="William Castaño"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">William Castaño</h3>
                            <p className="text-xs font-semibold text-teal-400 font-mono mb-4">
                                Senior Full Stack &amp; AI Engineer
                            </p>

                            <div className="w-full pt-4 border-t border-white/10 space-y-2 text-xs text-gray-300 text-left">
                                <div className="flex items-center gap-2">
                                    <span className="text-teal-400">📍</span>
                                    <span>Cali, Colombia (Remoto Global)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-teal-400">🌐</span>
                                    <span>{currentLang === 'es' ? 'Nivel de Inglés: B2 Técnico' : 'English: B2 Technical'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-teal-400">⚡</span>
                                    <span>{currentLang === 'es' ? 'Metodología: Kaizen & SCRUM' : 'Methodology: Kaizen & Agile'}</span>
                                </div>
                            </div>

                            {/* Award Badge */}
                            <div className="mt-5 w-full p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center gap-2.5 text-left">
                                <AiOutlineTrophy className="text-xl text-teal-400 flex-shrink-0" />
                                <p className="text-[11px] text-teal-200 font-medium leading-tight">
                                    {t('aboutMeItem1')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Executive Narrative & 3 Strategic Pillars */}
                    <div className="lg:col-span-8 flex flex-col space-y-6">
                        {/* Executive Summary */}
                        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 text-gray-200 space-y-4">
                            <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-normal">
                                {t('aboutMeItem2')}
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                                {t('aboutMeResume1')}
                            </p>
                        </div>

                        {/* 3 Value Pillars */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Pillar 1: Backend Architecture */}
                            <div className="glass-card-interactive p-5 rounded-2xl flex flex-col">
                                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-3">
                                    <HiOutlineServer className="text-xl" />
                                </div>
                                <h4 className="font-bold text-white text-sm sm:text-base mb-2">
                                    {currentLang === 'es' ? 'Arquitectura & Backend' : 'Architecture & Backend'}
                                </h4>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {currentLang === 'es'
                                        ? 'Microservicios con Spring Boot, WebFlux y Kafka, python, node. Diseño con modelo C4 y especificaciones SDD bajo ISO 25010.'
                                        : 'Microservices with Spring Boot, WebFlux, and Kafka, as well as Python and Node.js. Architecture design using the C4 Model and SDD specifications aligned with ISO/IEC 25010.'}
                                </p>
                            </div>

                            {/* Pillar 2: High Performance Data */}
                            <div className="glass-card-interactive p-5 rounded-2xl flex flex-col">
                                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-3">
                                    <HiOutlineDatabase className="text-xl" />
                                </div>
                                <h4 className="font-bold text-white text-sm sm:text-base mb-2">
                                    {currentLang === 'es' ? 'Bases de Datos & SQL' : 'Databases & SQL'}
                                </h4>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {currentLang === 'es'
                                        ? '+5 años adicionales trabajando con bases de datos relacionales (PostgreSQL, SQL Server, MySQL) y modelado NoSQL.'
                                        : '5+ years additional experience working with relational databases (PostgreSQL, SQL Server, MySQL) and NoSQL modeling.'}
                                </p>
                            </div>

                            {/* Pillar 3: AI Solutions */}
                            <div className="glass-card-interactive p-5 rounded-2xl flex flex-col">
                                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-3">
                                    <HiOutlineSparkles className="text-xl" />
                                </div>
                                <h4 className="font-bold text-white text-sm sm:text-base mb-2">
                                    {currentLang === 'es' ? 'Ingeniería de IA' : 'AI Engineering'}
                                </h4>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {currentLang === 'es'
                                        ? 'Arquitecturas RAG con pgvector, Spring AI y LLMs locales para automatización de flujos de negocio.'
                                        : 'RAG architectures with pgvector, Spring AI and local LLMs for business workflow automation.'}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}