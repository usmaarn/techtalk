import {IoMdSend} from "react-icons/io";
import CustomLink from "@/components/CustomLink";

export default function NewsLetter(){
    return(
        <div>
            <div className="p-5 md:p-28 bg-gradient-to-tr from-blue-100 to-red-100 flex flex-col gap-3 items-center">
                <h3 className='md:text-3xl font-bold text-blue-500'>
                    Subscribe to our Newsletter
                </h3>
                <p className='text-black/75 text-sm text-center md:text-xl'>
                    Tremble without death, and we won’t pull a creature.
                </p>
                <div className="rounded overflow-hidden p-1 focus-within:shadow bg-white/75 flex gap-5">
                    <input type="email" className='w-full max-w-96 bg-transparent outline-0 px-5 py-1'
                           placeholder='Email Address'/>
                    <span className='cursor-pointer text-2xl w-12 h-12 rounded transition-all
                            flex items-center justify-center hover:bg-blue-500 text-blue-500 hover:text-white'>
                        <IoMdSend />
                    </span>
                </div>
            </div>

            <div className="px-5 py-10 md:p-24 flex flex-col items-center gap-5 md:w-2/3 mx-auto">
                <h1 className="text-2xl text-center md:text-4xl font-semibold text-blue-800">
                    Lets get started with your business.
                </h1>
                <h3 className="md:text-xl text-center ">
                    We provide our clients with applied insights that transcend borders. We shape your brand through storytelling.
                </h3>
                <CustomLink href="#" className="px-5 md:px-10 py-3 md:py-4 rounded bg-red-600
                hover:scale-105 text-white font-bold">
                    Contact Us >
                </CustomLink>
            </div>
        </div>
    )
}