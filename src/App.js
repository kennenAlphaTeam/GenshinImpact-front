import { useState } from "react";
import { UserData } from "./UserData";
import InputUID from "./InputUID";
import { profile } from "./UserData";
import { characters } from "./UserData";

export default function App() {
    const [ data, setData ] = useState([]);
    function handleLoad() {
        const userUID = localStorage.getItem('UID');
        UserData(userUID)
        .then(
            ()=>{
                setData([{ id: "profileData", data: profile}, { id: "characterData", data: characters}])
            }
        );
    }
    return (
        <>
            <h1>Test Page</h1>
            {
                localStorage.getItem('UID')===null?
                <InputUID/>:
                <>
                <h2 onLoad={handleLoad}>UID checked!!</h2>
                <p>{data.filter((element)=>element.id === "profileData")}</p>
                </>
            }
        </>
    );
}