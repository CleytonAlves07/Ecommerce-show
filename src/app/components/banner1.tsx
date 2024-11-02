import Image from 'next/image';

export default function Banner1() {
    return (
        <div
            className="h-min" style={{ background: 'linear-gradient(90.7deg, #211C24 0.64%, #211C24 101%)' }}>

            <div className="h-min">
                <h1 className="font-sf-pro-display absolute text-white text-[96px] leading-[72px] top-[40%] left-48">
                    <span className="font-light">IPhone</span> <span className="font-bold">Pro</span>
                </h1>

                <h2 className="font-sf-pro-display absolute text-slate-200 text-[30px] leading-[72px] top-[50%] left-48">
                    Created to change everything for the better. For everyone</h2>
                    
                <button className="font-sf-pro-display absolute border p-3 px-16 border-slate-400 rounded-md text-slate-200 text-[20px] leading-[36px] top-[60%] left-48 hover:bg-slate-600 hover:text-white active:bg-slate-700 transition duration-200">
                    Shop Now
                </button>

            </div>


            <div className="flex justify-end items-center mr-12 ">
                <Image
                    src="/iphone image.png"
                    className='mr-64 mt-11'
                    alt="Icone smartphone"
                    width={450}
                    height={100}
                    priority
                />
            </div>
        </div>

    );
}
