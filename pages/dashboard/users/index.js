import Admin from "@/components/layouts/Admin";
import User from "../../../config/models/User";

export default function Users({users}) {

    users = JSON.parse(users);

    return (
        <Admin>
            <h3 className="text-4xl text-center">Admins</h3>
            <div className="mt-20 justify-center items-center flex flex-wrap gap-10 md:gap-y-20">
                {users.map(user => (
                    <div key={user} className="flex flex-col items-center gap-1">
                        <div className="w-[200px] h-[200px] bg-gray-200 rounded-full">
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                            <a href="#">{user.name}</a>
                        </h3>

                        <p className="font-medium text-gray-600">{user.role}</p>

                    </div>
                ))}
            </div>
        </Admin>
    )
}

export async function getServerSideProps(context) {
    let users = await User.findAll();
    users = JSON.stringify(users);
    console.log(users)
    return {props: {users}}
}