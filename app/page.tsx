import CharacterList  from "./components/CharacterList";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-4xl font-bold">Hello, Harry Potter World! ⚡</h1>
      <p className="mt-4 text-lg">Tailwind CSS is working! 🎉</p>
      <CharacterList />
    </div>
  );
}

