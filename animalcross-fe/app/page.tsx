import Image from "next/image";
import Link from "next/link"; // Gunakan Link dari Next.js untuk navigasi internal

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION dengan video background */}
      <section className="bg-transparent">
        <header className="relative w-full flex items-center justify-center h-screen overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 inset-0 z-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/videos/animal-crossing-background.mp4" type="video/mp4" />
          </video>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 gap-6">
            <Image
              src="/images/animal.png"
              width={600}
              height={600}
              alt="Animal Crossing Logo"
              className="mx-auto drop-shadow-xl"
              priority
            />
            <button className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-2xl hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg">
              PRESS XO
            </button>
          </div>
        </header>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative w-full py-20 text-center overflow-hidden">
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg4.jpeg')"
          }}
        />
        <h1 className="text-7xl md:text-8xl font-bold font-mono mb-8 text-black">FEATURES</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          {[
            { title: "Villagers", href: "/villagers", image: "/images/villager_icon.png" },
            { title: "Recipes", href: "/recipes", image: "/images/recipe_icon.png" }, // Pastikan href ke /recipes
            { title: "About", href: "/about", image: "/images/about_icon.png" },
          ].map((feature) => (
            // Gunakan komponen Link dari Next.js
            <Link href={feature.href} key={feature.title}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-all hover:bg-yellow-50 hover:shadow-xl h-full flex flex-col items-center justify-start cursor-pointer">
                {/* === BAGIAN YANG DITAMBAHKAN === */}
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={feature.image}
                    alt={`${feature.title} icon`}
                    layout="fill"
                    objectFit="contain"
                    // Ganti path gambar di atas dengan path yang benar
                  />
                </div>
                {/* =============================== */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 font-sans">
                  Learn more about {feature.title.toLowerCase()}.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DISCOVER SECTION */}
      <section className="relative w-full py-20 text-center overflow-hidden">
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/yellowbg.png')"
          }}
        />
        <div className="absolute inset-0 bg-yellow-300/70 -z-10"></div>
        <h1 className="text-7xl md:text-8xl font-bold font-mono mb-8 text-black">DISCOVER</h1>
        <div className="max-w-3xl mx-auto px-6">
          <div className="aspect-video mb-6 rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8AkEFot5UF0"
              title="Animal Crossing Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-lg text-gray-700 mb-6 font-semi-bold font-sans">
            New to Animal Crossing: New Horizons? Come get the lay of the land and learn
            what to expect when you set out to create your own island paradise.
          </p>
          <a
            href="https://www.animal-crossing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-2xl hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Visit the website
          </a>
        </div>
      </section>
    </div>
  );
}
