import Image from "next/image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function Testimon ({testimonial}) {
    const {title, featuredImage, test } = testimonial.fields;
    return (
    <div className=" container py-10">
               {/* headaer section*/}
            <div className="text-center mb-10">
            <h1 className=" text-4xl font-bold font-cursive text-gray-800">Testimonial</h1>
            </div>
             {/* Testimonial Section*/}
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14 md:gap-5 place-items-center">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                    <div className="rounded-2xl max-w-[400px] group relative mb-4">
                            {/* image section */}
                    <Image src={`https:${featuredImage.fields.file.url}`}
            alt="foto"
            className="max-w-[140px]"
            width={200}
            height={200}            
            />  
                    </div>
                      {/* content section  */}
                      <div className="flex flex-col items-center gap-4">
                        <div className="space-y-3">
                            <div className="text-sx text-gray-500"> {documentToReactComponents(test)}
                            </div>
                            <h2 className="text-xl font-bold text-black/60 font-cursive">{title}
                            </h2>
                        </div>
                      </div>
                      <p className="text-black/20 text-9xl foont-serif absolute top-0 right-0">,, </p>
                </div>
            </div>
            </div>
    );
}