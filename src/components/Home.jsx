
import Image from "next/image"

const Home = () => {
  return ( 
  <>
  <span></span>
  <div className="min-h-[1000px] sm:min-h-[1200px] bg-brandDark flex justify-center items-center text-white" >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text content section*/ }
            <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
                <h1 
                data-aos= "fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  Kami menjual {" "}
                   <span 
                   data-aos="zoom-out"
                   data-aos-delay="300"
                   className="text-primary font-cursive">
                  Pempek
                  </span> {" "}
                  terbaik di kota ini
                   </h1>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <div className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-12 py-9 text-white hover:scale-105 duration-200">
                      <h1 className="font-bold font font-cursive">Gambaran Umum Perusahaan Pempek RR</h1> 
                      <p>
                    Pempek RR adalah produsen dan pengecer pempek terkemuka yang berbasis di Bengkulu. Sejak didirikan, Pempek RR telah dikenal karena kualitas unggul dalam menyajikan hidangan khas Palembang yang otentik dan lezat. Kami menggabungkan tradisi kuliner dengan inovasi modern untuk memastikan setiap produk kami memenuhi standar tertinggi.
                    </p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <div className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-12 py-9 text-white hover:scale-105 duration-200">
                      <h1 className="font-bold font font-cursive">Sejarah dan Nilai Perusahaan</h1> 
                      <p>
                      Didirikan di tahun 1990-an, Pempek RR bermula dari warisan keluarga yang kaya akan resep-resep tradisional. Dengan tekad untuk mempertahankan rasa dan kualitas, kami tumbuh dari sebuah warung kecil menjadi pilihan utama di kota Bengkulu. Nilai inti kami meliputi dedikasi terhadap kualitas, kejujuran dalam bahan baku, dan komitmen terhadap kepuasan pelanggan.
                    </p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <div className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-12 py-9 text-white hover:scale-105 duration-200">
                      <h1 className="font-bold font font-cursive">Pernyataan Misi</h1> 
                      <p>
                      Misi kami adalah untuk terus menjadi pemimpin dalam industri pempek dengan menyediakan produk berkualitas tinggi yang memuaskan lidah pelanggan kami. Kami berkomitmen untuk menjaga tradisi rasa autentik Palembang sambil terus berinovasi dalam proses produksi dan layanan kami.
                    </p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <div className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-12 py-9 text-white hover:scale-105 duration-200">
                      <h1 className="font-bold font font-cursive">Budaya Perusahaan</h1> 
                      <p>
                      Di Pempek RR, kami menghargai keragaman dan kolaborasi. Kami mendorong tim kami untuk terus berinovasi dan mempertahankan standar tinggi dalam setiap aspek bisnis kami. Kami juga berkomitmen untuk berkontribusi positif terhadap komunitas lokal kami dengan mendukung kegiatan sosial dan lingkungan.
                    </p>
                    </div>
                  </div>
            </div>
            {/* Image section*/ }
            <div data-aos="zoom in" 
            data-aos-delay="300"
            className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
             <Image src={"/images/pempek2.png"} 
              alt="produk utama" width={200} height={200} 
              className="w-[300px] sm:w-[450px] sm:scale-110 m-auto spin"
              />
              <div 
              data-aos="fade-left"
              className=" bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
                <h1>Selamat Datang</h1>
              </div>
              <div 
              data-aos="fade-right"
              className=" bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl">
                <h1>Pempek Terbaik</h1>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )  
}

export default Home
