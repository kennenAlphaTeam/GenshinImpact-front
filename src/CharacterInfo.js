import { useEffect, useState } from "react";

export function CharacterInfo(data) {
    useEffect(() => {console.log("From CharacterInfo.js"); console.log(data);})
    const characterList = data.data.map((values, index) => (
        <>
        <li key={index}> 
            <img src={values.icon} alt="" />
            <h3>{values.name}</h3>
            {values.element}
        </li>
        </>
    ));
    return (
        <ul>
            {characterList}
        </ul>
    );
}