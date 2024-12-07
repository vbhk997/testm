import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PopupProps {
  name: string;
  designation: string;
  imageUrl: string;
  additionalInfo: string[];
  onClose: () => void;
  books: string[]; // Array of book image URLs
}

const Popup: FC<PopupProps> = ({
  name,
  designation,
  imageUrl,
  additionalInfo,
  onClose,
  books
}) => {
  const [photoHeight, setPhotoHeight] = useState<number>(100); // Default height

  useEffect(() => {
    const getImageHeight = (src: string) =>
      new Promise<number>((resolve) => {
        const img = document.createElement('img');
        img.src = src;
        img.onload = () => {
          resolve(img.height);
        };
        img.onerror = () => {
          resolve(100); // Fallback height
        };
      });

    const loadImageHeight = async () => {
      const height = await getImageHeight('https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/Untitled1.png');
      setPhotoHeight(height);
    };

    loadImageHeight();
  }, []);

  const reducedSize = photoHeight * 0.5; // Reduce size to 50% of the original

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex">
          <div className="relative w-32 h-32 mr-8">
            <Image
              src={imageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">{name}</h2>
            <p className="text-lg text-gray-700 mb-4">{designation}</p>
            <div className="text-gray-600 mb-4">
              {additionalInfo.map((info, index) => (
                <p key={index} className="mb-2">{info}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Single Strip of Photos with consistent height */}
        <div className="mt-6 flex overflow-x-auto items-center justify-center">
          <div className="flex space-x-4">
            {books.map((book, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center"
                style={{ height: `${reducedSize}px` }}
              >
                <Image
                  src={book}
                  alt={`Book ${index + 1}`}
                  width={reducedSize} // Reduced size width
                  height={reducedSize} // Reduced size height
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* More About Our Founder Link */}
        {name === 'Priyaranjan Kumar' && (
          <div className="text-center mt-6">
            <Link href="/our-founder" className="text-blue-500 hover:underline">
              More about our founder
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
