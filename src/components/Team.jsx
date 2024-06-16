import React from 'react';
import Image from "next/image";



const TeamData = [
    {
        id:1,
        img:"/images/karakter2.png",
        name:"Wahyu",
        desciption :
        "Wahyu mengawasi seluruh operasi Pempek RR, memastikan bahwa semua proses berjalan dengan lancar dan efisien. Ia bertanggung jawab atas pengelolaan tim, pengambilan keputusan penting, dan menjaga standar kualitas produk. ",
    },
    {
        id:2,
        img:"/images/karakter3.png",
        name:"Rizqiya",
        desciption :
        "Rizqiya merancang dan melaksanakan strategi pemasaran untuk meningkatkan penjualan dan brand awareness. Ia mengelola kampanye promosi, hubungan pelanggan, serta media sosial Pempek RR.",
    },
    {
        id:3,
        img:"/images/karakter1.png",
        name:"Eko",
        desciption :
        "Eko adalah ahli dalam membuat pempek dengan resep tradisional yang autentik. Ia memastikan setiap pempek yang dibuat memiliki cita rasa yang khas dan kualitas yang tinggi.",
    },
    {
        id:4,
        img:"/images/karakter4.png",
        name:"Jesika",
        desciption :
        "Jesika berperan dalam proses produksi pempek sehari-hari, memastikan efisiensi dan kebersihan dalam setiap tahap pembuatan. Ia juga membantu dalam pengembangan varian rasa baru.",
    },
    {
        id:5,
        img:"/images/karakter5.png",
        name:"Dina",
        desciption :
        "Dina bertanggung jawab atas persiapan bahan baku dan menjaga standar kebersihan serta keamanan dalam proses produksi. Ia juga berkontribusi dalam menjaga kualitas dan konsistensi produk pempek.",
    },
]
const Service = () => {
  return  (
    <>
    <span id="teams"></span>
        <div className="py-10">
            <div className="containeer">
                 {/* header title*/}
                <div data-aos="fade-up" className="text-center mb-20">
                    <h1 className="text-4xl font-bold font-cursive text-gray-800">
                        Tim Kami
                    </h1>
                </div>
                {/*Service card Section*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14 md:gap-5 place-items-center">
                    {TeamData.map((data, index) => {
                            return (
                                
                                <div data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={index}
                                className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[400px]  group relaive">
                                    <div className=" p-4 text-center mb-2"></div>
                                    <div className=" p-4 text-center mb-2"></div>
                                    <div className=" p-4 text-center mb-2"></div>
                                    <div className=" p-4 text-center mb-2"></div>
                                    <div className=" p-4 text-center mb-2"></div>
                                      {/*img content*/}
                                    <div className="h-[140px]">
                                         <Image src={data.img} alt="Team" width={200} height={200} 
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
                </div>
            </div>
        </div>
        </>
 );
};

export default Service;
