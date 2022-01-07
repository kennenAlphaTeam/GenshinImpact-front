import { useEffect, useState } from "react";
import { CharacterInfo } from "./CharacterInfo";
import InputUID from "./InputUID";
import allData from "./UserData";

export default function App() {
    const [ lock, setLock ] = useState('lock');
    const [ userData, setUserData ] = useState();
    const [ data, setData ] = useState([]);
     
    useEffect(() => {
        const data = allData(localStorage.getItem('UID'));
        setUserData(data);
    }, [lock]);

    useEffect(() => {
        if (userData !== undefined) 
        {
            console.log(`user Data is ${userData}`);
            userData.then(value => setData(value[1].avatars));
        }
    }, [userData]);

    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <>
            <h1>Test Page</h1>
            {
                !data.length?
                <InputUID/>:<CharacterInfo data={data}/>
            }
        </>
    );
}