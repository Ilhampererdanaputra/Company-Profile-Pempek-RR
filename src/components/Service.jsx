import React from 'react';
import Image from "next/image";



const ServiceData = [
    {
        id:1,
        img:"/images/img1.png",
        name:"Model",
        desciption :
        "Terbuat dari adonan ikan dan tapioka, disajikan dengan kuah kaldu yang gurih, yang dibuat dari rebusan kepala udang atau ikan Hidangan ini sering disertai dengan potongan bengkuang, soun, dan taburan bawang goreng serta daun seledri untuk menambah aroma dan cita rasa. ",
    },
    {
        id:2,
        img:"/images/img2.png",
        name:"Pempek Kecil-Kecil",
        desciption :
        "camilan khas Palembang yang sangat terjangkau, biasanya dijual seharga sekitar seribu rupiah per biji. Teksturnya kenyal dengan rasa ikan yang pas, cocok dinikmati kapan saja.",
    },
    {
        id:3,
        img:"/images/img3.png",
        name:"Pempek Kapal Selam",
        desciption :
        "Pempek Kapal Selam, kuliner khas Palembang yang menggoda selera! Dibuat dari adonan ikan tenggiri lembut dengan isi telur utuh yang meleleh, lalu digoreng. Disajikan dengan kuah cuko asam, manis, dan pedas yang khas, setiap gigitan membawa sensasi rasa yang unik dan tak terlupakan. Nikmati kelezatan legendaris ini sekarang!",
    },
    {
        id:4,
        img:"/images/img4.png",
        name:"Tekwan",
        desciption :
        "Dengan kuah kaldu udang yang kaya rasa dan bakso ikan yang lembut. Disajikan dengan tambahan soun, irisan bengkuang, dan daun seledri yang menambah aroma dan tekstur. Kuah kaldu udangnya bening dan memiliki kombinasi rasa asam, manis, dan gurih yang sangat memikat.",
    },
]
const Service = () => {
  return  (
    <>
    <span id="produk"></span>
        <div className="py-10">
            <div className="containeer">
                 {/* header title*/}
                <div data-aos="fade-up" className="text-center mb-20">
                    <h1 className="text-4xl font-bold font-cursive text-gray-800">
                        Pempek Terbaik Untuk Anda
                    </h1>
                </div>
                {/*Service card Section*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 md:gap-5 place-items-center">
                    {ServiceData.map((data, index) => {
                            return (
                                
                                <div data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={index}
                                className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[400px]  group relaive">
                                      {/*img content*/}
                                    <div className="h-[140px]">
                                         <Image src={data.img} alt="Produk" width={200} height={200} 
                                         className="max-w-[140px] block mx-auto transform -translate-y-14 group-hover:scale-110 group hover:rotate-6 duration-300"
                                         />
                                     </div>
                                   {/*text content*/}
                                   <div className="p-4 text-center">
                                    <h1 className='text-xl font-bold'>{data.name}
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                        {data.desciption}
                                        </p>
                                    </h1>
                                   </div>

                                </div>  
                            );
                        })}
                    <div></div>
                </div>
            </div>
        </div>
        </>
 );
};

export default Service;
