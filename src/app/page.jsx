import { createClient } from "contentful";
import Testimon from "@/components/Testimon";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home"
import Service from "@/components/Service";
import Banner from "@/components/Banner";
import Team from "@/components/Team";
import Footer from "@/components/Footer";


async function getTesti () {
  try {
    const client = createClient ({
      space: "ulxo9ugcvn1r",
      accessToken:"zPF1KV2uZUpd2cPyZwyC_kpjKrqEcZYC9kHsGRsA59A",
    });
    const tes = await client.getEntries({content_type: "testimonial"});
    return tes.items;
  } catch (error) {
    console.error(error);
  }

}

export default async function App() {
  const testi = await getTesti ();

  console.log(testi)
  return (
   <main> 
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Service/>
      <Banner/>
      <div>
      {testi.map((testimonial) => (
      <Testimon key={testimonial.sys.id} testimonial={testimonial}/> 
          ))}
    </div>
    <Team/>
    <Footer/>
    </div>
   </main>
   
  );
   
}
