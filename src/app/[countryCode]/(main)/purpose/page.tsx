import { Heading } from "@medusajs/ui";
import Image from 'next/image';

const Purpose = () => {
  return (
    <div className="p-4">
      <Heading level="h1" className="text-3xl font-bold text-center mb-8">Purpose</Heading>

      <div className="hidden lg:flex flex-col space-y-8">
        {/* Large screens */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center`}>
            <div className="flex-1">
              <Image
                src={`https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg`} // Replace with dynamic paths if needed
                alt={`Purpose image ${index + 1}`}
                width={500} // Adjust size as needed
                height={300} // Adjust size as needed
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1 p-4">
              <p className="text-lg">This is some text for section {index + 1}. Replace this with your content.</p>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden">
        {/* Mobile screens */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="mb-8">
            <Image
              src={`https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg`} // Replace with dynamic paths if needed
              alt={`Purpose image ${index + 1}`}
              width={500} // Adjust size as needed
              height={300} // Adjust size as needed
              className="w-full h-auto mb-4"
            />
            <p className="text-lg">This is some text for section {index + 1}. Replace this with your content.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Purpose;
