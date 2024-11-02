import Image from 'next/image';

export default function Banner1() {
    return (
        <div
            className="full flex flex-col lg:flex-row items-center justify-center"
            style={{ background: 'linear-gradient(90.7deg, #211C24 0.64%, #211C24 101%)' }}
        >
            <div className=" text-center lg:text-left relative lg:w-1/2 flex flex-col items-center lg:pl-60  lg:items-start justify-center">
                <h1 className="font-sf-pro-display text-slate-500 p-5 sm:text-[64px] md:text-[80px]  lg:text-[23px] leading-tight">
                    <span className="font-light">Pro.Beyond.</span>
                </h1>
                <h1 className="font-sf-pro-display text-white text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-tight">
                    <span className="font-light">IPhone 14</span> <span className="font-bold">Pro</span>
                </h1>

                <h2 className="font-sf-pro-display text-slate-200 text-[16px] m-8 sm:text-[64px] md:text-[68px] lg:text-[25px] leading-relaxed mt-4">
                    Created to change everything for the better. For everyone
                </h2>

                <a href='/shop' className="font-sf-pro-display mt-6 border p-2 sm:p-3 md:px-10 lg:px-16 border-slate-400 rounded-md text-slate-200 text-[14px] sm:text-[18px] md:text-[20px] leading-[24px] hover:bg-slate-600 hover:text-white active:bg-slate-700 transition duration-200">
                    Shop Now
                </a>
            </div>

            <div className="flex justify-center lg:justify-end items-center lg:w-1/2 mt-8 lg:mt-20 lg:mr-48">
                <Image
                    src="/iphone image.png"
                    className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[450px]"
                    alt="Icone smartphone"
                    width={450}
                    height={100}
                    priority
                />
            </div>
        </div>
    );
}
