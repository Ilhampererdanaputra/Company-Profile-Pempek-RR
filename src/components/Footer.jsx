import React from 'react';
import { FaFacebook, FaInstagram} from "react-icons/fa6";
import Image from 'next/image';

const FooterLinks = [
    {
        title: "Home",
        links: "/#",
    },
    {
        title: "Tentang Kami",
        links: "/#tentang kami",
    },
    
    {
        title: "Produk",
        links: "/#produk",
    },
];

const bgImage = {
    backgroundImage:"images/bg.jpeg",
    backgroundPoaition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%"
};

const Footer = () => {
  return (
    <div style={bgImage} 
    
    className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
            {/* company details */}
            <div className='py-8 px-4'>
                <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl font-cursive'>
                  {" "}
                  Pempek RR
                  </a>
                <p className='pt-4'>
                  {" "}
                  Selalu segar, selalu enak! Pempek RR menggunakan resep warisan dan bahan berkualitas tinggi untuk menghadirkan rasa yang otentik dan lezat.
                </p>
                <a href="#">

                </a>
            </div>

            {/* Footer Links */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
              {/* first col links */}
              <div className='py-8 px-4'>
                <h1 className='text-xl font-semibold sm:text-left mb-3'>
                  Footer Links
                  </h1>
                  <ul className='space-y-3'>
                    {
                    FooterLinks.map((data, index) => (
                      <li key={index}>
                        <a href={data.links} className='inine-block hover:scale-105 duration-200'
                        >
                          {data.title}</a>
                      </li>
                    ))}
                  </ul>
              </div>

              {/* second col links */}
              <div className='py-8 px-4'>
                <h1 className='text-xl font-semibold sm:text-left mb-3'>
                  Quick Links
                  </h1>
                  <ul className='space-y-3'>
                    {
                    FooterLinks.map((data, index) => (
                      <li key={index}>
                        <a href={data.links} className='inine-block hover:scale-105 duration-200'
                        >
                          {data.title}</a>
                      </li>
                    ))}
                  </ul>
              </div>

              {/* Company Addres Section */}
              <div className='py-8 px-4 col-span-2 sm:col-auto'>
                <h1 className='text-xl font-semibold sm:text-left mb-3'>
                  Alamat
                </h1>
                <div>
                  <p className='mb-3'>Pagar Dewa, Selebar</p>
                  <p>081271437801</p>

                  {/* social links */}
                  <div className='space-x-3 mt-6'>
                    <a href="#">
                      <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                    </a>
                    <a href="#">
                      <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
