import Image from 'next/image';
import { Heading } from "@medusajs/ui";

const AboutUsMobile = () => {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] mb-6">
        <Image
          src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/ny.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <Heading level="h1" className="text-2xl font-bold text-white text-center">
            About Us
          </Heading>
        </div>
      </div>

      {/* Introduction and Mission Section */}
      <div className="flex flex-col space-y-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <Heading level="h2" className="text-lg font-semibold mb-2">
            What is <span className="inline-block">Medha</span>?
          </Heading>
          <p className="text-sm text-gray-700 mb-2">
            “MyMedha” translates to “My Talent” and is a dynamic platform that nurtures talent, fosters personal growth, and prepares individuals for leadership roles in various environments.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            We focus on identifying and honing the unique strengths of each individual, providing them with the tools and guidance they need to thrive in both academic and organizational settings.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            We are committed to fostering a culture of personal empowerment, ensuring everyone is equipped to navigate the challenges of today&#39;s dynamic world.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <Heading level="h2" className="text-lg font-semibold mb-2">Our Mission</Heading>
          <ul className="list-disc pl-4 text-sm text-gray-700 mb-2">
            <li>Bridge the gap between aspirations and achievements, helping individuals turn their dreams into reality through skill development and opportunities for success.</li>
            <li>Leverage over 200 years of collective corporate and spiritual experience.</li>
            <li>Provide invaluable insights derived from wildlife learning.</li>
            <li>Address organizational challenges and leadership dilemmas comprehensively.</li>
            <li>Align talent and organizational goals for sustainable transformational results.</li>
          </ul>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="w-full mb-4">
          <Image
            src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
            alt="Purpose and Learning agility"
            layout="responsive"
            width={300}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <Heading level="h3" className="text-md font-semibold mb-2">Why the Falcon?</Heading>
          <p className="text-sm text-gray-700">
            We cultivate adaptability and innovativeness, encouraging our members to embrace change.
          </p>
          <Heading level="h3" className="text-md font-semibold mt-4 mb-2">Incorporation of Spirituality</Heading>
          <p className="text-sm text-gray-700">
            Our programs emphasize learning agility, helping participants adapt to new trends.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <Heading level="h2" className="text-lg font-semibold mb-2">Join Us</Heading>
        <p className="text-sm text-gray-700">
          Ready to take the next step in your career? Join MyMedha today and unlock your full potential!
        </p>
      </div>
    </div>
  );
};

export default AboutUsMobile;
