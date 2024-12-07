import React from 'react';

interface MobilePopupProps {
  name: string;
  designation: string;
  imageUrl: string;
  additionalInfo: string[];
  onClose: () => void;
  books: string[]; // Array of book image URLs
}

const MobilePopup: React.FC<MobilePopupProps> = ({
  name,
  designation,
  imageUrl,
  additionalInfo,
  onClose,
  books,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg max-h-screen overflow-y-auto w-full sm:w-4/5 md:w-1/2 lg:w-1/3 relative">
        {/* Close button inside the popup box */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl"
        >
          &times;
        </button>
        
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>
          <p className="text-gray-600 text-center mb-4">{designation}</p>
          <div className="text-gray-800">
            {additionalInfo.map((info, index) => (
              <p key={index} className="mb-2">{info}</p>
            ))}
          </div>

          {/* Single Strip of Photos */}
          <div className="mt-6 flex overflow-x-auto space-x-2">
            {books.map((book, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={book}
                  alt={`Book ${index + 1}`}
                  className="object-cover max-h-24 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePopup;
