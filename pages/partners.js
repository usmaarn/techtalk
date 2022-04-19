import Main from "@/components/layouts/Main";

export default function Partners(){

    const partners = [1,2,3,4,5,6,7,8,9,0];

    return(
        <Main className="m-5 lg:m-24">
            <h3 className="text-4xl text-center">Our Partners</h3>
            <div className="mt-20 justify-center items-center flex flex-wrap gap-10 md:gap-y-20">
                {partners.map(team => (
                    <div key={team} className="flex flex-col items-center gap-1">
                        <div className="w-[300px] h-[300px] bg-gray-200 rounded-lg">
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                            <a href="#">Dillali</a>
                        </h3>

                        <p className="font-medium text-gray-600">
                            Inventory Management System
                        </p>

                    </div>
                ))}
            </div>
        </Main>
    )
}