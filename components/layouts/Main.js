import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Main({children, className, title}) {
    return (
        <div className="min-h-screen flex flex-col flex-wrap justify-between">
            <Head>
                <link rel="shortcut icon" href="/vercel.svg" type="image/x-icon" />
                <title>TechTalk Innovation - {title}</title>
            </Head>

            <Navbar />
            <div className={className}>
                {children}
            </div>
            <Footer />

        </div>
    )

}