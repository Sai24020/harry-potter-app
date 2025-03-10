/*import CharacterList  from "./components/CharacterList";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-4xl font-bold">Hello, Harry Potter World! ⚡</h1>
      <p className="mt-4 text-lg">Tailwind CSS is working! 🎉</p>
      <CharacterList />
    </div>
  );
}*/
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        'https://res.cloudinary.com/demo/image/list/cc0_ecommerce.json'
      );
      const json = await response.json();
      setImages(json.resources);
    }
    fetchImages();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-gray-200 to-gray-300 min-h-screen">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold mt-4">Our History</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          For many years, <strong>Bethany</strong> has been baking the most delicious pies at her home. In 2013, we opened our first store in Brussels...
        </p>
      </header>
      
      <section className="my-12 text-center">
        <h2 className="text-2xl font-semibold">Pies of the Week</h2>
        <p className="text-lg mb-6">Enjoy a weekly selection of our favorite pies</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.slice(0, 3).map((image) => (
            <div key={image.public_id} className="bg-white shadow-lg rounded-lg p-4">
              <Link href={`/image/${image.public_id}`}>
                <img
                  alt=""
                  src={`https://res.cloudinary.com/demo/image/upload/f_auto/q_auto/w_300,h_200,c_fill,g_auto/${image.public_id}`}
                  className="cursor-pointer rounded"
                />
              </Link>
              <h3 className="text-xl font-bold mt-2">{image.public_id.replace(/_/g, ' ')}</h3>
              <p className="text-gray-600 mt-1">$19.95</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
     