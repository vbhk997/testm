import Image from 'next/image';
import SlidingCarousel from './slidingcarousel';

const Hero = () => {
  return (
    <div className="h-screen w-full border-b border-ui-border-base relative bg-ui-bg-subtle font-sans">
      <div className="w-full h-full relative">
        <Image
          src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
          alt="Main Banner"
          layout="fill"
          objectFit="cover"
          className="bannerImage"
        />

        {/* Carousel for Desktop */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-1/2 lg:left-[70%]">
          <SlidingCarousel />
        </div>

        {/* Boxes for Mobile */}
        <div className="flex flex-col lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 w-full px-4">
          <div className="w-full bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="text-left">
              <h2 className="text-center text-2xl mb-4">WHO WE ARE</h2>
              <p className="text-center text-lg">
                MyMedha is a conscious and courageous initiative designed to assist young individuals in steering their careers towards success effortlessly and practically.
              </p>
            </div>
          </div>
          <div className="w-full bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="text-left">
              <h2 className="text-center text-2xl mb-4">OUR PURPOSE</h2>
              <p className="text-center text-lg">
                To connect people with their inner self in order to harness immense inherent potential for their success and growths well as to manifest their dreams into reality.
                Facilitate organisations be future ready with right, passionate and committed talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
