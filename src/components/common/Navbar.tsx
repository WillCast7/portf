import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import hvEng from '../../assets/documents/eng.pdf';
import hvEsp from '../../assets/documents/esp.pdf';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const nextLang = currentLang === 'es' ? 'en' : 'es';
        i18n.changeLanguage(nextLang);
    };

    const openResume = () => {
        window.open(currentLang === 'es' ? hvEsp : hvEng, '_blank');
    };

    const navLinks = [
        { href: '#about', label: t('aboutMeTitle') },
        { href: '#experience', label: t('experienceTitle') },
        { href: '#technologies', label: t('technologiesTitle') },
        { href: '#skills', label: t('skillsTitle') },
        { href: '#projects', label: t('portfolioTitle') },
        { href: '#education', label: t('educationTitle') },
        { href: '#contact', label: currentLang === 'es' ? 'Contacto' : 'Contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Brand / Logo */}
                <a
                    href="#greeting"
                    className="flex items-center gap-2 group cursor-pointer text-white no-underline hover:text-white"
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0D9488] to-[#2DD4BF] flex items-center justify-center font-extrabold text-white text-lg shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                        WC
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-base sm:text-lg tracking-tight leading-none text-white group-hover:text-[#2DD4BF] transition-colors">
                            William Castaño
                        </span>
                        <span className="text-[11px] text-teal-400 font-mono tracking-wider">
                            Full Stack &amp; AI
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-[#2DD4BF] transition-colors no-underline"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right controls: Language & CV CTA */}
                <div className="hidden sm:flex items-center gap-3">
                    {/* Language pill */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-200 hover:border-teal-400 hover:text-teal-300 transition-all cursor-pointer"
                        title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                    >
                        <span className={currentLang === 'es' ? 'text-teal-400 font-bold' : 'text-gray-400'}>ES</span>
                        <span className="text-gray-500">/</span>
                        <span className={currentLang === 'en' ? 'text-teal-400 font-bold' : 'text-gray-400'}>EN</span>
                    </button>

                    {/* CV CTA button */}
                    <button
                        onClick={openResume}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#14B8A6] hover:to-[#2DD4BF] text-white text-xs font-bold shadow-md shadow-teal-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        <AiOutlineCloudDownload className="text-base" />
                        <span>CV</span>
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="flex items-center gap-2 lg:hidden">
                    <button
                        onClick={toggleLanguage}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-teal-400"
                    >
                        {currentLang.toUpperCase()}
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-[#0B0F17]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="flex flex-col space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-medium text-gray-200 hover:text-[#2DD4BF] py-1 border-b border-white/5 no-underline"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="pt-2 flex flex-col gap-3">
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                openResume();
                            }}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white font-bold text-sm shadow-lg shadow-teal-600/30"
                        >
                            <AiOutlineCloudDownload className="text-lg" />
                            <span>{t('curriculumVitaeButton')}</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
