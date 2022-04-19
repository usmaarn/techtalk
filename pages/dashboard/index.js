import CustomLink from "@/components/CustomLink";
import Admin from "@/components/layouts/Admin";

function index(){
    return(
        <Admin>
            <div className="flex justify-between items-center">
                <h2 className='text-3xl'>Dashboard</h2>
                <CustomLink className='px-3 py-2 bg-blue-400 text-white rounded' href='/dashboard/blogs/new'>
                    Create Blog
                </CustomLink>
            </div>
        </Admin>
    )
}

export default index;