// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Head>
        <title>VogueSphere</title>
        <meta name="description" content="Premium Fashion E-commerce Website" />
      </Head>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-light">Your Style, Elevated</h1>
          <p className="mt-6 text-lg text-gray-600">Discover curated drops, trends, and personalized outfits.</p>
          <div className="mt-8">
            <a href="/products/1" className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Shop Now
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
