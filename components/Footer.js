import CustomLink from "@/components/CustomLink";

export default function Footer() {
    return(
        <div className="md:flex bg-gray-50 items-center justify-between p-5 md:py-10 md:px-16 border-t text-gray-600">
            <p className="flex gap-1 flex-col md:flex-row items-center text-sm">
                &copy; {new Date().getFullYear()}
                <CustomLink href='/' className="text-blue-900 font-medium hover:underline">
                    TechTalk Innovation.
                </CustomLink>
                All Rights Reserved.
            </p>

            <p className="hidden md:flex gap-1 text-sm">
                built by:<CustomLink className="font-semibold text-blue-800" href="#">Usmaarn</CustomLink>
            </p>
        </div>
    )
}