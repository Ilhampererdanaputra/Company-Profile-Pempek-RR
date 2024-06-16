import Image from "next/image"
import { GrSecure } from 'react-icons/gr';
import { LuSoup } from 'react-icons/lu';
import { FaBowlFood } from 'react-icons/fa6';

const bgImage = {
    backgroundImage: `url(${"images/bck.jpg"})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",

};
const Banner = () => {
  return (
    <>
    <span id="about"></span>
    <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/*Image Section */}
                <div data-aos="zoom-in">
                    <Image src={"/images/logo.png"} alt="Banner" width={200} height={200} className="
                    max-w-[500px] w-full mx-auto spin drop-shadow-xl"/>
                </div>
                {/*Text Content Section */}
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 
                    data-aos="fade-up"
                    className="text-3xl sm:text-4xl sm:py-10 font-bold font-cursive">Tentang Kami</h1>
                    <p 
                    data-aos="fade-up"
                    className="text-sm text-gray-500 tracking-wide leading-5">
                       Tersedia sejak hari pertama kami didirikan, Pempek RR berkomitmen untuk menyajikan kelezatan Palembang dengan cita rasa yang autentik. Setiap hidangan kami adalah bukti dari dedikasi kami untuk kepuasan pelanggan, karena untuk kami, makanan bukan hanya tentang rasa, tapi juga tentang pengalaman yang memuaskan.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                               <GrSecure  className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100"/>
                               <span>Pempek</span> 
                            </div>                     
                            <div 
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="flex items-center gap-3">
                               <LuSoup  className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100"/>
                               <span>Cemilan</span> 
                            </div>                    
                            < div 
                             data-aos="fade-up"
                             data-aos-delay="500"
                             className="flex items-center gap-3">
                               <FaBowlFood  className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100"/>
                               <span>Dan yang lain</span>                               
                            </div>
                        </div>
                        <div 
                        
                        data-aos="slide-left"
                        className="border-l-4 border-primary/50 pl-6 space-y-3 ">
                            <h1 className="text-2xl font-semibold font-cursive">
                                Pempek Lover
                                </h1>
                            <p className="text-gray-500 text-sm">
                                {" "}
                                Tak ada yang bisa menandingi kelezatan pempek, tiap gigitan adalah petualangan rasa yang tak terlupakan. Yuk, nikmati sensasi autentik Palembang dalam setiap penyajiannya!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner
