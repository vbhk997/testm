import Image from 'next/image';
import { Heading } from "@medusajs/ui";
import clsx from 'clsx';
import { useState } from 'react';

const AboutUsLarge = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="p-6 md:p-8 lg:p-10">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] mb-8">
        <Image
          src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/ny.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <Heading level="h1" className="text-3xl md:text-5xl font-bold text-white text-center">
            About Us
          </Heading>
        </div>
      </div>

      {/* Introduction and Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="flip-container cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={handleFlip}
        >
          <div className={clsx("flip-card", { "is-flipped": isFlipped })}>
            {/* Front Side */}
            <div className="flip-card-front bg-gray-100 p-6 rounded-lg shadow-md">
              <Heading level="h2" className="text-xl md:text-2xl font-semibold mb-4">
                What is <span className="hover:scale-110 transition-transform duration-300 inline-block">Medha</span>?
              </Heading>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                “MyMedha” translates to “My Talent” and is a dynamic platform that nurtures talent, fosters personal growth, and prepares individuals for leadership roles in various environments.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                We focus on identifying and honing the unique strengths of each individual, providing them with the tools and guidance they need to thrive in both academic and organizational settings.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                We are committed to fostering a culture of personal empowerment, ensuring everyone is equipped to navigate the challenges of today&#39;s dynamic world.
              </p>
            </div>
            {/* Back Side */}
            <div className="flip-card-back bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
              <Heading level="h2" className="text-xl font-semibold mb-4">More About Medha</Heading>
              <p className="text-base md:text-lg text-gray-700">
                Medha is not just about talent; it&#39;s about transformation. We provide a comprehensive approach to personal and professional development that goes beyond the ordinary.
              </p>
              <p className="text-base md:text-lg text-gray-700 mt-4">
                Our unique blend of corporate and spiritual insights helps individuals achieve their highest potential.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <Heading level="h2" className="text-xl md:text-2xl font-semibold mb-4">
            Our Mission
          </Heading>
          <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 mb-4">
            <li>Bridge the gap between aspirations and achievements, helping individuals turn their dreams into reality through skill development and opportunities for success.</li>
            <li>Leverage over 200 years of collective corporate and spiritual experience.</li>
            <li>Provide invaluable insights derived from wildlife learning.</li>
            <li>Address organizational challenges and leadership dilemmas comprehensively.</li>
            <li>Align talent and organizational goals for sustainable transformational results.</li>
          </ul>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 mb-12">
        <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0">
          <Image
            src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
            alt="Purpose and Learning agility"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 md:pl-6">
          <Heading level="h3" className="text-lg md:text-xl font-semibold mb-4">Why the Falcon?</Heading>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            We cultivate adaptability and innovativeness, encouraging our members to embrace change.
          </p>
          <Heading level="h3" className="text-lg md:text-xl font-semibold mb-4">Incorporation of Spirituality</Heading>
          <p className="text-base md:text-lg text-gray-700">
            Our programs emphasize learning agility, helping participants adapt to new trends.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <Heading level="h2" className="text-xl md:text-2xl font-semibold mb-4">Join Us</Heading>
        <p className="text-base md:text-lg text-gray-700">
          Ready to take the next step in your career? Join MyMedha today and unlock your full potential!
        </p>
      </div>
    </div>
  );
};

export default AboutUsLarge;
