import Image from "next/image"

const Menus = [
    {
        id:1,
        name: "Home",
        link: "/#",
    },
    {
        id:2,
        name: "Produk",
        link: "/#produk",
    },
    {
        id:3,
        name: "Tentang Kami",
        link: "/#tentang kami",
    },
]
const Navbar = () => {
  return  (
<section>
  <nav className="wrapper">
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
     <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
            {/* Logo section */ }
           
            <div className="fade-down" data-aos-once="true">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive">
              <Image 
              src="/images/logo.png" 
              alt="Logo" 
              className="rounded-full"
              width={100} 
              height={100}
              style={{ width: "auto", height: "auto" }}
              />
              Pempek RR
            </a>
          </div>
            {/* Links section */ }
            <div 
             data-aos="fade-down"
             data-aos-once="true"
             data-aos-delay="300"
            className="flex justify-between items-center gap-4">
                <ul className="hidden sm:flex items-center gap-4">
                    {Menus.map((data, index) => (
                            <li key={index}>
                                <a href={data.link}
                                className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200" >
                                    {data.name}
                                    </a>
                                </li>
                              ))}
                </ul>
                <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">Order</button>
            </div>
        </div>
     </div>
    </div>
    </nav>
    </section>
  );
};

export default Navbar
