"use client"
import { useState,useEffect } from 'react';
import Image from 'next/image';
import Popup from './popup'; // Adjust the path to where your Popup component is located
import MobilePopup from "./mobilepopup"; 

const leadership = [
  {
    name: 'Priyaranjan Kumar',
    designation: 'Founder/CEO',
    imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/kp.png',
    additionalInfo: [
      'Priyaranjan Kumar is the visionary founder who leads the company with innovative strategies and a passion for empowering youth.',
      'He is a Strength-Based Executive Coach certified by Gallup, US, with extensive global experience across the USA, UK, Singapore, Mexico, and UAE.',
      'Priyaranjan has received numerous awards, including HR Leadership Awards in multiple organizations, CHRO of the Year award 2020, and CSR Leadership Excellence Award 2019.',
      'He has worked with renowned organizations such as Tata’s (Taj Group of Hotels, Dr. Reddy’s Laboratories Ltd.), Transport Corporation of India Ltd., Raychem RPG, Hikal Ltd., Welspun Corp Ltd., and IPHC.',
      'He holds degrees in Science and Law and has completed Strategic Human Resource Management from Ross School of Business, University of Michigan, Ann Arbor, US.',
      '',
      'Organizations he has worked with:'
    ],
    books: ['https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled1.png',
        'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled2.png',
        'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled3.png',
        'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled4.png',
        'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled5.png',
        'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled6.png',
        'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled7.png',
        'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled8.png',
        'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled9.png',
    ]
  },
  {
    name: 'Swami Purnatej Ji',
    designation: '',
    imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg',
    additionalInfo: [
      'Swami Purnatej Ji offers spiritual guidance and wisdom, helping the team stay aligned with the company’s values.'
    ],
    books:[]
  },
  {
    name: 'BalaKrishna L.',
    designation: '',
    imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/balakrishna.png',
    additionalInfo: [
      'BalaKrishna L. is an inspirational and transformational leader with extensive experience in talent identification, retention, and development for future leadership within organizations',
      'He has successfully held top executive roles including Managing Director, Regional Director, and Group Consultant at prominent companies such as Doehler India, IFF, Brenntag Ingredients, Danisco, and Hindustan Lever',
      'BalaKrishna is instrumental in driving rapid business growth in the APAC region, significantly improving Employee Engagement scores and Net Promoter Scores (NPS).',
      'He Holds dual master’s degrees in Science and Business Administration, complemented by completion of the BOSS Leadership Program at INSEAD, France.',
      '',
      'Organizations he has worked with:'
    ],
    books:['https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled10.png',
      'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled11.png',
      'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled12.png',
      'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled13.png',
      'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled14.png'
    ]
  },
  {
    name: 'Dr. Myra White',
    designation: '',
    imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/drmyrawhite.png',
    additionalInfo: [
      'Dr. White is a professor at Harvard in the graduate ALM management program and a clinical instructor in the Department of Psychiatry at Harvard Medical School.',
      'She has a Ph.D. in psychology from Harvard University, a J.D. from Harvard Law School, and an M.S. in Electrical and Computer Engineering from Northwestern University.',
      'She has over two decades of experience in designing and conducting training programs for international and U.S. clients and has been teaching management courses at Harvard for over 15 years.',
      'Her innovative courses at Harvard on leadership and virtual teams have made her a highly sought teacher and in 2007 she was the Harvard recipient of the JoAnne Fussa Distinguished Teaching Award.',
      'Dr. White authored the celebrated book "Follow the Yellow Brick Road: A Harvard Psychologist’s Guide to Becoming a Superstar”, which is based on her research on how ordinary people become great leaders. “The Superstar Syndrome-Demy PB: The making of a champion”.'
    ],
    books:['https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled16.png',
      'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled17.png',
      'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled18.png'
    ]
  }
];

const honoraryAdvisors = [
  {
    name: 'Satyavathi B.',
    designation: 'Honorary Advisor',
    imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/sathyavathi_b.png',
    additionalInfo: [
      'Sathyavathi is an accomplished ELT professional and an educator with a strong dedication to enhancing quality of education in the country. She excels in mentoring educators and implementing effective teaching/trainer’s-learning methodologies.',
      'Sathyavathi’s career spans significant roles such as Senior Leader in Quality Analysis at Kidvento Education and Research, where she ensures adherence to global standards through innovative AI tools and cross-functional collaboration.',
      'She has a rich background in teaching communications at various levels, supported by a robust academic foundation including an MBA and TESOL certification.',
      'Sathyavathi brings a wealth of skills in curriculum design, language assessments, and online teaching & training.',
      'Her proficiency in mentoring, interpersonal communication, and quality assurance underscores her role as a trusted advisor.'
    ],
    books:[]
  },
  {
    name: 'Nilotpal K Dutta',
    designation: 'Honorary Advisor',
    imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/nkd.png',
    additionalInfo: [
      'Nilotpal has worked for more than three decades in various sales and business leadership positions in the IT industry.',
      'He has worked extensively across industry segments and regions, and has closely managed CXO relationships.',
      'A strong advocate of hiring from campus and patiently nurturing them, he has mentored several early career professionals.',
      'Nilotpal holds a Bachelor of Engineering from Birla Institute of Technology, Mesra; Post Graduate Certificate in Business Management from XLRI Jamshedpur, and Professional Certificate in Financial Analysis and Financial Management from IIM Kozhikode.',
      'Nilotpal is based out of Bangalore and a published author of three novels.'
    ],
    books:[]
  },
  {
    name: 'Mona Tripathi',
    designation: 'Honorary Advisor',
    imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/monatripathi.png',
    additionalInfo: [
      'Mona brings over 15 years of experience in transforming people practices in multiple industry verticals like media, food & beverages, & consulting.',
      'She has worked with Steve & Berry’s; Future Group; Jagran group (Radio City, Mid-Day), the leading media house; Sapphire Foods (KFC & Pizza Hut businesses in India).',
      'She is trained in Reiki and practices for Yoga and likes listening to music and helping people plan their career meaningfully.',
      'She has extensively worked in organisation’s capability building and development initiatives like creating high performance work culture, people centric organisation.',
      'Mona is an MBA from IMSR and specialisation in HRM from WeSchool, Mumbai. She complete post graduate program in Senior Leadership Management from XLRI, Jamshedpur'
    ],
    books:[]
  }
];

const softwareTeam = [
  {
    name: 'Shivam Saluja',
    designation: 'Software Engineer',
    imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg',
    additionalInfo: [
      'Shivam Saluja is a key software engineer developing and maintaining innovative software solutions.'
    ],
    books:[]
  },
  {
    name: 'Vaibhav Kumar',
    designation: 'Software Developer',
    imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/vaibhav.jpg',
    additionalInfo: [
      'Vaibhav Kumar contributes to software development and technical problem-solving.'
    ],
    books:[]
  }
];

const MeetOurLeaders = () => {
  const [selectedPerson, setSelectedPerson] = useState<{
    name: string;
    designation: string;
    imageUrl: string;
    additionalInfo: string[];
    books: string[];
  } | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closePopup = () => setSelectedPerson(null);

  const handlePersonClick = (person: {
    name: string;
    designation: string;
    imageUrl: string;
    additionalInfo: string[];
    books: string[];
  }) => {
    setSelectedPerson(person);
  };

  return (
    <div className="w-full bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Our Leadership</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Apex Resource Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer"
                onClick={() => handlePersonClick(leader)}
              >
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={leader.imageUrl}
                    alt={leader.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">{leader.name}</h3>
                <p className="text-gray-600 text-center">{leader.designation}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Honorary Advisory Council</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {honoraryAdvisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer"
                onClick={() => handlePersonClick(advisor)}
              >
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={advisor.imageUrl}
                    alt={advisor.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">{advisor.name}</h3>
                <p className="text-gray-600 text-center">{advisor.designation}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Technology & Design Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {softwareTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer"
                onClick={() => handlePersonClick(member)}
              >
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedPerson && (
        isMobile ? (
          <MobilePopup
            name={selectedPerson.name}
            designation={selectedPerson.designation}
            imageUrl={selectedPerson.imageUrl}
            additionalInfo={selectedPerson.additionalInfo}
            books={selectedPerson.books}
            onClose={closePopup}
          />
        ) : (
          <Popup
            name={selectedPerson.name}
            designation={selectedPerson.designation}
            imageUrl={selectedPerson.imageUrl}
            additionalInfo={selectedPerson.additionalInfo}
            books={selectedPerson.books}
            onClose={closePopup}
          />
        )
      )}
    </div>
  );
};

export default MeetOurLeaders;
