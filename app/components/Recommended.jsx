"use client";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { GrNext, GrPrevious } from "react-icons/gr";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const Recommended = () => {
  const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => (
    <button
      onClick={onClickHandler}
      disabled={!hasPrev}
      aria-label={label}
      className="text-5xl absolute left-0 top-1/2 -translate-y-1/2 text-mint_ cursor-pointer z-40 hover:scale-105"
    >
      <GrPrevious />
    </button>
  );

  const renderCustomNextArrow = (onClickHandler, hasNext, label) => (
    <button
      onClick={onClickHandler}
      disabled={!hasNext}
      aria-label={label}
      className="text-5xl absolute right-0 top-1/2 -translate-y-1/2 text-mint_ cursor-pointer z-40 hover:scale-105"
    >
      <GrNext />
    </button>
  );

  const renderIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorIcon = isSelected ? (
      <IoMdRadioButtonOn />
    ) : (
      <IoMdRadioButtonOff />
    );

    return (
      <>
        <li
          className={` px-2 text-xl ${
            isSelected && "scale-110"
          } inline-block cursor-pointer text-mint_`}
          onClick={onClickHandler}
          key={index}
          aria-label={`Slide ${index + 1}`}
          aria-current={isSelected ? "true" : "false"}
        >
          {indicatorIcon}
        </li>
      </>
    );
  };

  return (
    <>
      <h1 className="mt-5 text-3xl text-beige_ font-bold pl-3">
        Recommended For You:
      </h1>
      <div className="bg-beige_/95 shadow-md mx-auto p-2 relative w-[96%] rounded-xl h-[350px] flex flex-col justify-center">
        <Carousel
          renderArrowPrev={renderCustomPrevArrow}
          renderArrowNext={renderCustomNextArrow}
          renderIndicator={renderIndicator}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <div className="relative mx-auto h-80 w-80">
              <Image
                src="/img/bleed_it_out.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 120px"
              />
            </div>
          </div>
          <div>
            <div className="relative mx-auto h-80 w-80">
              <Image
                src="/img/come_and_get_your_love.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 120px"
              />
            </div>
          </div>
          <div>
            <div className="relative mx-auto h-80 w-80">
              <Image
                src="/img/hotel_california.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 120px"
              />
            </div>
          </div>
          <div>
            <div className="relative mx-auto h-80 w-80">
              <Image
                src="/img/lovely.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 120px"
              />
            </div>
          </div>
          <div>
            <div className="relative mx-auto h-80 w-80">
              <Image
                src="/img/man_without_love.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 120px"
              />
            </div>
          </div>
          <div>
            <div className="relative mx-auto h-80 w-80">
              <Image
                src="/img/no_scrubs.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 120px"
              />
            </div>
          </div>
          <div>
            <div className="relative mx-auto h-80 w-80">
              <Image
                src="/img/open_letter.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 120px"
              />
            </div>
          </div>
          <div>
            <div className="relative mx-auto h-80 w-80">
              <Image
                src="/img/red_right_hand.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 120px"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Recommended;
