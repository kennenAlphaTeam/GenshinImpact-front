import { useEffect, useState } from "react";
import InputUID from "./InputUID";
import allData from "./UserData";

export default function App() {
    const [ lock, setLock ] = useState('lock');
    const [ data, setData ] = useState([]);
    const [ userData, setUserData ] = useState();
    
    useEffect(() => {
        const data = allData(localStorage.getItem('UID'));
        setUserData(data);
    }, [lock]);
    return (
        <>
            <h1>Test Page</h1>
            {
                userData?
                <InputUID/>:
                <p>{userData}</p>
            }
        </>
    );
}