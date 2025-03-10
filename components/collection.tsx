"use client";
/*// pages/index.tsx
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
      console.log(json.resources);
      setImages(json.resources);
    }
    fetchImages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold mt-4">Winter Collection</h1>
        <img
          src="https://res.cloudinary.com/demo/image/upload/f_auto/q_auto/w_1800,ar_3:1,c_fill/docs/colored_pencils"
          alt="Placeholder"
          className="w-full h-auto rounded"
        />
      </header>
      <main>
        <h2 className="text-xl font-semibold mb-4">Winter Gallery</h2>
        <section className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-2">
          {images.map((image) => (
            <Link key={image.asset_id} href={`/image/upload/f_auto/q_auto/w_1800,ar_3:1,c_fill/${image.public_id}-blanket`}>
              <img
                alt=""
                src={`https://res.cloudinary.com/demo/image/upload/f_auto/q_auto/w_200,h_200,c_fill,g_auto/${image.public_id}`}
                className="cursor-pointer rounded"
              />
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

        protocol: "https",
        hostname: "res.cloudinary.com"*/
 // pages/index.tsx

  
