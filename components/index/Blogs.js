import {RiTimeLine} from "react-icons/ri";
import CustomLink from "@/components/CustomLink";
import Image from "next/image";

export default function Blogs({blogs}){
    return(
        <div className='px-5 lg:px-32 mt-10 lg:mt-0 mb-20'>
            <h3 className='text-xl flex items-center gap-2 uppercase tracking-widest font-bold
                        mb-5 md:mb-10 text-blue-900'>
                <span className='text-3xl'><RiTimeLine /></span> Recent Blogs
            </h3>

            <div className="grid md:grid-cols-3 gap-10">
                {blogs.map(blog => (
                    <CustomLink href="#" key={blog.id} className='block'>
                        <div className="border rounded-lg overflow-hidden cursor-pointer">
                            <div className='bg-black h-36 overflow-hidden hover:scale-110 transition duration-500'>
                                <Image width={400} height={300} objectFit="cover" src={`/images/techtalk/${blog.bgImage}`}
                                       className='opacity-50' alt={blog.title} />
                            </div>
                            <div className="py-5 font-medium">
                                {/*<span className='text-sm bg-blue-200 py-2 px-5'>{blog.tag}</span>*/}
                                <h5 className='px-5 text-lg hover:underline leading-tight'>{blog.title}</h5>
                            </div>
                        </div>
                    </CustomLink>
                ))}
            </div>
            <CustomLink href="/blogs" className="float-right mt-5 hover:underline cursor-pointer font-bold text-blue-600">
                Read More
            </CustomLink>
        </div>
    )
}