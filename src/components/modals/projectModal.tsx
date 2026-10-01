import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AnimatePresence, motion } from 'framer-motion';
import {
    HiOutlineX,
    HiOutlineSparkles,
    HiOutlineDocumentText,
    HiOutlineCode,
    HiOutlineCalendar,
    HiOutlineBriefcase,
    HiOutlineChevronLeft,
    HiOutlineChevronRight
} from "react-icons/hi";

const projectImages = import.meta.glob<{ default: string }>('../../assets/proyects/*.{webp,png,jpg}', { eager: true });

type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    modalIndex: number;
};

// Smart parser for technologies string preserving nested parentheses like Java(SpringBoot, ...)
const parseTechList = (str: string): string[] => {
    if (!str || str.startsWith('projectTechnologies')) return [];
    const result: string[] = [];
    let current = '';
    let depth = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '(') depth++;
        else if (char === ')') depth = Math.max(0, depth - 1);

        if (char === ',' && depth === 0) {
            if (current.trim()) result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    if (current.trim()) result.push(current.trim());
    return result;
};

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        type="button"
        aria-label="Previous"
        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-xl bg-black/70 hover:bg-teal-500 text-white/90 hover:text-white border border-white/15 backdrop-blur-md transition-all shadow-lg hover:scale-105 cursor-pointer"
    >
        <HiOutlineChevronLeft className="text-base sm:text-lg" />
    </button>
);

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        type="button"
        aria-label="Next"
        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-xl bg-black/70 hover:bg-teal-500 text-white/90 hover:text-white border border-white/15 backdrop-blur-md transition-all shadow-lg hover:scale-105 cursor-pointer"
    >
        <HiOutlineChevronRight className="text-base sm:text-lg" />
    </button>
);

const ProjectModal: React.FC<ModalProps> = ({ isOpen, closeModal, modalIndex }) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en';
    const carouselRef = useRef<any>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const responsive = {
        all: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };

    // Helper to get image URL from glob import
    const getProjectImageUrl = (pathOrName: string) => {
        if (!pathOrName) return '';
        const filename = pathOrName.split('/').pop() || '';
        const key = `../../assets/proyects/${filename}`;
        return projectImages[key]?.default || pathOrName;
    };

    // Fetch and filter all valid screenshots for current project
    const rawImageKeys = [
        t('projectImg' + modalIndex + '1'),
        t('projectImg' + modalIndex + '2'),
        t('projectImg' + modalIndex + '3'),
        t('projectImg' + modalIndex + '4')
    ];

    const validImages = rawImageKeys
        .filter((img) => img && !img.startsWith('projectImg'))
        .map(getProjectImageUrl)
        .filter((url) => !!url);

    // Text details
    const projectName = t('portfolioName' + modalIndex) || '';
    const enterprise = t('portfolioEnterprise' + modalIndex) || '';
    const year = t('portfolioYears' + modalIndex) || '';
    const detailedDescription = t('projectDescription' + modalIndex) || '';
    const rawTechs = t('projectTechnologies' + modalIndex) || '';
    const techList = parseTechList(rawTechs);

    // Reset slide index when modal opens with a new project
    useEffect(() => {
        if (isOpen) {
            setSelectedImageIndex(0);
        }
    }, [isOpen, modalIndex]);

    // Handle ESC key and prevent body scrolling
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, closeModal]);

    const handleThumbnailClick = (index: number) => {
        setSelectedImageIndex(index);
        carouselRef.current?.goToSlide(index);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
                    {/* Dark Glass Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-[#06090E]/85 backdrop-blur-md"
                        onClick={closeModal}
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl bg-[#0B0F17]/95 border border-white/15 shadow-2xl shadow-teal-500/10 backdrop-blur-2xl z-10 overflow-hidden text-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Ambient subtle light glows */}
                        <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

                        {/* Modal Header */}
                        <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-white/10 flex items-start justify-between gap-4 bg-[#0B0F17]/80 backdrop-blur-md z-10">
                            <div>
                                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-teal-400 font-bold flex items-center gap-1.5 mb-1">
                                    <HiOutlineSparkles className="text-teal-400 text-sm" />
                                    // {t('portfolioTitle') || 'PROYECTO'}
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                    {projectName}
                                </h2>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    {enterprise && (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono font-medium text-teal-300">
                                            <HiOutlineBriefcase className="text-xs" />
                                            {enterprise}
                                        </span>
                                    )}
                                    {year && (
                                        <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-gray-300">
                                            <HiOutlineCalendar className="text-xs" />
                                            {year}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                aria-label="Close modal"
                                className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
                            >
                                <HiOutlineX className="text-xl" />
                            </button>
                        </div>

                        {/* Modal Scrollable Body */}
                        <div className="px-5 sm:px-8 py-5 sm:py-6 overflow-y-auto space-y-6 flex-1 text-left">


                            {/* Showcase Gallery Browser Frame */}
                            {validImages.length > 0 && (
                                <div className="rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-lg">

                                    {/* Carousel Frame */}
                                    <div className="relative p-2 sm:p-4 bg-gradient-to-b from-black/40 to-black/80 flex items-center justify-center min-h-[220px] sm:min-h-[320px]">
                                        <div className="w-full">
                                            <Carousel
                                                ref={carouselRef}
                                                responsive={responsive}
                                                swipeable={true}
                                                draggable={true}
                                                showDots={false}
                                                infinite={false}
                                                autoPlay={false}
                                                keyBoardControl={false}
                                                customLeftArrow={<CustomLeftArrow />}
                                                customRightArrow={<CustomRightArrow />}
                                                afterChange={(_, state) => {
                                                    if (state && typeof state.currentSlide === 'number') {
                                                        setSelectedImageIndex(state.currentSlide);
                                                    }
                                                }}
                                                containerClass="w-full"
                                                itemClass="flex items-center justify-center"
                                            >
                                                {validImages.map((src, idx) => (
                                                    <div key={idx} className="w-full flex items-center justify-center p-1 sm:p-2">
                                                        <img
                                                            src={src}
                                                            alt={`${projectName} preview ${idx + 1}`}
                                                            className="max-h-[260px] sm:max-h-[360px] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/5 transition-all"
                                                        />
                                                    </div>
                                                ))}
                                            </Carousel>
                                        </div>
                                    </div>

                                    {/* Thumbnail strip */}
                                    {validImages.length > 1 && (
                                        <div className="px-4 py-3 bg-black/50 border-t border-white/5 flex items-center justify-center gap-3 overflow-x-auto">
                                            {validImages.map((src, idx) => {
                                                const isActive = selectedImageIndex === idx;
                                                return (
                                                    <button
                                                        key={idx}
                                                        type="button"
                                                        onClick={() => handleThumbnailClick(idx)}
                                                        className={`relative rounded-lg overflow-hidden h-12 w-20 sm:h-14 sm:w-24 flex-shrink-0 transition-all cursor-pointer border ${isActive
                                                            ? 'border-teal-400 ring-2 ring-teal-400/40 opacity-100 scale-105'
                                                            : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/30'
                                                            }`}
                                                    >
                                                        <img
                                                            src={src}
                                                            alt={`thumbnail ${idx + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Detailed Description */}
                            {detailedDescription && (
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-bold">
                                        <HiOutlineDocumentText className="text-base text-teal-400" />
                                        <span>{currentLang === 'es' ? 'Descripción del Proyecto & Alcance' : 'Project Overview & Scope'}</span>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed sm:text-justify">
                                        {detailedDescription}
                                    </p>
                                </div>
                            )}

                            {/* Technologies Section */}
                            {techList.length > 0 && (
                                <div className="space-y-3 pt-2">
                                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 font-bold">
                                        <HiOutlineCode className="text-base text-teal-400" />
                                        <span>{t('technologies') || (currentLang === 'es' ? 'Tecnologías Usadas' : 'Technologies Used')}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {techList.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-teal-500/10 border border-white/10 hover:border-teal-500/30 text-xs sm:text-sm font-mono text-gray-200 hover:text-teal-300 transition-all flex items-center gap-2 shadow-sm"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                                                <span>{tech}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="px-5 sm:px-8 py-3.5 sm:py-4 border-t border-white/10 bg-[#0B0F17]/90 backdrop-blur-md flex items-center justify-between gap-4 z-10">
                            <span className="text-xs text-gray-500 font-mono hidden sm:inline-flex items-center gap-2">
                                <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-[10px] text-gray-300 font-mono">
                                    ESC
                                </kbd>
                                <span>{currentLang === 'es' ? 'para cerrar' : 'to close'}</span>
                            </span>

                            <button
                                onClick={closeModal}
                                type="button"
                                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-semibold text-sm shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 ml-auto"
                            >
                                <span>{t('closeButton') || (currentLang === 'es' ? 'Cerrar' : 'Close')}</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;