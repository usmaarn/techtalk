import {signOut, useSession} from "../config/sessionContext";
import styles from "@/styles/Navbar.module.scss";
import CustomLink from "@/components/CustomLink";
import {useState} from "react";
import {FaRegUserCircle} from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";
import {RiDashboardLine} from 'react-icons/ri'


const DropdownLink = ({link, icon, text, className}) => {
    return <CustomLink href={link} className=' flex items-center gap-5 px-3 py-2 hover:bg-blue-50 rounded hover:shadow'>
        {icon} <span className="text-sm">{text}</span>
    </CustomLink>
}

export default function AuthMenu(){
    const session = useSession();
    const [open, setOpen] = useState(false);
    if (!session.data){
        return (
            <div className='flex items-center gap-5'>
                <CustomLink href='/' className={styles.contactUs}>Contact Us</CustomLink>
                <CustomLink href='/auth/login' className={styles.loginBtn}>Login</CustomLink>
            </div>
        )
    }

    return(
        <div className='ml-auto relative flex'>

            <button onClick={() => setOpen(!open)} className="text-3xl">
                <FaRegUserCircle />
            </button>

            {open && <div className='absolute top-10 right-0 w-44 bg-white p-3 rounded shadow flex flex-col gap-3'>
                <DropdownLink link='/dashboard' text='Dashboard' icon={<RiDashboardLine />} />
                <button onClick={signOut} className="p-2 flex items-center gap-2 justify-center text-white bg-red-500 rounded">
                   <FiLogOut /> <span className="text-sm">Sign Out</span>
                </button>
            </div>}

        </div>
    )
}