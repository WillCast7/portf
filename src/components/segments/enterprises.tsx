import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from "../modals/companyModal";

export default function Enterprises() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const openDetails = (index: number) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const experiences = [0, 1, 2, 3, 4, 5];

    return (
        <section id="experience" className="w-full min-h-screen py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0E1622] relative overflow-hidden">
            {/* Ambient lighting */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center sm:text-left">
                    <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold mb-2 block">
                        // {t('experienceTitle')}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {currentLang === 'es' ? 'Trayectoria & Liderazgo Técnico' : 'Career Journey & Technical Leadership'}
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl">
                        {t('experienceResume')}
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10 sm:space-y-12">
                    {experiences.map((index) => {
                        const title = t('experienceTitle' + index);
                        const company = t('experienceSubTitle' + index);
                        const period = t('experienceYear' + index);
                        const description = t('experienceDescription' + index);
                        const technologies = t('experienceTechnologies' + index);

                        // Split technologies into tags
                        const techTags = technologies
                            ? technologies.split(',').map((tag) => tag.trim()).filter(Boolean)
                            : [];

                        return (
                            <div key={index} className="relative group">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0B0F17] border-2 border-teal-400 group-hover:bg-teal-400 group-hover:scale-125 transition-all duration-200 shadow-md shadow-teal-500/40" />

                                {/* Experience Card */}
                                <div
                                    className="glass-card-interactive p-6 sm:p-7 rounded-2xl border border-white/10 cursor-pointer"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                                                    {title}
                                                </h3>
                                            </div>
                                            <p className="text-sm font-semibold text-teal-400 font-mono mt-0.5">
                                                {company}
                                            </p>
                                        </div>

                                        <span className="self-start sm:self-center px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-medium text-teal-300">
                                            {period}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 text-justify">
                                        {description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {techTags.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-gray-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}