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
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const openModal = (index: number) =>{
     setModalIndex(index);
     setIsModalOpen(true);
    }

    return(
        <div className="w-full flex  green-background h-screen items-center justify-center">
            <div className="flex flex-wrap w-2/3 mx-10 p-7">
                <h1 className="text-9xl background-green-text absolute font-semibold z-0">{t('portfolioBg')}</h1>
                <h1 className='relative z-10 mt-9 pl-9 pt-5 font-bold'>{t('portfolioTitle')}</h1>
                <div className="w-3/4 p-3 mt-16 space-y-2 text-justify">
                    <span>{t('portfolioDescription')}</span>
                </div>
            </div>
            <div className="w-1/2 px-7 z-10 justify-center items-center mr-10">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={false}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                  {subTitleLists.map((subtitleItem, index) => (
                    <div onClick={()=>{openModal(index)}} className="mx-1 max-w-sm rounded overflow-hidden shadow-2xl black-background cursor-pointer hover:bg-white hover:text-black">
                      <div className="px-6 py-4" key={subtitleItem}>
                          <p className="text-right text-sm green-text font-semibold"> {t('portfolioEnterprise' + index)} </p>
                        <div className="font-bold text-xl"> {t('portfolioName' + index)} </div>
                          <p className="text-xs pb-3"> {t('portfolioYears' + index)} </p>
                          <p className="text-xs"> {t('portfolioDescription' + index)} </p>
                      </div>
                    </div>
                   ))}
              </Carousel>
            </div>
            <Modal isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                modalIndex={modalIndex}
            />
        </div>
    );
}