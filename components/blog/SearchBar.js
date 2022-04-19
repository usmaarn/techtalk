import {RiSearch2Line} from "react-icons/ri";
import {useState} from "react";


function SearchBar() {

    const [state, setState] = useState('');

    return(
        <div className="rounded border p-5">
            <form className="flex items-center focus-within:ring-1 rounded px-3 py-2 bg-gray-50 transition duration-500">
                <button className="pr-2">
                    <RiSearch2Line />
                </button>

                <input type="text"
                       onChange={e => setState(e.target.value)}
                       value={state}
                       placeholder="Search..."
                       className="bg-transparent w-full outline-0 font-light text-sm"
                />
            </form>
        </div>
    )
}

export default SearchBar