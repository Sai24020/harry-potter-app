"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  
//https://harry-potter-api-en.onrender.com/books

  useEffect(() => {
    fetch("https://harry-potter-api-en.onrender.com/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Harry Potter Characters</h1>
      <div className="grid grid-cols-2 gap-4">
        {characters.map((char) => (
          <div key={char.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-red-500">{char.character}</h2>
            <Image
                className="grid gap-4 m-3 p-4 rounded w-full max-w-[360px] shadow-xl rounded-md"
                src={char.image}
                height={200} 
                width={200}
                alt={char.nickname}
                />
            <ul><span className="text-sky-600">Children are:</span> <li> {char.child || "Unknown"}</li></ul>
            <p><span className="text-sky-600">House:</span> <br></br>{char.hogwartsHouse || "Unknown"}</p>
            <p><span className="text-sky-600">InterpretedBy:</span><br></br> {char.interpretedBy || "Unknown"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
