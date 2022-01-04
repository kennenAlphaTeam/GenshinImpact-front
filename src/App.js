import { useState } from "react";
import { characters } from "./Data";
import { profiles } from "./Data";

export default function CharacterList(){
  return (
    <>
      <p>
        {characters}
      </p>
      <p>
        {profiles}
      </p>
    </>
  );
}