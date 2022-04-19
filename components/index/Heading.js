import CustomLink from "@/components/CustomLink";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from '/styles/index/Heading.module.scss';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import SvgImage from '/public/images/hero-img-1.png';

export const images = [
    {
        bgImage: 'tecktalk_img_1.jpeg',
        text: 'Welcome to the Tech Talk Innovation Hub',
        tag: 'TechTalk Innovation',
        link: '/',
    },
    {
        bgImage: 'tecktalk_img_2.jpeg',
        text: 'Learn all the skills you need to succeed in the modern workplace',
        tag: 'Learn New Skills',
        link: '/',
    },
    {
        bgImage: 'tecktalk_img_3.jpeg',
        text: 'Put your skills to work via opportunities via our global network and remote work platform.',
        tag: 'Expand Your Company',
        link: '/',
    },
    {
        bgImage: 'tecktalk_img_4.jpeg',
        text: 'We make it easier for our freelancers and engineers to earn through our Foreign Earner program.',
        tag: 'Earn With Ease',
        link: '/',
    },
    {
        bgImage: 'tecktalk_img_5.jpeg',
        text: 'We help startups scale and grow via our accelerator and incubator programs',
        tag: 'Grow Rapidly',
        link: '/',
    },
];

export default function Heading(){

    return(
        <div className={styles.wrapper}>

            <div className="flex flex-col justify-center items-center lg:grid grid-cols-2 gap-10">
                <div className="flex justify-center flex-col gap-5">
                    <h1 className="text-blue-900 text-3xl mt-10 lg:mt-0 md:text-6xl font-bold capitalize">
                        Ours is to change the narration
                    </h1>
                    <p className="text-lg md:text-2xl">
                        Combine truffels, melon and butter. mix with tender vegemite and serve crushed with rice. Enjoy!
                    </p>
                    <div className="flex gap-2 md:gap-10 items-center">
                        <CustomLink href='/contact' className={styles.actionBtn}>
                            Contact Us <MdOutlineKeyboardArrowRight />
                        </CustomLink>
                        <CustomLink href='/services' className={styles.actionBtn}>
                            Our Services <MdOutlineKeyboardArrowRight />
                        </CustomLink>
                    </div>
                </div>
                <div className="p-10">
                    <Image src={SvgImage} alt="Image" className='w-full h-full'/>
                </div>
            </div>

            <div className="flex flex-wrap  items-center md:p-10 justify-center gap-x-5 gap-y-3 md:gap-10 font-bold md:text-2xl text-gray-500">
                <CustomLink href='#' className={styles.socialIcon}>Facebook</CustomLink>
                <CustomLink href='#' className={styles.socialIcon}>Instagram</CustomLink>
                <CustomLink href='#' className={styles.socialIcon}>Twitter</CustomLink>
                <CustomLink href='#' className={styles.socialIcon}>LinkedIn</CustomLink>
                <CustomLink href='#' className={styles.socialIcon}>Email</CustomLink>
            </div>
        </div>
    )
}