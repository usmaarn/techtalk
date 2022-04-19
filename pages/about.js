import Main from "@/components/layouts/Main";

export default function About(){
    return(
        <Main className="p-5 lg:p-24">
            <h3 className="my-10 text-4xl font-medium">About Us</h3>
            {['who we are', 'what we do', 'our vision', 'our mission'].map(el => (
                <div key={el} className="flex flex-col md:flex-row justify-between gap-5 lg:gap-24 my-12 md:my-24 md:odd:flex-row-reverse">
                    <div className="md:w-1/2 flex flex-col gap-3 place-self-center">
                        <h3 className="capitalize text-xl font-semibold">{el}</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="flex-grow">
                        <div className="max-w-96 h-96 bg-gray-100 rounded">

                        </div>
                    </div>

                </div>
            ))}
        </Main>
    )
}