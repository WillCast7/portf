import { useState } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "../modals/projectModal";

export default function Proyects(){
    
    const {t} = useTranslation();
    const subTitleLists = [
      t('experienceSubTitle0'),
      t('experienceSubTitle1'),
      t('experienceSubTitle2'),
      t('experienceSubTitle3'),
      t('experienceSubTitle4'),
      t('experienceSubTitle5')
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
  
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
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

    const openModal = (index: number) =>{
     setModalIndex(index);
     setIsModalOpen(true);
    }

    return(
        <section id="projects" className="w-full min-h-screen py-16 md:py-24 px-4 sm:px-8 green-background flex items-center justify-center overflow-hidden relative">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="relative w-full lg:w-2/5 flex flex-col items-start">
                    <div className="relative w-full">
                        <span className="text-7xl sm:text-8xl md:text-9xl background-green-text absolute -top-8 -left-2 sm:left-0 font-extrabold select-none pointer-events-none opacity-30 z-0">
                            {t('portfolioBg')}
                        </span>
                        <h2 className="relative z-10 font-bold text-2xl sm:text-3xl md:text-4xl text-white pt-2 sm:pt-4">
                            {t('portfolioTitle')}
                        </h2>
                    </div>
                    <div className="mt-6 text-sm sm:text-base text-white/95 leading-relaxed text-left sm:text-justify">
                        <p>{t('portfolioDescription')}</p>
                    </div>
                </div>

                <div className="w-full lg:w-3/5 z-10">
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        infinite={false}
                        autoPlay={false}
                        keyBoardControl={true}
                        customTransition="all .5s"
                        transitionDuration={500}
                        containerClass="pb-10"
                        itemClass="px-2"
                    >
                        {subTitleLists.map((_, index) => (
                            <div 
                                key={index}
                                onClick={() => openModal(index)} 
                                className="rounded-2xl overflow-hidden shadow-2xl bg-[#181818] cursor-pointer hover:bg-white text-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 group border border-white/10"
                            >
                                <div className="p-6 flex flex-col justify-between min-h-[220px]">
                                    <div>
                                        <p className="text-right text-xs sm:text-sm green-text font-bold tracking-wider group-hover:text-black">
                                            {t('portfolioEnterprise' + index)}
                                        </p>
                                        <h3 className="font-extrabold text-xl mt-1">
                                            {t('portfolioName' + index)}
                                        </h3>
                                        <p className="text-xs opacity-75 mt-0.5">
                                            {t('portfolioYears' + index)}
                                        </p>
                                    </div>
                                    <p className="text-xs sm:text-sm line-clamp-3 mt-4 opacity-90">
                                        {t('portfolioDescription' + index)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <Modal isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                modalIndex={modalIndex}
            />
        </section>
    );
}