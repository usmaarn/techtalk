import {RiDashboardLine, RiTeamLine} from "react-icons/ri";
import {FaBlog} from "react-icons/fa";
import {GrInfo} from "react-icons/gr";
import {FiSettings, FiUsers} from "react-icons/fi";
import CustomLink from "@/components/CustomLink";


const DropdownLink = ({link, icon, text, className}) => {
    return <CustomLink href={'/dashboard'+link}
                       className=' flex items-center gap-5 px-3 py-2 hover:bg-blue-100 rounded hover:shadow'>
        {icon} <span className="">{text}</span>
    </CustomLink>
}

export default function Sidenav() {
    return(
        <div className="col-span-1">
            <div className="p-5 h-[70vh] bg-blue-50 rounded-lg sticky top-28 flex flex-col">
                <DropdownLink link='/' text='Dashboard' icon={<RiDashboardLine />} />
                <DropdownLink link='/blogs' text='Blogs' icon={<FaBlog />} />
                <DropdownLink link='/site_info' text='Site Info' icon={<GrInfo />} />
                <DropdownLink link='/users' text='Users' icon={<FiUsers />} />
                <DropdownLink link='/team' text='Team' icon={<RiTeamLine />} />

                <div className="mt-auto">
                    <DropdownLink link='/settings' text='Settings' icon={<FiSettings />} />
                </div>
            </div>
        </div>
    )
}