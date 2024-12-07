"use client";

import { Heading } from "@medusajs/ui";
import Image from 'next/image';
import { useEffect } from 'react';

const Founder = () => {
  useEffect(() => {
    const quote = document.querySelector('.quote-container');
    if (quote) {
      quote.classList.add('quote-enter');
    }
  }, []);

  return (
    <div className="p-4 lg:p-6">
      <Heading level="h1" className="text-4xl font-bold text-center mb-12">Our Founder</Heading>

      <div className="space-y-16">
        {/* Section 1: Founder Introduction */}
        <div className="lg:flex lg:items-center lg:space-x-8">
          <div className="lg:w-1/2 lg:pl-0">
            <Image
              src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/img1.png"
              alt="Founder image"
              width={600}
              height={400}
              className="w-full h-auto rounded-md shadow-lg object-cover lg:rounded-none lg:shadow-none"
              style={{ borderRadius: '0.375rem' }} // Ensure slight rounding
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-0">
            <h2 className="text-3xl font-semibold text-gray-800">Kumar Priyaranjan</h2>
            <p className="text-xl text-gray-600 mt-2">Chief Mentor</p>
            <div className="relative">
              <div className="quote-border absolute inset-0"></div>
              <blockquote className="quote-container mt-6 text-lg italic text-gray-700 pl-6">
              “Spirituality is connecting with self, exploring true potential and harness it to manifest your dreams”
              </blockquote>
            </div>
          </div>
        </div>

        {/* Section 2: Educational Background (Flip Layout) */}
        <div className="lg:flex lg:items-center lg:space-x-8 lg:flex-row-reverse">
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative">
              <Image
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/img2.png" // Separate image link
                alt="Education image 1"
                width={300}
                height={200}
                className="w-full h-auto rounded-md shadow-lg object-cover lg:rounded-none lg:shadow-none"
                style={{ borderRadius: '0.375rem' }} // Ensure slight rounding
              />
            </div>
            <div className="relative">
              <Image
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/img3.png" // Separate image link
                alt="Education image 2"
                width={300}
                height={200}
                className="w-full h-[250px] rounded-md shadow-lg object-cover lg:rounded-none lg:shadow-none" // Fixed height
                style={{ borderRadius: '0.375rem' }} // Ensure slight rounding
              />
            </div>
            <div className="relative">
              <Image
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/img7.png" // Separate image link
                alt="Education image 3"
                width={300}
                height={200}
                className="w-full h-auto rounded-md shadow-lg object-cover lg:rounded-none lg:shadow-none"
                style={{ borderRadius: '0.375rem' }} // Ensure slight rounding
              />
            </div>
            <div className="relative">
              <Image
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/img6.png" // Separate image link
                alt="Education image 4"
                width={300}
                height={200}
                className="w-full h-auto rounded-md shadow-lg object-cover lg:rounded-none lg:shadow-none"
                style={{ borderRadius: '0.375rem' }} // Ensure slight rounding
              />
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-10"> {/* Added right padding */}
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Kumar has worked with renowned organizations such as Tata’s (Taj Group of Hotels, Dr. Reddy’s Laboratories Ltd.), Transport Corporation of India Ltd., Raychem RPG, Hikal Ltd., Welspun Corp Ltd., and IPHC.</li>
              <li>He holds degrees in Science and Law and has completed Strategic Human Resource Management from Ross School of Business, University of Michigan, Ann Arbor, US.</li>
              <li>He has over 32 years of corporate experience in innovating organisation development processes, career design interventions, Strength based Executive Coaching, professional & life transformation counselling, leadership development, project management.</li>
              <li>He is also a Strength Based Executive Coach certified by Gallup, US, with global experience in USA, UK, Singapore, Mexico and UAE</li>
              <li>His commendable work has enabled him to win various awards such as &#39;CHRO of the Year award 2020&#39;, &#39;CSR Leadership Excellence Award 2019&#39;.</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Professional Experience */}
        <div className="lg:flex lg:items-center lg:space-x-8">
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative">
              <Image
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/img4.png" // Separate image link
                alt="Experience image 1"
                width={300}
                height={200}
                className="w-full h-[240px] rounded-md shadow-lg object-cover lg:rounded-none lg:shadow-none"
                style={{ borderRadius: '0.375rem' }} // Ensure slight rounding
              />
            </div>
            <div className="relative">
              <Image
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/img5.png" // Separate image link
                alt="Experience image 2"
                width={300}
                height={200}
                className="w-full h-[240px] rounded-md shadow-lg object-cover lg:rounded-none lg:shadow-none"
                style={{ borderRadius: '0.375rem' }} // Ensure slight rounding
              />
            </div>
            <div className="relative">
              <Image
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/img8.png" // Separate image link
                alt="Experience image 3"
                width={300}
                height={200}
                className="w-full h-[230px] rounded-md shadow-lg object-cover lg:rounded-none lg:shadow-none"
                style={{ borderRadius: '0.375rem' }} // Ensure slight rounding
              />
            </div>
            <div className="relative">
              <Image
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/img9.png" // Separate image link
                alt="Experience image 4"
                width={300}
                height={200}
                className="w-full h-auto rounded-md shadow-lg object-cover lg:rounded-none lg:shadow-none"
                style={{ borderRadius: '0.375rem' }} // Ensure slight rounding
              />
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Apart from his professional experience he is also a vivid nature lover and a wildlife photographer.</li>
              <li>He is also a Certified Yoga Teacher, and a Spiritual practitioner and a teacher for over 25 years.</li>
              <li>He has also been conducting mythology based leadership development workshops and career planning interventions.</li>
              <li>Has been delivering guest lectures and conducting leadership workshops in various management institute of repute like IIM, ISB, KJ Somaiya.</li>
              <li>Left the highest paying corporate role to enable young minds to follow the right path by recognizing and utilizing their inherent potential for a bright future.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
