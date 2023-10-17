import SectionTitle from "../../components/SectionTitle";
import pray1 from '../../assets/pray/pray1.webp';
import pray2 from '../../assets/pray/pray2.webp';
import pray3 from '../../assets/pray/pray3.webp';
import pray4 from '../../assets/pray/pray4.webp';
import pray5 from '../../assets/pray/pray5.webp';
import pray6 from '../../assets/pray/pray6.webp';
import pray7 from '../../assets/pray/pray7.webp';

const HowToPray = () => {
    return (
        <div className="lg:mx-8 mx-5">
            <SectionTitle title='Learn How to Pray Namaz'/>

            <p>Assalamualaikum, we put together this easy to follow step by step guide for Muslim’s looking to learn how to properly perform salah (prayer) according to Qur’an and Sunnah of the Prophet Muhammad (ﷺ). This article will not simply just list the steps, but rather will give you a detailed and comprehensive guide to learning ALL about salat.</p>

            <div className="grid gap-3 md:gap-5 justify-center items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                <div className="">
                    <img src={pray1} alt="img" />
                    <div className="rounded-md bg-white shadow-md p-5 max-w-200 mx-auto mt-20">
                        <h2 className="text-green-600 text-center text-2xl font-medium">Takbeerat</h2>
                        <p className='text-yellow-500 text-center text-base font-medium pt-5'>(Posture 1)</p>
                    </div>
                </div>
                
                <div className="">
                    <img src={pray2} alt="img" />
                    <div className="rounded-md bg-white shadow-md p-5 max-w-200 mx-auto mt-20">
                        <h2 className="text-green-600 text-center text-2xl font-medium">Ruku</h2>
                        <p className='text-yellow-500 text-center text-base font-medium pt-5'>(Posture 2)</p>
                    </div>
                </div>
                <div className="">
                    <img src={pray3} alt="img" />
                    <div className="rounded-md bg-white shadow-md p-5 max-w-200 mx-auto mt-20">
                        <h2 className="text-green-600 text-center text-2xl font-medium">Sajjadh</h2>
                        <p className='text-yellow-500 text-center text-base font-medium pt-5'>(Posture 3)</p>
                    </div>
                </div>
                <div className="">
                    <img src={pray4} alt="img" />
                    <div className="rounded-md bg-white shadow-md p-5 max-w-200 mx-auto mt-20">
                        <h2 className="text-green-600 text-center text-2xl font-medium">Tashahhud</h2>
                        <p className='text-yellow-500 text-center text-base font-medium pt-5'>(Posture 4)</p>
                    </div>
                </div>
                <div className="">
                    <img src={pray5} alt="img" />
                    <div className="rounded-md bg-white shadow-md p-5 max-w-200 mx-auto mt-20">
                        <h2 className="text-green-600 text-center text-2xl font-medium">Lesft Salam </h2>
                        <p className='text-yellow-500 text-center text-base font-medium pt-5'>(Posture 5)</p>
                    </div>
                </div>
                <div className="">
                    <img src={pray6} alt="img" />
                    <div className="rounded-md bg-white shadow-md p-5 max-w-200 mx-auto mt-20">
                        <h2 className="text-green-600 text-center text-2xl font-medium">Right Salam </h2>
                        <p className='text-yellow-500 text-center text-base font-medium pt-5'>(Posture 6)</p>
                    </div>
                </div>
                <div className="">
                    <img src={pray7} alt="img" />
                    <div className="rounded-md bg-white shadow-md p-5 max-w-200 mx-auto mt-20">
                        <h2 className="text-green-600 text-center text-2xl font-medium">Duwa</h2>
                        <p className='text-yellow-500 text-center text-base font-medium pt-5'>(Posture 7)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToPray;