import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../modals/skillModal";
import {
    HiOutlineCode,
    HiOutlineUsers,
    HiOutlineChatAlt2,
    HiOutlineTrendingUp,
    HiOutlineLightBulb
} from "react-icons/hi";

export default function Skills() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const openModal = (index: number) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const skillIcons = [
        <HiOutlineCode className="text-2xl text-teal-400" />,
        <HiOutlineUsers className="text-2xl text-teal-400" />,
        <HiOutlineChatAlt2 className="text-2xl text-teal-400" />,
        <HiOutlineTrendingUp className="text-2xl text-teal-400" />,
        <HiOutlineLightBulb className="text-2xl text-teal-400" />
    ];

    const skillIndices = [0, 1, 2, 3, 4];

    return (
        <section id="skills" className="w-full min-h-screen py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0E1622] relative overflow-hidden">
            {/* Ambient lighting */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold mb-2 block">
                        // {t('skillsTitle')}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                        {currentLang === 'es' ? 'Liderazgo, Prácticas & Habilidades Clave' : 'Leadership, Practices & Professional Skills'}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {t('skillsDescription')}
                    </p>
                </div>

                {/* 5 Capability Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillIndices.map((index) => {
                        const title = t('skillList' + index);
                        const description = t('skillDescription' + index);

                        return (
                            <div
                                key={index}
                                onClick={() => openModal(index)}
                                className={`glass-card-interactive p-6 sm:p-7 rounded-2xl flex flex-col justify-between cursor-pointer group ${index === 0 ? 'lg:col-span-2' : ''
                                    }`}
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {skillIcons[index]}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                                        {title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed text-justify">
                                        {description}
                                    </p>
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