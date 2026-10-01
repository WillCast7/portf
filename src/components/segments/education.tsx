import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from "../modals/EducationModal";
import { HiOutlineAcademicCap, HiOutlineCalendar, HiOutlineExternalLink } from "react-icons/hi";

export default function Education(){
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

    const educationIndices = [2, 1, 0, 3]; // Show in order: Engineering, MinTIC, Technician, Continuous
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const openDetails = (index: number) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    return(
        <section id="education" className="w-full min-h-screen py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0E1622] relative overflow-hidden">
            {/* Ambient lighting */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold mb-2 block">
                        // {t('educationTitle')}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                        {currentLang === 'es' ? 'Formación Académica & Certificaciones' : 'Education & Continuous Learning'}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {t('educationDescription')}
                    </p>
                </div>

                {/* Academic Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {educationIndices.map((index) => {
                        const title = t('educationTitle' + index);
                        const enterprise = t('educationEnterprise' + index);
                        const year = t('educationYear' + index);
                        const description = t('educationDescription' + index);

                        return (
                            <div 
                                key={index} 
                                onClick={() => openDetails(index)}
                                className="glass-card-interactive p-6 sm:p-7 rounded-2xl flex flex-col justify-between cursor-pointer group border border-white/10"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                                            <HiOutlineAcademicCap className="text-2xl" />
                                        </div>
                                        {year !== '-' && (
                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-teal-300">
                                                <HiOutlineCalendar className="text-xs" />
                                                {year}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                                        {title}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-semibold text-teal-400 font-mono mb-3">
                                        {enterprise}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3 text-justify">
                                        {description}
                                    </p>
                                </div>

                                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-teal-400 font-semibold">
                                    <span>{currentLang === 'es' ? 'Ver detalles' : 'View details'}</span>
                                    <HiOutlineExternalLink className="text-sm group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} modalIndex={modalIndex} />
        </section>
    );
}