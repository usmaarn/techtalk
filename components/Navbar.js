import styles from '@/styles/Navbar.module.scss';
import {RiMenu4Fill} from "react-icons/ri";
import CustomLink from "@/components/CustomLink";
import AuthMenu from "@/components/AuthMenu";
import {useState} from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return(
        <nav className={styles.navbar}>
            <CustomLink href='/' className='z-[99]'>
                <span className={styles.logoWrapper}>
                    <span className={styles.logo}>T</span>
                    <span className="hidden md:block">Tech-Talk <br/> Innovation</span>
                </span>
            </CustomLink>

            {open &&
                <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50 flex flex-col items-center justify-center lg:hidden">
                    <button className="absolute top-5 right-5 text-4xl" onClick={() => setOpen(false)}>
                        <AiOutlineCloseCircle />
                    </button>
                    <CustomLink href='/partners' className={styles.navLink}>Partners</CustomLink>
                    <CustomLink href='/teams' className={styles.navLink}>Team</CustomLink>
                    <CustomLink href='/blogs' className={styles.navLink}>Blogs</CustomLink>
                    <CustomLink href='/about' className={styles.navLink}>About</CustomLink>
                    <CustomLink href='/contact' className={styles.navLink}>Contact</CustomLink>
                </div>
            }

           <div className='lg:flex hidden'>
               <CustomLink href='/partners' className={styles.navLink}>Partners</CustomLink>
               <CustomLink href='/teams' className={styles.navLink}>Team</CustomLink>
               <CustomLink href='/blogs' className={styles.navLink}>Blogs</CustomLink>
               <CustomLink href='/about' className={styles.navLink}>About</CustomLink>
               <CustomLink href='/contact' className={styles.navLink}>Contact</CustomLink>
           </div>

            <AuthMenu />

            <button onClick={() => setOpen(true)} className='text-3xl lg:hidden'>
                <RiMenu4Fill />
            </button>

        </nav>
    )
}