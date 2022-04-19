import {useState} from "react";
import SearchBar from "@/components/blog/SearchBar";

function Sidebar() {

    return(
        <div className="col-span-1 sticky top-10">
            <SearchBar />
        </div>
    )
}

export default Sidebar