import {FiSettings} from "react-icons/fi";
import CustomLink from "@/components/CustomLink";

export default function WhatWeDo() {

    return (
        <div className='p-5 lg:p-24'>

            <div className="mb-20">
                <h3 className='text-4xl font-bold text-center'>
                    What We Do
                </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-10 ">
                {['Edu-Tech', 'Soft-Tech', 'Enterpre-Tech', 'Media-Tech'].map(item => (
                    <div key={item} className="shadow px-5 py-10 flex flex-col items-center text-center
                            rounded-xl hbg-blue-100 transition duration-500 cursor-pointer">
                        <h1 className="text-8xl text-blue-900"><FiSettings /></h1>
                        <h3 className='text-3xl text-blue-900 font-[600] my-5'>
                            {item}
                        </h3>
                        <p className='lg:text-lg font-light text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error expedita, non quos itaque magni
                            fugit nesciunt quasi corporis tenetur impedit minima possimus adipisci repudiandae accusantium
                            ipsa? Qui provident ipsum libero consequatur praesentium voluptate error delectus illum alias
                        </p>
                        <CustomLink href="#" className="transition duration-300 hover:scale-105 font-bold mt-5 inline-block px-5 py-3 bg-blue-300 rounded">
                            Learn More >
                        </CustomLink>
                    </div>
                ))}
            </div>
        </div>
    )
}