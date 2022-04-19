import Navbar from "@/components/Navbar";
import Sidenav from "@/components/dahboard/Sidenav";
import Footer from "@/components/Footer";

export default function Admin({children, heading}){
    return(
        <div className=''>
            <Navbar />

            <div className="p-5 lg:px-20">
                <div className="mt-10 grid grid-cols-5">
                    <Sidenav />
                    <div className="px-10 col-span-4">
                        {heading && <h3 className='text-3xl'>{heading}</h3>}
                        {children}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}