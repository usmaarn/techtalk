import Link from "next/link";

const CustomLink = ({href, className, children}) => {
    return(
        <Link href={href}>
            <span className={className + ' transition duration-300 cursor-pointer'}>{children}</span>
        </Link>
    )
}

export default CustomLink