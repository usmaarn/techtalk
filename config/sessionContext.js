import {createContext, useContext, useState} from "react";
import axios from "axios";

const SessionContext = createContext(null);

export default function SessionProvider(props) {

    return (
        <SessionContext.Provider value={props.value}>
            {props.children}
        </SessionContext.Provider>
    )
}

export function useSession(){
    return useContext(SessionContext);
}

export async function signOut() {
    let response = await axios.post('/api/auth/logout');
}

export async function getSession() {
    const response = await fetch('http://localhost:3000/api/auth/session');
    return response.json();
}