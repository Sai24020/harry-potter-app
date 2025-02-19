This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
 

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Efter skapa ny repository utan readme.md Started::

✅ 1. Skapa Next.js-projektet
npx create-next-app@latest .

✅ 2. Lägg till Tailwind CSS
Kör:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

✅ 3.Öppna tailwind.config.js och uppdatera content:
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
           ],

           
📌 Nästa steg: Testa om Tailwind fungerar
Öppna app/page.js
Starta om Next.js-servern:
Öppna http://localhost:3000 i din webbläsare och se om Tailwind-klasserna fungerar.

✅ 4. Lägg till och skicka upp till GitHub
Lägg till ändringarna och skicka upp dem till din GitHub-repo:
git add .
git commit -m "Added Harry Potter API integration"
git push origin main
