import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineServer, HiOutlineDatabase, HiOutlineCloud, HiOutlineDeviceMobile, HiCubeTransparent } from "react-icons/hi";

const techImages = import.meta.glob<{ default: string }>('../../assets/technologies/*.{png,svg}', { eager: true });

interface TechItem {
    id: number;
    category: 'backend' | 'data' | 'cloud' | 'frontend' | 'ia';
}

export default function Technologies() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';
    const [activeFilter, setActiveFilter] = useState<'all' | 'backend' | 'data' | 'cloud' | 'frontend' | 'ia'>('all');

    const getTechImageUrl = (iconName: string) => {
        const key = `../../assets/technologies/${iconName}`;
        return techImages[key]?.default || '';
    };

    // 28 technologies mapped to categories
    const techItems: TechItem[] = [
        // Backend & Architecture
        { id: 0, category: 'backend' },   // Java
        { id: 1, category: 'backend' },   // Spring Boot
        { id: 2, category: 'backend' },   // WebFlux
        { id: 3, category: 'backend' },   // Kafka
        { id: 4, category: 'backend' },   // PHP
        { id: 5, category: 'backend' },   // Laravel
        { id: 6, category: 'backend' },   // Python
        { id: 7, category: 'backend' },   // Ruby
        { id: 8, category: 'backend' },   // Rails
        { id: 9, category: 'backend' },   // C#
        { id: 10, category: 'backend' },  // .NET
        { id: 16, category: 'backend' },  // NodeJS
        // Data & SQL
        { id: 17, category: 'data' },     // SQL
        { id: 18, category: 'data' },     // MySQL
        { id: 19, category: 'data' },     // PostgreSQL
        { id: 20, category: 'data' },     // SQL Server
        { id: 21, category: 'data' },     // MongoDB
        // Cloud & DevOps
        { id: 22, category: 'cloud' },    // AWS
        { id: 23, category: 'cloud' },    // GCP
        { id: 24, category: 'cloud' },    // Docker
        { id: 25, category: 'cloud' },    // Git
        { id: 26, category: 'cloud' },    // Jenkins
        { id: 27, category: 'cloud' },    // Linux
        // Frontend & Mobile
        { id: 11, category: 'frontend' }, // JavaScript
        { id: 12, category: 'frontend' }, // TypeScript
        { id: 13, category: 'frontend' }, // Angular
        { id: 14, category: 'frontend' }, // React
        { id: 15, category: 'frontend' }, // Vue
        // IA
        { id: 28, category: 'ia' }, // Antigravity
        { id: 29, category: 'ia' }, // Opencode
        { id: 30, category: 'ia' }, // Claude
        { id: 31, category: 'ia' }, // Kiro
    ];

    const filteredItems = activeFilter === 'all'
        ? techItems
        : techItems.filter(item => item.category === activeFilter);

    const categories = [
        { key: 'all', label: currentLang === 'es' ? 'Todas (28)' : 'All (28)', icon: null },
        { key: 'backend', label: currentLang === 'es' ? 'Backend & Core' : 'Backend & Core', icon: <HiOutlineServer className="text-base" /> },
        { key: 'data', label: currentLang === 'es' ? 'Bases de Datos & SQL' : 'Databases & SQL', icon: <HiOutlineDatabase className="text-base" /> },
        { key: 'cloud', label: currentLang === 'es' ? 'Cloud & DevOps' : 'Cloud & DevOps', icon: <HiOutlineCloud className="text-base" /> },
        { key: 'frontend', label: currentLang === 'es' ? 'Frontend & Mobile' : 'Frontend & Mobile', icon: <HiOutlineDeviceMobile className="text-base" /> },
        { key: 'ia', label: currentLang === 'es' ? 'IA' : 'IA', icon: <HiCubeTransparent className="text-base" /> },
    ];

    return (
        <section id="technologies" className="w-full min-h-screen py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F17] relative overflow-hidden">
            {/* Ambient lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="w-full max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold mb-2 block">
                        // {t('technologiesTitle')}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                        {currentLang === 'es' ? 'Ecosistema Tecnológico & Dominio' : 'Technology Ecosystem & Stack'}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {t('technologiesDescription')}
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveFilter(cat.key as any)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeFilter === cat.key
                                ? 'bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white shadow-lg shadow-teal-600/30 scale-105'
                                : 'bg-white/5 border border-white/10 text-gray-300 hover:border-teal-400/40 hover:text-white'
                                }`}
                        >
                            {cat.icon}
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Grid of Categorized Technologies */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                    {filteredItems.map((item) => {
                        const iconName = t('technologyIcon' + item.id);
                        const iconTitle = t('technologyIconName' + item.id);
                        const imgSrc = getTechImageUrl(iconName);

                        return (
                            <div
                                key={item.id}
                                className="glass-card-interactive p-4 rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer"
                            >
                                <div className="w-12 h-12 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                                    <img
                                        src={imgSrc || `../src/assets/technologies/${iconName}`}
                                        alt={iconTitle}
                                        className="max-w-full max-h-full object-contain filter drop-shadow"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-teal-300 transition-colors">
                                    {iconTitle}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}