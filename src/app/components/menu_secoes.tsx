import Image from 'next/image';

export default function MenuSecoes() { 
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded transition">
          <Image
            src="/Phones.png"
            alt="Icone smartphone"
            width={24}
            height={24}
            priority
          />
          <span className="text-white">Phone</span>
        </div>
        <Image
          src="/Devider.png"
          alt="Divisor de seções"
          width={3}
          height={3}
          priority
        />
        {/* Item do Menu 2 */}
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded transition">
          <Image
            src="/Computers.png"
            alt="Icone computador"
            width={24}
            height={24}
            priority
          />
          <span className="text-white">Computers</span>
        </div>
        <Image
          src="/Devider.png"
          alt="Divisor de seções"
          width={3}
          height={3}
          priority
        />
        {/* Item do Menu 3 */}
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded transition">
          <Image
            src="/Gaming.png"
            alt="Icone smart watches"
            width={24}
            height={24}
            priority
          />
          <span className="text-white">Smart Watches</span>
        </div>
        <Image
          src="/Devider.png"
          alt="Divisor de seções"
          width={3}
          height={3}
          priority
        />
        {/* Item do Menu 4 */}
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded transition">
          <Image
            src="/Cameras.png"
            alt="Icone Cameras"
            width={24}
            height={24}
            priority
          />
          <span className="text-white">Cameras</span>
        </div>
        <Image
          src="/Devider.png"
          alt="Divisor de seções"
          width={3}
          height={3}
          priority
        />
        {/* Item do Menu 5 */}
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded transition">
          <Image
            src="/Headphones.png"
            alt="Icone Headphones"
            width={24}
            height={24}
            priority
          />
          <span className="text-white">Headphones</span>
        </div>
        <Image
          src="/Devider.png"
          alt="Divisor de seções"
          width={3}
          height={3}
          priority
        />
        {/* Item do Menu 6 */}
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded transition">
          <Image
            src="/Gaming.png"
            alt="Icone Gaming"
            width={24}
            height={24}
            priority
          />
          <span className="text-white">Gaming</span>
        </div>
      </div>
    </div>
  );
}