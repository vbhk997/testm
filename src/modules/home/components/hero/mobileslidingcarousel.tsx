"use client";

import { useEffect, useState } from 'react';
import clsx from 'clsx';

const MobileCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pages = [
    {
      title: 'WHO WE ARE',
      content: `MyMedha is a conscious and courageous initiative designed to assist young individuals in steering their careers towards success effortlessly and practically.`
    },
    {
      title: 'OUR MISSION',
      content: `To facilitate inner transformations in at least 10 million people by 2030 by harnessing immense inherent potential to the fullest for own growth and successes.`
    },
    {
      title: 'OUR PURPOSE',
      content: `To connect people with their inner self in order to harness immense inherent potential for their success and growths well as to manifest their dreams into reality. Facilitate organisations be future ready with right, passionate and committed talent.`
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [pages.length, isPaused]);

  const goToPage = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div
      className="relative overflow-hidden h-[400px] w-full bg-transparent"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {pages.map((page, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full flex flex-col justify-center items-center px-4 bg-transparent"
          >
            <h2 className="text-center text-xl mb-2">{page.title}</h2>
            <p className="text-center text-sm">{page.content}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {pages.map((_, index) => (
          <div
            key={index}
            onClick={() => goToPage(index)}
            className={clsx(
              "w-3 h-3 rounded-full cursor-pointer transition-colors duration-300",
              { "bg-gray-900": index === currentPage, "bg-gray-600": index !== currentPage }
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
