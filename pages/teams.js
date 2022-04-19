import Main from "@/components/layouts/Main";

export default function Teams(){

    const teams = [1,2,3,4,5,6,7,8,9,0];

    return(
        <Main className="m-5 lg:m-24">
            <h3 className="text-4xl text-center">Meet The Team</h3>
            <div className="mt-20 justify-center items-center flex flex-wrap gap-10 md:gap-y-20">
                {teams.map(team => (
                    <div key={team} className="flex flex-col items-center gap-1">
                        <div className="w-[200px] h-[200px] bg-gray-200 rounded-full">
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                            <a href="#">Usman Muhammad</a>
                        </h3>

                        <p className="font-medium text-gray-600">Chief Operating Officer</p>

                    </div>
                ))}
            </div>
        </Main>
    )
}