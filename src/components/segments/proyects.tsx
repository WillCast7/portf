import { useState } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "../modals/projectModal";
import { HiOutlineExternalLink, HiOutlineSparkles } from "react-icons/hi";

const projectThumbnails = import.meta.glob<{ default: string }>('../../assets/proyects/*.{webp,png,jpg}', { eager: true });

export default function Proyects() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

    const projectIndices = [0, 1, 2, 3, 4, 5, 6, 7];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const getThumbnailUrl = (index: number) => {
        const raw = t('projectImg' + index + '1');
        const filename = raw ? raw.split('/').pop() : '';
        const key = `../../assets/proyects/${filename}`;
        return projectThumbnails[key]?.default || '';
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1440 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1440, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        }
    };

    const openModal = (index: number) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    return (
        <section id="projects" className="w-full min-h-screen py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F17] relative overflow-hidden">
            {/* Ambient lighting */}
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-teal-500/5 blur-[130px] rounded-full pointer-events-none" />

            <div className="w-full max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold mb-2 block">
                        // {t('portfolioTitle')}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                        {currentLang === 'es' ? 'Casos de Éxito & Proyectos Clave' : 'Featured Projects & Case Studies'}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {t('portfolioDescription')}
                    </p>
                </div>

                {/* Projects Carousel Showcase */}
                <div className="w-full">
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        infinite={false}
                        autoPlay={false}
                        keyBoardControl={true}
                        customTransition="all .5s ease"
                        transitionDuration={500}
                        containerClass="pb-12"
                        itemClass="px-2.5 sm:px-3"
                    >
                        {projectIndices.map((index) => {
                            const name = t('portfolioName' + index);
                            const enterprise = t('portfolioEnterprise' + index);
                            const year = t('portfolioYears' + index);
                            const description = t('portfolioDescription' + index);
                            const thumbnail = getThumbnailUrl(index);
                            const techSummary = t('projectTechnologies' + index);
                            const primaryTechs = techSummary ? techSummary.split(',').slice(0, 3).map(s => s.trim()) : [];

                            return (
                                <div
                                    key={index}
                                    onClick={() => openModal(index)}
                                    className="glass-card-interactive rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full border border-white/10"
                                >
                                    {/* Thumbnail container */}
                                    <div className="relative w-full h-44 sm:h-48 bg-black/60 overflow-hidden flex items-center justify-center border-b border-white/5">
                                        {thumbnail ? (
                                            <img
                                                src={thumbnail}
                                                alt={name}
                                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center text-gray-500">
                                                <HiOutlineSparkles className="text-3xl text-teal-400 mb-1" />
                                                <span className="text-xs font-mono">{name}</span>
                                            </div>
                                        )}
                                        {/* Year Badge */}
                                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono font-semibold text-teal-300">
                                            {year}
                                        </span>
                                    </div>

                                    {/* Body */}
                                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                                        <div>
                                            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider font-mono">
                                                {enterprise}
                                            </span>
                                            <h3 className="font-extrabold text-lg sm:text-xl text-white group-hover:text-teal-300 transition-colors mt-1 mb-2">
                                                {name}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed mb-4">
                                                {description}
                                            </p>
                                        </div>

                                        {/* Tech chips & link */}
                                        <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                                            <div className="flex flex-wrap gap-1">
                                                {primaryTechs.map((tech, i) => (
                                                    <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-[10px] sm:text-[11px] font-mono text-gray-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-xs font-bold text-teal-400 group-hover:text-white flex items-center gap-1 transition-colors flex-shrink-0">
                                                {currentLang === 'es' ? 'Detalles' : 'Details'}
                                                <HiOutlineExternalLink className="text-sm" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                modalIndex={modalIndex}
            />
        </section>
    );
}